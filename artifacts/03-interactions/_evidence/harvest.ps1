param(
  [string]$ListFile = "sites.txt",
  [string]$OutDir = "pages"
)

$ErrorActionPreference = "Continue"
New-Item -ItemType Directory -Force -Path $OutDir | Out-Null

function Get-Slug([string]$u) {
  $s = $u -replace '^https?://', ''
  $s = $s -replace '[^A-Za-z0-9\.\-]', '_'
  return $s.Trim('_')
}

$rows = @()
foreach ($url in Get-Content $ListFile) {
  $url = $url.Trim()
  if ($url -eq "" -or $url.StartsWith("#")) { continue }
  $slug = Get-Slug $url
  $htmlPath = Join-Path $OutDir "$slug.html"
  $status = "OK"
  $bytes = 0
  try {
    $r = Invoke-WebRequest -Uri $url -UseBasicParsing -TimeoutSec 40 -UserAgent "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0 Safari/537.36"
    [System.IO.File]::WriteAllText($htmlPath, $r.Content)
    $bytes = $r.Content.Length
  } catch {
    $status = "ERR: " + $_.Exception.Message
  }
  $rows += [pscustomobject]@{ url = $url; slug = $slug; status = $status; bytes = $bytes }
  Write-Output ("{0,-7} {1,8}  {2}" -f ($status -replace ': .*',''), $bytes, $url)
}

$rows | Export-Csv -Path (Join-Path $OutDir "_manifest.csv") -NoTypeInformation
Write-Output ""
Write-Output "Downloaded HTML files -> $OutDir"
