param([string]$Dir = "pages", [string]$OutFile = "nav-a11y.md")

$probes = [ordered]@{
  "skip-link"          = '(?i)(skip[^<>]{0,20}(to )?(main|content))'
  "nav-landmark"       = '(?i)<nav[^>]{0,140}'
  "aria-expanded"      = 'aria-expanded'
  "aria-current"       = 'aria-current'
  "aria-controls"      = 'aria-controls'
  "aria-label"         = 'aria-label'
  "aria-live"          = 'aria-live'
  "role-dialog"        = 'role="dialog"|<dialog'
  "role-tab"           = 'role="tab"|role="tablist"'
  "prefers-reduced-motion" = 'prefers-reduced-motion'
  "pointer-fine"       = 'pointer:\s*fine'
  "pointer-coarse"     = 'pointer:\s*coarse'
  "hover-none"         = 'hover:\s*none'
  "focus-within"       = 'focus-within'
  "details-summary"    = '<details|<summary'
  "loader-class"       = '(?i)class="[^"]*(loader|preloader|splash|skeleton|progress)[^"]*"'
  "fixed-header"       = '(?i)position:\s*fixed'
}

$lines = @("# Navigation + accessibility semantics (raw HTML + downloaded CSS/JS)", "",
           "Generated: " + (Get-Date -Format "yyyy-MM-dd HH:mm"), "",
           "| site | " + (($probes.Keys) -join " | ") + " |",
           "| --- |" + (($probes.Keys | ForEach-Object { " ---" }) -join "") + " |")

foreach ($f in (Get-ChildItem -Path $Dir -Filter *.html | Sort-Object Name)) {
  $t = [System.IO.File]::ReadAllText($f.FullName)
  $assetDir = Join-Path (Join-Path $Dir "..") ("assets\" + $f.BaseName)
  if (Test-Path $assetDir) { foreach ($af in Get-ChildItem $assetDir -File) { $t += "`n" + [System.IO.File]::ReadAllText($af.FullName) } }
  $cells = @()
  foreach ($k in $probes.Keys) { $n = ([regex]::Matches($t, $probes[$k])).Count; $cells += $(if ($n -gt 0) { "$n" } else { "." }) }
  $lines += "| " + $f.BaseName + " | " + ($cells -join " | ") + " |"
}
[System.IO.File]::WriteAllLines($OutFile, $lines)
Write-Output "Wrote $OutFile"
