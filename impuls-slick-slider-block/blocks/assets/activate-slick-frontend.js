jQuery(document).ready(function($){
    $('.slick-slider-block-slider').each(function(){
        $(this).slick({
            nextArrow: '<a class="slick-slider-block-next-arrow" href="#"></a>',
            prevArrow: '<a class="slick-slider-block-prev-arrow" href="#"></a>',
            customPaging: function(slider, i) {
                return jQuery('<a class="slider-dot" />').text(i + 1);
            },
            rows:0,
            arrows: $(this).data('slick-arrows'),
			dots:$(this).data('slick-dots'),
			adaptiveHeight:$(this).data('slick-adaptiveheight'),
			autoplay:$(this).data('slick-autoplay'),
			autoplaySpeed:$(this).data('slick-autoplayspeed'),
			centerMode:$(this).data('slick-centermode'),
			centerPadding:$(this).data('slick-centerpadding'),
			cssEase:$(this).data('slick-cssease'),
			draggable:$(this).data('slick-draggable'),
			fade:$(this).data('slick-fade'),
			focusOnSelect:$(this).data('slick-focusonselect'),
			easing:$(this).data('slick-easing'),
			edgeFriction:$(this).data('slick-edgefriction'),
			infinite:$(this).data('slick-infinite'),
			initialSlide:$(this).data('slick-initialslide'),
			pauseOnFocus:$(this).data('slick-pauseonfocus'),
			pauseOnHover:$(this).data('slick-pauseonhover'),
			pauseOnDotsHover:$(this).data('slick-pauseondotshover'),
			slidesToShow:$(this).data('slick-slidestoshow'),
			slidesToScroll:$(this).data('slick-slidestoscroll'),
			speed:$(this).data('slick-speed'),
			swipe:$(this).data('slick-swipe'),
			swipeToSlide:$(this).data('slick-swipetoslide'),
			touchMove:$(this).data('slick-touchmove'),
			touchThreshold:$(this).data('slick-touchthreshold'),
			useCSS:$(this).data('slick-usecSS'),
			useTransform:$(this).data('slick-usetransform'),
			variableWidth:$(this).data('slick-variablewidth'),
			vertical:$(this).data('slick-vertical'),
            verticalSwiping:$(this).data('slick-verticalswiping'),
        }
        );
    });
});