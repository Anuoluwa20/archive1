param(
  [string[]]$Lists = @("sites-01.txt","sites-02.txt"),
  [string]$Dir = "pages"
)

function Get-Slug([string]$u) {
  $s = $u -replace '^https?://', ''
  $s = $s -replace '[^A-Za-z0-9\.\-]', '_'
  return $s.Trim('_')
}

$rows = @()
foreach ($l in $Lists) {
  foreach ($url in Get-Content $l) {
    $url = $url.Trim()
    if ($url -eq "" -or $url.StartsWith("#")) { continue }
    $slug = Get-Slug $url
    $p = Join-Path $Dir "$slug.html"
    $rows += [pscustomobject]@{
      url    = $url
      slug   = $slug
      status = $(if (Test-Path $p) { "OK" } else { "ERR: not downloaded" })
      bytes  = $(if (Test-Path $p) { (Get-Item $p).Length } else { 0 })
    }
  }
}
$rows | Export-Csv -Path (Join-Path $Dir "_manifest.csv") -NoTypeInformation
Write-Output ("manifest entries: {0}  |  OK: {1}" -f $rows.Count, ($rows | Where-Object status -eq "OK").Count)
