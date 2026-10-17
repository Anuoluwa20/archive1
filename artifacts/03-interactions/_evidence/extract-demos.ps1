param(
  [string]$Dir = "pages",
  [string]$Filter = "scroll-driven-animations.style_demos*",
  [int]$MaxChars = 4200,
  [string]$OutFile = "demos-code.md"
)

$lines = @()
$files = Get-ChildItem -Path $Dir -Filter "*.html" | Where-Object { $_.Name -like $Filter } | Sort-Object Name
foreach ($f in $files) {
  $t = [System.IO.File]::ReadAllText($f.FullName)
  $lines += "## " + $f.BaseName
  $lines += ""
  $styles = [regex]::Matches($t, '(?is)<style[^>]*>(.*?)</style>') | ForEach-Object { $_.Groups[1].Value.Trim() }
  $scripts = [regex]::Matches($t, '(?is)<script[^>]*>(.*?)</script>') | ForEach-Object { $_.Groups[1].Value.Trim() } | Where-Object { $_.Length -gt 40 }
  foreach ($s in $styles) {
    $body = if ($s.Length -gt $MaxChars) { $s.Substring(0, $MaxChars) + "`n/* …truncated… */" } else { $s }
    $lines += '```css'
    $lines += $body
    $lines += '```'
    $lines += ""
  }
  foreach ($s in $scripts) {
    $body = if ($s.Length -gt 1500) { $s.Substring(0, 1500) + "`n// …truncated…" } else { $s }
    $lines += '```js'
    $lines += $body
    $lines += '```'
    $lines += ""
  }
  $rm = [regex]::Matches($t, '(?i)prefers-reduced-motion').Count
  $lines += "prefers-reduced-motion mentions: $rm"
  $lines += ""
  $lines += "---"
  $lines += ""
}
[System.IO.File]::WriteAllLines($OutFile, $lines)
Write-Output "Wrote $OutFile from $($files.Count) demo pages"
