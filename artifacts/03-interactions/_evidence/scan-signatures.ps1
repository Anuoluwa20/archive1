param(
  [string]$Dir = "pages",
  [string]$Out  = "signatures.md"
)

$sig = [ordered]@{
  "prefers-reduced-motion" = "prefers-reduced-motion"
  "prefers-contrast"       = "prefers-contrast"
  "forced-colors"          = "forced-colors"
  "scroll-timeline-css"    = "scroll-timeline|animation-timeline|view-timeline|animation-range"
  "view-transitions"       = "view-transition|startViewTransition"
  "IntersectionObserver"   = "IntersectionObserver"
  "focus-visible"          = ":focus-visible|focus-visible"
  "smooth-scroll-css"      = "scroll-behavior:\s*smooth"
  "position-sticky"        = "position:\s*sticky|position:sticky"
  "cursor-custom"          = "cursor:\s*(none|url\()"
  "clip-path"              = "clip-path"
  "mask-image"             = "mask-image|webkit-mask"
  "blend-mode"             = "mix-blend-mode"
  "starting-style"         = "@starting-style"
  "aspect-ratio"           = "aspect-ratio"
  "lazy-loading"           = "loading=`"?lazy"
  "srcset"                 = "srcset"
  "video-hover-play"       = "mouseenter|mouseover|onMouseEnter"
  "autoplay-video"         = "autoplay"
  "aria-live"              = "aria-live"
  "role-tablist"           = "tablist|tabpanel"
  "dialog-element"         = "<dialog|popover"
  "gsap"                   = "gsap|ScrollTrigger"
  "locomotive-scroll"      = "locomotive|LocomotiveScroll"
  "lenis"                  = "lenis"
  "framer-motion"          = "framer|motion/react"
  "three-js"               = "three\.js|three\.min|THREE\."
  "barba-swup"             = "barba|swup"
  "aos"                    = "data-aos|AOS\.init|aos\.js"
  "scrollreveal"           = "ScrollReveal|scrollreveal"
  "split-text"             = "SplitText|splitting|SplitType"
  "marquee"                = "marquee"
  "canvas"                 = "<canvas"
  "requestAnimationFrame"  = "requestAnimationFrame"
  "transition-duration"    = "transition:\s*[^;]*[0-9]+m?s"
  "will-change"            = "will-change"
  "data-scroll"            = "data-scroll|data-reveal|data-animate"
  "reduced-motion-js"      = "reduceD|matchMedia\(.\(prefers-reduced-motion"
}

$files = Get-ChildItem -Path $Dir -Filter *.html | Sort-Object Name
$lines = @()
$lines += "# Signature scan (raw HTML)"
$lines += ""
$lines += "Generated: " + (Get-Date -Format "yyyy-MM-dd HH:mm")
$lines += ""
$lines += "| site | " + (($sig.Keys) -join " | ") + " |"
$lines += "| --- |" + (($sig.Keys | ForEach-Object { " ---" }) -join "") + " |"

foreach ($f in $files) {
  $txt = [System.IO.File]::ReadAllText($f.FullName)
  $cells = @()
  foreach ($k in $sig.Keys) {
    $n = ([regex]::Matches($txt, $sig[$k], "IgnoreCase")).Count
    $cells += $(if ($n -gt 0) { "$n" } else { "." })
  }
  $lines += "| " + $f.BaseName + " | " + ($cells -join " | ") + " |"
}

[System.IO.File]::WriteAllLines($Out, $lines)
Write-Output ("Wrote $Out with {0} sites x {1} signatures" -f $files.Count, $sig.Count)
