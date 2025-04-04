/**
 * source: hint-core.scss
 *
 * Defines the basic styling for the tooltip.
 * Each tooltip is made of 2 parts:
 * 	1) body (:after)
 * 	2) arrow (:before)
 *
 * Classes added:
 * 	1) hint
 */

[class*="#{$hintPrefix}"] {
	position: relative;
	display: inline-block;

	&:before, &:after {
		position: absolute;

		// HACK: Trigger hardware accelerated rendering, otherwise transform was not
		// working on a hidden element
		@include vendor('transform', translate3d(0, 0, 0));

		// HACK: visibility is set to hidden because IE & Opera don't support
		// pointer-events on HTML content yet because of which hovering a hidden tooltip
		// shows the tooltip.
		visibility: hidden;
		opacity: 0;
		z-index: $hintZIndex;
		// shouldn't receive pointer events, otherwise even hovering tooltip will make it appear
		pointer-events: none;

		@include vendor('transition', $hintTransitionDuration ease);
		@include vendor('transition-delay', $hintHideDelay);
	}

	&:hover:before, &:hover:after {
		visibility: visible;
		opacity: 1;
	}

	&:hover:before, &:hover:after {
		// $hintShowDelay will apply as soon as element is hovered.
		@include vendor('transition-delay', $hintShowDelay);
	}

	/**
	 * tooltip arrow
	 */
	&:before {
		content: '';
		position: absolute;
		background: transparent;
		border: $hintArrowBorderWidth solid transparent;
		// move z-index 1 up than :after so that it shows over box-shadow
		z-index: $hintZIndex + 1;
	}

	/**
	 * tooltip body
	 */
	&:after {
		background: $hintDefaultColor;
		color: white;
		padding: $hintVerticalPadding $hintHorizontalPadding;
		font-size: $hintFontSize;
		font-family: $hintFontFamily;
		line-height: $hintFontSize; // Vertical centering.
		white-space: nowrap; // Prevent breaking to new line.
	}
	// Always get content from aria-label attribute.
	&[aria-label]:after {
		content: attr(aria-label); // The magic!
	}
	// If the `data-hint` attribute is present, use it.
	// This might be deprecated in future in support of a11y.
	&[data-hint]:after {
		content: attr(data-hint); // The magic!
	}
}

// Hide tooltips if any of the supported attributes is empty.
[aria-label=''],
[data-hint=''] {
	&:before, &:after {
		display