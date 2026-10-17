param(
  [string]$PagesDir  = "pages",
  [string]$AssetsDir = "assets",
  [string]$OutFile   = "findings.md"
)

$probes = [ordered]@{
  "reduced-motion-block" = "@media[^{]*prefers-reduced-motion[^{]*\{[^}]*\{[^}]*\}[^}]*\}"
  "scrolltimeline"       = "(animation-timeline|scroll-timeline|view-timeline|animation-range)\s*:[^;{}]+;?"
  "viewtransition"       = "(@view-transition[^{]*\{[^}]*\}|view-transition-name\s*:[^;]+;?)"
  "focus-visible"        = ":focus-visible[^{]*\{[^}]{0,200}\}"
  "sticky"               = "position\s*:\s*sticky"
  "clip-path-reveal"     = "clip-path\s*:[^;{}]{0,120}"
  "hover-video-js"       = "(mouseenter|mouseover)[^;\n]{0,160}"
  "cursor-rule"          = "cursor\s*:\s*(none|url\([^)]*\))[^;]*"
  "marquee"              = "(@keyframes[^{]*(marquee|ticker|scroll)[^{]*\{(?:[^{}]*\{[^}]*\})*\})"
  "transition-hover"     = "(:hover[^{]*\{[^}]{0,160}\})"
  "transition-prop"      = "(transition\s*:[^;{}]{0,120})"
  "animation-keyframes"  = "@keyframes\s+[A-Za-z0-9_\-]+"
  "blend"                = "mix-blend-mode\s*:[^;]+"
  "will-change"          = "will-change\s*:[^;]+"
  "backdrop-filter"      = "backdrop-filter\s*:[^;]+"
  "scroll-behavior"      = "scroll-behavior\s*:[^;]+"
  "starting-style"       = "@starting-style[^{]*\{[^}]{0,160}"
}

$lines = @()
$lines += "# Extracted implementation evidence"
$lines += ""
$lines += "Generated: " + (Get-Date -Format "yyyy-MM-dd HH:mm")
$lines += ""

$sites = Get-ChildItem -Path $PagesDir -Filter *.html | Sort-Object Name
foreach ($f in $sites) {
  $slug = $f.BaseName
  $text = [System.IO.File]::ReadAllText($f.FullName)
  $assetDir = Join-Path $AssetsDir $slug
  $assetFiles = @()
  if (Test-Path $assetDir) { $assetFiles = Get-ChildItem $assetDir -File }
  foreach ($af in $assetFiles) { $text += "`n/* FILE: " + $af.Name + " */`n" + [System.IO.File]::ReadAllText($af.FullName) }

  $lines += "## " + $slug
  $lines += ""
  $lines += ("Source bytes scanned: {0:N0}  |  assets: {1}" -f $text.Length, $assetFiles.Count)
  $lines += ""

  foreach ($k in $probes.Keys) {
    $ms = [regex]::Matches($text, $probes[$k], "IgnoreCase")
    if ($ms.Count -eq 0) { continue }
    $lines += ("### " + $k + "  (" + $ms.Count + " matches)")
    $lines += '```css'
    $seen = @{}
    $n = 0
    foreach ($m in $ms) {
      $v = ($m.Value -replace '\s+', ' ').Trim()
      if ($v.Length -gt 300) { $v = $v.Substring(0, 300) + " …" }
      if ($seen.ContainsKey($v)) { continue }
      $seen[$v] = 1
      $lines += $v
      $n++
      if ($n -ge 5) { break }
    }
    $lines += '```'
    $lines += ""
  }
  $lines += "---"
  $lines += ""
}

[System.IO.File]::WriteAllLines($OutFile, $lines)
Write-Output ("Wrote {0} ({1:N0} bytes) from {2} sites" -f $OutFile, (Get-Item $OutFile).Length, $sites.Count)
