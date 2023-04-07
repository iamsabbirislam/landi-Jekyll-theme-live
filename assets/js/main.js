(function($) {
    ("use strict");

    // Preloader
    $(window).on('load', function(event) {
        $('.preloader').delay(500).fadeOut(500);
    });

    // Sticky
    var wind = $(window);
    var sticky = $('#sticky-header');
    wind.on('scroll', function() {
        var scroll = wind.scrollTop();
        if (scroll < 100) {
            sticky.removeClass('sticky');
        } else {
            sticky.addClass('sticky');
        }
    });

    // Mobile Menu
    $('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "991",
        meanMenuOpen: '<span></span><span></span><span></span>',
    });

    // Background Image
    $("[data-background").each(function() {
        $(this).css(
            "background-image",
            "url( " + $(this).attr("data-background") + "  )"
        );
    });

    // Slider 1
    function heroSliderOne() {
        var BasicSlider = $('.hero-slider-1');
        BasicSlider.on('init', function(e, slick) {
            var $firstAnimatingElements = $('.single-slider-style-1:first-child').find('[data-animation]');
            doAnimations($firstAnimatingElements);
        });
        BasicSlider.on('beforeChange', function(e, slick, currentSlide, nextSlide) {
            var $animatingElements = $('.single-slider-style-1[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
            doAnimations($animatingElements);
        });
        BasicSlider.slick({
            autoplay: false,
            autoplaySpeed: 10000,
            dots: true,
            fade: true,
            arrows: true,
            prevArrow: '<button type="button" class="slick-prev"><img src="assets/images/hero/left-arrow.png" alt=""></button>',
            nextArrow: '<button type="button" class="slick-next"><img src="assets/images/hero/right-arrow.png" alt=""></button>',
            responsive: [
                { breakpoint: 767, settings: { dots: false, arrows: false } }
            ]
        });

        function doAnimations(elements) {
            var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            elements.each(function() {
                var $this = $(this);
                var $animationDelay = $this.data('delay');
                var $animationType = 'animated ' + $this.data('animation');
                $this.css({
                    'animation-delay': $animationDelay,
                    '-webkit-animation-delay': $animationDelay
                });
                $this.addClass($animationType).one(animationEndEvents, function() {
                    $this.removeClass($animationType);
                });
            });
        }
    }
    heroSliderOne();

    // Slider 2
    $('.hero-slider-2').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-box'
    });

    $('.slider-box').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.hero-slider-2',
        dots: false,
        arrows: true,
        centerMode: false,
        infinite: false,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // Counter
    $('.counter').rCounter({
        delay: 10,
        time: 1000
    });

    // Testimonial 1
    $('.testimonial-style-1').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // Testimonial 2
    $('.testimonial-style-2').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        cssEase: 'linear',
    });

    // Contact Page Testimonial
    $('.testimonial-style-3').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.testimonial-style-3-navigator'
    });

    $('.testimonial-style-3-navigator').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        asNavFor: '.testimonial-style-3',
        dots: false,
        arrows: true,
        centerMode: false,
        infinite: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
    });

    // Isotope Activation
    var $grid = $('.portfolio-active').isotope();
    // filter items on button click
    $('.portfolio-menu').on('click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });

    // Isotop Filter Activation
    $('.portfolio-menu button').on('click', function(event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });

    // Magnific Popup Activation
    $('.popup-image').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true,
        }
    });

    // Magnific Popup Activation
    $('.popup-video').magnificPopup({
        type: 'iframe',
        gallery: {
            enabled: true,
        }
    });

    // WOW active
    new WOW().init();

    // ScrollUp
    $(function() {
        $.scrollUp({
            scrollName: 'scrollUp', // Element ID
            scrollDistance: 300, // Distance from top/bottom before showing element (px)
            scrollFrom: 'top', // 'top' or 'bottom'
            scrollSpeed: 300, // Speed back to top (ms)
            easingType: 'linear', // Scroll to top easing (see http://easings.net/)
            animation: 'fade', // Fade, slide, none
            animationSpeed: 200, // Animation speed (ms)
            scrollTrigger: false, // Set a custom triggering element. Can be an HTML string or jQuery object
            scrollTarget: false, // Set a custom target element for scrolling to. Can be element or number
            scrollText: '<i class="fas fa-level-up-alt"></i>', // Text for element, can contain HTML
            scrollTitle: false, // Set a custom <a> title if required.
            scrollImg: false, // Set true to use image
            activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
            zIndex: 2147483647 // Z-Index for the overlay
        });
    });

})(jQuery);