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
	$('.js-show-more').on('click', function(e){
		e.preventDefault();
		$(this).parent().addClass('alltext');
		$(this).remove();
	})

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

