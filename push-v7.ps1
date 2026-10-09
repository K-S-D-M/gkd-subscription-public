$ErrorActionPreference = "Stop"
$token = $env:GH_TOKEN
$headers = @{ "User-Agent" = "Mozilla/5.0"; "Authorization" = "token $token" }
$owner = "K-S-D-M"
$repo = "gkd-subscription-public"
$branch = "main"

# Load blob shas for V7 assets
$blobs = Get-Content "$PSScriptRoot\blob-shas.json" -Raw -Encoding UTF8 | ConvertFrom-Json

# Build assets tree items
$assetItems = @()
foreach ($prop in $blobs.PSObject.Properties) {
    $path = $prop.Name
    if ($path -like "assets/*") {
        $fileName = $path.Substring("assets/".Length)
        $assetItems += @{
            path = $fileName
            mode = "100644"
            type = "blob"
            sha  = $prop.Value
        }
    }
}
Write-Output "Asset items count: $($assetItems.Count)"

# Create assets subtree tree
$assetsTreeBody = @{ tree = $assetItems } | ConvertTo-Json -Depth 5
$assetsTree = Invoke-RestMethod -Method Post -Uri "https://api.github.com/repos/$owner/$repo/git/trees" -Headers $headers -ContentType "application/json" -Body $assetsTreeBody -TimeoutSec 60
Write-Output "Assets tree SHA: $($assetsTree.sha)"

# Root tree items
$rootItems = @(
    @{ path = "404.html";        mode = "100644"; type = "blob"; sha = "dcba087c57aacd5f772ed6448afd047452cf4888" },
    @{ path = "README.md";       mode = "100644"; type = "blob"; sha = "ca4194de533ab0a4230c391f80b83b6cb712c216" },
    @{ path = "gkd.json5";       mode = "100644"; type = "blob"; sha = "8c1c9982e00ba832ae346f2d0b1616a7f532bda8" },
    @{ path = "gkd.version.json5"; mode = "100644"; type = "blob"; sha = "fdb2376fa3207d2598f6baa13cd2db1955fd29b2" },
    @{ path = "index.html";      mode = "100644"; type = "blob"; sha = "dcba087c57aacd5f772ed6448afd047452cf4888" },
    @{ path = "inspect-dist.zip"; mode = "100644"; type = "blob"; sha = "597375c6032b390a175c1a264d5101660e74d469" },
    @{ path = "assets"; mode = "040000"; type = "tree"; sha = $assetsTree.sha }
)

# Create root tree
$rootTreeBody = @{ tree = $rootItems } | ConvertTo-Json -Depth 5
$rootTree = Invoke-RestMethod -Method Post -Uri "https://api.github.com/repos/$owner/$repo/git/trees" -Headers $headers -ContentType "application/json" -Body $rootTreeBody -TimeoutSec 60
Write-Output "Root tree SHA: $($rootTree.sha)"

# Get current HEAD commit
$headCommit = (Invoke-RestMethod -Uri "https://api.github.com/repos/$owner/$repo/branches/$branch" -Headers $headers -TimeoutSec 30).commit.sha
Write-Output "HEAD commit: $headCommit"

# Create commit
$commitBody = @{
    message = "V7 干净版本"
    tree    = $rootTree.sha
    parents = @($headCommit)
    author  = @{ name = "K-S-D-M"; email = "51053441+K-S-D-M@users.noreply.github.com" }
    committer = @{ name = "K-S-D-M"; email = "51053441+K-S-D-M@users.noreply.github.com" }
} | ConvertTo-Json -Depth 5
$commit = Invoke-RestMethod -Method Post -Uri "https://api.github.com/repos/$owner/$repo/git/commits" -Headers $headers -ContentType "application/json" -Body $commitBody -TimeoutSec 60
Write-Output "Commit SHA: $($commit.sha)"

# Update branch ref
$refBody = @{ sha = $commit.sha; force = $false } | ConvertTo-Json
$refUpdate = Invoke-RestMethod -Method Patch -Uri "https://api.github.com/repos/$owner/$repo/git/refs/heads/$branch" -Headers $headers -ContentType "application/json" -Body $refBody -TimeoutSec 60
Write-Output "Branch ref updated: $($refUpdate.ref) -> $($refUpdate.object.sha)"
Write-Output "=== SUCCESS ==="