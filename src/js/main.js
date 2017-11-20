$(document).ready(function () {

	$('.js-slider').owlCarousel({
		items: 1,
		loop: true,
		nav: true,
		animateOut: 'fadeOut',
		mouseDrag: false
	});

	$('.js-select-style').styler();
	$('.number-plus-minus input[type=number]').styler();



})