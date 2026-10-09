$ErrorActionPreference = "Stop"
$token = $env:GH_TOKEN
$headers = @{ "User-Agent" = "Mozilla/5.0"; "Authorization" = "token $token" }
$owner = "K-S-D-M"
$repo = "gkd-subscription-public"
$branch = "main"

Write-Output "=== Step 1: Get current HEAD tree ==="
$head = (Invoke-RestMethod -Uri "https://api.github.com/repos/$owner/$repo/branches/$branch" -Headers $headers).commit.sha
Write-Output "HEAD: $head"
$tree = (Invoke-RestMethod -Uri "https://api.github.com/repos/$owner/$repo/git/trees/$head`?recursive=1" -Headers $headers).tree
Write-Output "Total tree entries: $($tree.Count)"

$assetBlobs = $tree | Where-Object { $_.type -eq "blob" -and $_.path -like "assets/*" }
Write-Output "Asset blobs: $($assetBlobs.Count)"
$mapBlobs = $assetBlobs | Where-Object { $_.path -like "*.map" }
Write-Output "Map blobs to remove: $($mapBlobs.Count)"
$keptAssets = $assetBlobs | Where-Object { $_.path -notlike "*.map" }
Write-Output "Kept asset blobs: $($keptAssets.Count)"

Write-Output "=== Step 2: Create new assets tree (without .map files) ==="
$assetItems = @()
foreach ($b in $keptAssets) {
    $fileName = $b.path.Substring("assets/".Length)
    $assetItems += @{ path = $fileName; mode = "100644"; type = "blob"; sha = $b.sha }
}
$assetItems = @($assetItems | Sort-Object path)
$assetsTreeBody = @{ tree = $assetItems } | ConvertTo-Json -Depth 5
$assetsTree = Invoke-RestMethod -Method Post -Uri "https://api.github.com/repos/$owner/$repo/git/trees" -Headers $headers -ContentType "application/json" -Body $assetsTreeBody -TimeoutSec 120
Write-Output "New assets tree SHA: $($assetsTree.sha)"

Write-Output "=== Step 3: Create updated README blob ==="
$readmeContent = "# gkd-subscription-public

GKD 订阅公开发布仓库。

## 内容

- `gkd.json5` / `gkd.version.json5`：GKD 订阅规则（由 private 仓库 Action 自动同步）
- `index.html` + `assets/`：GKD inspect 网页工具（Vue + Vite 构建产物，直接推送部署）

## 部署说明

- 本仓库同时启用 GitHub Pages，发布页面为 https://k-s-d-m.github.io/gkd-subscription-public/
- 部署方式：直接推送 `index.html` / `404.html` / `assets/` 到 main 分支即可
- 根目录必须保留 `.nojekyll` 空文件，否则 GitHub Pages 的 Jekyll 会忽略 `assets/` 中以下划线 `_` 开头的 chunk 文件，导致页面白屏
"
$readmeBytes = [System.Text.Encoding]::UTF8.GetBytes($readmeContent)
$readmeB64 = [Convert]::ToBase64String($readmeBytes)
$readmeBlobBody = @{ content = $readmeB64; encoding = "base64" } | ConvertTo-Json
$readmeBlob = Invoke-RestMethod -Method Post -Uri "https://api.github.com/repos/$owner/$repo/git/blobs" -Headers $headers -ContentType "application/json" -Body $readmeBlobBody -TimeoutSec 60
Write-Output "README blob SHA: $($readmeBlob.sha)"

Write-Output "=== Step 4: Create root tree (drop inspect-dist.zip, update README) ==="
$rootItems = @()
foreach ($t in $tree) {
    if ($t.type -eq "blob") {
        if ($t.path -eq "inspect-dist.zip") { Write-Output "Dropping $($t.path)"; continue }
        if ($t.path -eq "README.md") {
            $rootItems += @{ path = "README.md"; mode = "100644"; type = "blob"; sha = $readmeBlob.sha }
            Write-Output "Replacing README.md"
            continue
        }
        $rootItems += @{ path = $t.path; mode = "100644"; type = "blob"; sha = $t.sha }
    } elseif ($t.type -eq "tree" -and $t.path -eq "assets") {
        $rootItems += @{ path = "assets"; mode = "040000"; type = "tree"; sha = $assetsTree.sha }
        Write-Output "Replacing assets tree"
    }
}
$rootItems = @($rootItems | Sort-Object path)
$rootTreeBody = @{ tree = $rootItems } | ConvertTo-Json -Depth 5
$rootTree = Invoke-RestMethod -Method Post -Uri "https://api.github.com/repos/$owner/$repo/git/trees" -Headers $headers -ContentType "application/json" -Body $rootTreeBody -TimeoutSec 60
Write-Output "Root tree SHA: $($rootTree.sha)"

Write-Output "=== Step 5: Create commit ==="
$commitBody = @{
    message = "chore: remove sourcemap files, drop inspect-dist.zip, update README"
    tree    = $rootTree.sha
    parents = @($head)
    author  = @{ name = "K-S-D-M"; email = "51053441+K-S-D-M@users.noreply.github.com" }
    committer = @{ name = "K-S-D-M"; email = "51053441+K-S-D-M@users.noreply.github.com" }
} | ConvertTo-Json -Depth 5
$commit = Invoke-RestMethod -Method Post -Uri "https://api.github.com/repos/$owner/$repo/git/commits" -Headers $headers -ContentType "application/json" -Body $commitBody -TimeoutSec 60
Write-Output "Commit SHA: $($commit.sha)"

Write-Output "=== Step 6: Update branch ref ==="
$refBody = @{ sha = $commit.sha; force = $false } | ConvertTo-Json
$refUpdate = Invoke-RestMethod -Method Patch -Uri "https://api.github.com/repos/$owner/$repo/git/refs/heads/$branch" -Headers $headers -ContentType "application/json" -Body $refBody -TimeoutSec 60
Write-Output "Branch ref updated: $($refUpdate.ref) -> $($refUpdate.object.sha)"
Write-Output "=== SUCCESS ==="