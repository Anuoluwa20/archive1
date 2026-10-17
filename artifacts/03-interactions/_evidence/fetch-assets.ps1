param(
  [string]$Dir = "pages",
  [string]$OutDir = "assets",
  [int]$MaxCss = 4,
  [int]$MaxJs = 3
)

$ErrorActionPreference = "Continue"
New-Item -ItemType Directory -Force -Path $OutDir | Out-Null
$manifest = Import-Csv (Join-Path $Dir "_manifest.csv")
$report = @()

foreach ($row in $manifest) {
  if ($row.status -ne "OK") { continue }
  $slug = $row.slug
  $html = [System.IO.File]::ReadAllText((Join-Path $Dir "$slug.html"))
  $base = [System.Uri]$row.url

  $links = [regex]::Matches($html, '<link[^>]+rel=["'']?stylesheet["'']?[^>]*>') |
    ForEach-Object { [regex]::Match($_.Value, 'href=["'']([^"'']+)["'']').Groups[1].Value }
  $scripts = [regex]::Matches($html, '<script[^>]+src=["'']([^"'']+)["'']') |
    ForEach-Object { $_.Groups[1].Value }

  $targets = @()
  $targets += ($links | Where-Object { $_ } | Select-Object -First $MaxCss)
  $targets += ($scripts | Where-Object { $_ } | Select-Object -First $MaxJs)

  $destDir = Join-Path $OutDir $slug
  New-Item -ItemType Directory -Force -Path $destDir | Out-Null
  $i = 0
  foreach ($t in $targets) {
    try { $abs = [System.Uri]::new($base, $t).AbsoluteUri } catch { continue }
    if ($abs -notmatch '^https?://') { continue }
    $ext = if ($abs -match '\.js(\?|$)') { "js" } else { "css" }
    $i++
    $dest = Join-Path $destDir ("{0:d2}.{1}" -f $i, $ext)
    if ((Test-Path $dest) -and (Get-Item $dest).Length -gt 0) {
      $report += [pscustomobject]@{ site=$slug; kind=$ext; bytes=(Get-Item $dest).Length; url="$abs  [cached]" }
      continue
    }
    try {
      $r = Invoke-WebRequest -Uri $abs -UseBasicParsing -TimeoutSec 30 -UserAgent "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/131.0 Safari/537.36"
      [System.IO.File]::WriteAllText($dest, $r.Content)
      $report += [pscustomobject]@{ site=$slug; kind=$ext; bytes=$r.Content.Length; url=$abs }
    } catch {
      $report += [pscustomobject]@{ site=$slug; kind=$ext; bytes=0; url="$abs  [ERR] " + ($_.Exception.Message -replace ':.*','') }
    }
  }
}

$report | Export-Csv -Path (Join-Path $OutDir "_assets.csv") -NoTypeInformation
$report | Where-Object { $_.bytes -gt 0 } | Measure-Object -Property bytes -Sum |
  ForEach-Object { "Assets downloaded: $($_.Count), total bytes: $($_.Sum)" }
$report | Where-Object { $_.bytes -eq 0 } | ForEach-Object { "FAILED: $($_.url)" }
