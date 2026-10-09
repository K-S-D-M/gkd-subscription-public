$ErrorActionPreference = "Stop"
$token = $env:GH_TOKEN
$headers = @{ "User-Agent" = "Mozilla/5.0"; "Authorization" = "token $token" }
$owner = "K-S-D-M"
$repo = "gkd-subscription-public"
$baseDir = "$env:USERPROFILE\Downloads\inspect-v7\assets"

$results = @{}
$files = Get-ChildItem -Path $baseDir -File -Recurse
$count = 0
foreach ($f in $files) {
    $rel = "assets/" + $f.FullName.Substring($baseDir.Length + 1).Replace("\", "/")
    $bytes = [System.IO.File]::ReadAllBytes($f.FullName)
    $b64 = [Convert]::ToBase64String($bytes)
    $body = @{ content = $b64; encoding = "base64" } | ConvertTo-Json
    try {
        $resp = Invoke-RestMethod -Method Post -Uri "https://api.github.com/repos/$owner/$repo/git/blobs" -Headers $headers -ContentType "application/json" -Body $body -TimeoutSec 60
        $results[$rel] = $resp.sha
        $count++
        if ($count % 20 -eq 0) { Write-Output "Progress: $count/$($files.Count)" }
    } catch {
        Write-Output "ERROR creating blob for $rel : $($_.Exception.Message)"
        $results[$rel] = "ERROR"
    }
}
$results | ConvertTo-Json | Out-File "$PSScriptRoot\blob-shas.json" -Encoding UTF8
Write-Output "Done. Total blobs: $($results.Count)"
Write-Output "Errors: $(($results.Values | Where-Object { $_ -eq 'ERROR' }).Count)"