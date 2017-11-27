//rating
!function(t){t.fn.rating=function(i){i=i||function(){},this.each(function(n,a){t(a).data("rating",{callback:i}).bind("init.rating",t.fn.rating.init).bind("set.rating",t.fn.rating.set).bind("hover.rating",t.fn.rating.hover).trigger("init.rating")})},t.extend(t.fn.rating,{init:function(i){for(var n=t(this),a="",e=null,r=n.children(),s=0,l=r.length;l>s;s++)a=a+'<a class="star" title="'+t(r[s]).val()+'" />',t(r[s]).is(":checked")&&(e=t(r[s]).val());r.hide(),n.append('<div class="stars">'+a+"</div>").trigger("set.rating",e),t("a",n).bind("click",t.fn.rating.click),n.trigger("hover.rating")},set:function(i,n){var a=t(this),e=t("a",a),r=void 0;n&&(e.removeClass("fullStar"),r=e.filter(function(i){return t(this).attr("title")==n?t(this):!1}),r.addClass("fullStar").prevAll().addClass("fullStar"))},hover:function(i){var n=t(this),a=t("a",n);a.bind("mouseenter",function(i){t(this).addClass("tmp_fs").prevAll().addClass("tmp_fs"),t(this).nextAll().addClass("tmp_es")}),a.bind("mouseleave",function(i){t(this).removeClass("tmp_fs").prevAll().removeClass("tmp_fs"),t(this).nextAll().removeClass("tmp_es")})},click:function(i){i.preventDefault();var n=t(i.target),a=n.parent().parent(),e=a.children("input"),r=n.attr("title");matchInput=e.filter(function(i){return t(this).val()==r?!0:!1}),matchInput.attr("checked",!0).siblings("input").attr("checked",!1),a.trigger("set.rating",matchInput.val()).data("rating").callback(r,i)}})}(jQuery);

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
	slideBlock('Не указывать контактное лицо', 'Указывать контактное лицо');
	showPassword();
	orderDateDetails();

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
	if($('input.mask').length) {
		$('input.mask').inputmask({
			mask: '+7 999 999-99-99'
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
		var el = $(this);
		if(el.parent().find(amountAdjuster).hasClass('opened-amountAdjuster')) {
			el.parent().find(amountAdjuster).removeClass('opened-amountAdjuster').hide();
			newAmount = el.parent().find(amountAdjuster).find('input[type=number]').val();
			el.parent().find(amountValue).text(newAmount);
		} else {
			el.parent().find(amountAdjuster).addClass('opened-amountAdjuster').show();
		}
	});
	// $(document).on('mouseup', function(e){
	// 	if ($(e.target) != amountOpener && !$('.amount-box').find(e.target).length) {
	// 		var openedItem = $('.opened-amountAdjuster').closest('.amount-box');
	// 		newAmount = $('.opened-amountAdjuster').find('input[type=number]').val();
	// 		openedItem.find(amountValue).text(newAmount);
	// 		amountAdjuster.removeClass('opened-amountAdjuster').hide();
	// 	}
	// })
}

function sidebarAccordion() {
	var opener = $('.js-block-opener'),
		openedBlock = $('.js-opened-block');

	opener.on('click', function(){
		var $this = $(this);
		$this.toggleClass('opened').next(openedBlock).stop().slideToggle();
	})
}

function slideBlock(openedText, closedText) {
	var opener = $('.js-more-info-opener'),
		slide = $('.js-more-info-block');

	opener.each(function(){
		var el = $(this);
		if(el.hasClass('opened')) {
			el.text(openedText);
			el.next(slide).show();
		} else {
			el.text(closedText);
		}
	});

	opener.on('click', function(){
		var el = $(this);
		if(el.hasClass('opened')) {
			el.text(closedText).removeClass('opened').next(slide).slideUp(300);
		} else {
			el.text(openedText).addClass('opened').next(slide).slideDown(300);
		}
	});
}

function showPassword() {
	var passwordBlock = $('.js-password'),
		showPasswordBtn = passwordBlock.find('.js-show-password'),
		passwordField = passwordBlock.find('.js-password-field');

	if(passwordBlock.length) {
		showPasswordBtn.on('click', function(){
			var el = $(this);
			if(el.hasClass('show')) {
				el.removeClass('show').find('svg use').attr('xlink:href', '#icons-29');
				passwordField.attr('type', 'password');
			} else {
				el.addClass('show').find('svg use').attr('xlink:href', '#icons-30');
				passwordField.attr('type', 'text');
			}
		})
	}
}

function orderDateDetails() {
	var opener = $('.js-order-date-opener'),
		slider = $('.js-order-date-details');
	if(opener.length) {
		opener.on('click', function(){
			$(this).toggleClass('opened');
			$(this).closest('tr').next(slider).toggle();
		})
	}
}