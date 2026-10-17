## scroll-driven-animations.style_demos_carousel-with-markers_css

```css
@supports(animation-timeline: view()) {
			@keyframes colorize-dot {
				0%,
				100% {
					background: #ff00fa;
				}
			}

			[data-component="carousel"] {
				timeline-scope: --carousel;

				.entries {
					scroll-timeline: --carousel x;
				}

				.markers a {
					animation: colorize-dot linear;
					animation-timeline: --carousel;
					animation-range: calc((var(--i) - 1) * 20%) calc(var(--i) * 20% + 1px);
				}
			}
		}
```

prefers-reduced-motion mentions: 0

---

## scroll-driven-animations.style_demos_cover-to-fixed-header_css

```css
@supports(animation-range: 0vh 90vh) {
			@keyframes sticky-parallax-header-move-and-size {
				from {
					background-position: 50% 0;
				}
				to {
					background-position: 50% 100%;
					background-color: #0b1584;
					height: 10vh;
					font-size: 2em;
				}
			}

			#sticky-parallax-header {
				position: fixed;
				top: 0;

				animation: sticky-parallax-header-move-and-size linear forwards;
				animation-timeline: scroll();
				animation-range: 0vh 90vh;
			}

			body {
				padding-top: 100vh;
			}
		}
```

prefers-reduced-motion mentions: 0

---

## scroll-driven-animations.style_demos_horizontal-section_css

```css
@supports(animation-timeline: view()) {
			@keyframes move {
				to {
					/* Move horizontally so that right edge is aligned against the viewport */
					transform: translateX(calc(-100% + 100vw));
				}
			}

			#sectionPin {
				/* Stretch it out, so that we create room for the horizontal scroll animation */
				height: 500vh;
				overflow: visible; /* To make position sticky work … */

				view-timeline-name: --section-pin-tl;
				view-timeline-axis: block;
			}

			.pin-wrap-sticky {
				/* Stick to Top */
				height: 100vh;
				width: 100vw;
				position: sticky;
				top: 0;

				width: 100vw;
				overflow-x: hidden;
			}

			.pin-wrap {
				height: 100vh;
				width: 250vmax;

				/* Hook animation */
				will-change: transform;
				animation: linear move forwards;

				/* Link animation to view-timeline */
				animation-timeline: --section-pin-tl;
				animation-range: contain 0% contain 100%;
			}
		}
```

prefers-reduced-motion mentions: 0

---

## scroll-driven-animations.style_demos_image-reveal_css

```css
@keyframes reveal {
			from {
				opacity: 0;
				clip-path: inset(45% 20% 45% 20%);
			}
			to {
				opacity: 1;
				clip-path: inset(0% 0% 0% 0%);
			}
		}

		.revealing-image {
			view-timeline-name: --revealing-image;
			view-timeline-axis: block;

			animation: linear reveal both;
			animation-timeline: --revealing-image;
			animation-range: entry 25% cover 50%;
		}
```

prefers-reduced-motion mentions: 0

---

## scroll-driven-animations.style_demos_progress-bar_css

```css
/* The keyframes */
		@keyframes grow-progress {
			from {
				transform: scaleX(0);
			}

			to {
				transform: scaleX(1);
			}
		}

		/* Style and position the progress bar */
		#progress {
			position: fixed;
			z-index: 10;
			left: 0;
			top: 0;
			width: 100%;
			height: 1em;
			transform-origin: 0 50%;
			background: red;
		}

		/* Create scroll-timeline on the root */
		html {
			scroll-timeline: --page-scroll block;
		}

		/* Attach the animation using an anonymous Scroll Progress Timeline */
		#progress {
			animation: grow-progress auto linear;
			animation-timeline: --page-scroll;
		}
```

prefers-reduced-motion mentions: 0

---

## scroll-driven-animations.style_demos_reverse-scroll_css

```css
@supports (animation-timeline: scroll()) {
			/* As we're about to shift content out of .columns, we need it to hide its overflow */
			.columns {
				overflow-y: hidden;
			}

			.column-reverse {
				/* Flip item order in reverse columns */
				flex-direction: column-reverse;
			}

			/* Set up Animation */
			@keyframes adjust-position {
				/* Start position: shift entire column up, but not so that it goes out of view */
				from {
					transform: translateY(calc(-100% + 100vh));
				}

				/* End position: shift entire column down, but not so that it goes out of view */
				to {
					transform: translateY(calc(100% - 100vh));
				}
			}

			/* Hook our animation with the timeline to our columns */
			.column-reverse {
				animation: adjust-position linear forwards;
				animation-timeline: scroll(root block);
			}
		}
```

prefers-reduced-motion mentions: 0

---

## scroll-driven-animations.style_demos_scroll-shadows_css

```css
@supports (animation-timeline: scroll()) {

			/* Scroll Indicators */
			@keyframes reveal {
				0% {
					opacity: 0;
				}

				100% {
					opacity: 1;
				}
			}

			.container {
				overflow-y: auto;
				scroll-timeline: --scroll-timeline y;
			}

			.container::before,
			.container::after {
				animation-name: reveal;
				animation-timeline: --scroll-timeline;
				animation-fill-mode: both;
			}

			.container::before {
				animation-range: 1em 2em;
			}

			.container::after {
				animation-direction: reverse;
				animation-range: calc(100% - 2em) calc(100% - 1em);
			}

			/* Only show Scroll Indicators when the scroller can actually scroll */
			@keyframes detect-scroll {
				from,
				to {
					--can-scroll: ;
				}
			}

			.container {
				animation: detect-scroll;
				animation-timeline: --scroll-timeline;
				animation-fill-mode: none;
			}

			.container::before,
			.container::after {
				--visibility-if-can-scroll: var(--can-scroll) visible;
				--visibility-if-cant-scroll: hidden;
				visibility: var(--visibility-if-can-scroll, var(--visibility-if-cant-scroll));
			}
		}
```

prefers-reduced-motion mentions: 0

---

## scroll-driven-animations.style_demos_shrinking-header-shadow_css

```css
@keyframes adjust-info {
			to {
				grid-template-columns: 4em 1fr;
				gap: 1rem;
				height: 4.75rem;
			}
		}
		@keyframes shrink-name {
			to { font-size: 1.5rem; }
		}
		@keyframes add-shadow {
			to { box-shadow: 0 5px 5px -3px rgba(0,0,0,.26); }
		}
		@keyframes move-button {
			to { translate: 0% 40%; }
		}
		@keyframes move-and-fade-background {
			to {
				translate: 0% -5%;
				scale: 0.96;
				opacity: 0.3;
			}
		}

		@supports (animation-timeline: scroll()) {
			.info {
				animation: adjust-info linear both;
			}
			.info h2 {
				animation: shrink-name linear both;
			}
			header {
				animation: add-shadow linear both;
			}
			#button-edit  {
				animation: move-button linear both;
			}
			.bg  {
				animation: move-and-fade-background linear both;
			}
			.info, .info h2, header, #button-edit, .bg {
				animation-timeline: scroll();
				animation-range: 0 150px;
			}

			header {
				position: fixed;
				left: 0;
				right: 0;
			}
			header + * {
				margin-top: 190px;
			}
		}

		@supports not (animation-timeline: scroll()) {
			header {
				box-shadow: 0 5px 5px -3px rgba(0,0,0,.26);
			}
		}
```

prefers-reduced-motion mentions: 0

---

## scroll-driven-animations.style_demos_stacking-cards_css

```css
@supports (animation-timeline: view()) {
			.card {
				--index0: calc(var(--index) - 1); /* 0-based index */
				--reverse-index: calc(var(--numcards) - var(--index0)); /* reverse index */
				--reverse-index0: calc(var(--reverse-index) - 1); /* 0-based reverse index */
			}

			@keyframes scale {
				to {
					transform:
						scale(calc(1.1 - calc(0.1 * var(--reverse-index))));
				}
			}

			#cards {
				--numcards: 4;
				view-timeline-name: --cards-element-scrolls-in-body;
			}

			.card__content {
				--start-range: calc(var(--index0) / var(--numcards) * 100%);
				--end-range: calc((var(--index)) / var(--numcards) * 100%);

				animation: linear scale forwards;
				animation-timeline: --cards-element-scrolls-in-body;
				animation-range: exit-crossing var(--start-range) exit-crossing var(--end-range);
			}
		}
```

prefers-reduced-motion mentions: 0

---

