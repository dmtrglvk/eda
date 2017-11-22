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

	mobileMenu();
	amountDrop();
	sidebarAccordion();

	$('.js-show-more').on('click', function(e){
		e.preventDefault();
		$(this).parent().addClass('alltext');
		$(this).remove();
	});

	if($( ".slider-range-bar").length){
		$('.slider-range-bar').each(function(){
			var $this = $(this);
			var min = $this.data('min');
			var max = $this.data('max');
			$this.slider({
				range: true,
				min: min,
				max: max,
				values: [ min, max ],
				create: function( event, ui ) {
					$this.parent().find('input.min').val(min);
					$this.parent().find('input.max').val(max);
				},
				slide: function( event, ui ) {
					$this.parent().find('input.min').val(ui.values[0]);
					$this.parent().find('input.max').val(ui.values[1]);
				},
				stop: function( event, ui ) {
					$this.parent().find('input.min').trigger('change');
				}
			});
		});
	}

});

function mobileMenu() {
	$('.js-menu-opener').on('click', function(e){
		e.preventDefault();
		$('body').toggleClass('menu-opened');
	})
}

function amountDrop() {
	var amountOpener = $('.js-amount-opener'),
		amountAdjuster = $('.js-amount-adjuster'),
		amountValue = $('.js-amount-value'),
		newAmount;

	amountOpener.on('click', function(){
		$(this).parent().find(amountAdjuster).addClass('opened-amountAdjuster').show();
	});
	$(document).on('mouseup', function(e){
		if ($(e.target) != amountOpener && !$('.amount-box').find(e.target).length) {
			var openedItem = $('.opened-amountAdjuster').closest('.amount-box');
			newAmount = $('.opened-amountAdjuster').find('input[type=number]').val();
			openedItem.find(amountValue).text(newAmount);
			amountAdjuster.removeClass('opened-amountAdjuster').hide();
		}
	})
}

function sidebarAccordion() {
	var opener = $('.js-block-opener'),
		openedBlock = $('.js-opened-block');

	opener.on('click', function(){
		var $this = $(this);
		$this.toggleClass('opened').next(openedBlock).stop().slideToggle();
	})
}

