"use strict";

var main_header = $('.header-fix-wrap');
var $window = $(window);
var responsive_toggle = $('.responsive-toggle');
var feature_slider = $(".feature-slider .owl-carousel");



$(window).on('load', function () {
    /*--------- Page Loader ---------*/
    setTimeout(function () {
        $("#loading").fadeOut(300);
    }, 3100);
});


$(function ($) {

    // Smooth Page Scroll
    // ---------------------------------------------------------------------------------------   
    $('.scrollto a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        var header_height = $('.header-fix-wrap').outerHeight(true);
        $('html,body').animate({scrollTop: $(this.hash).offset().top - header_height}, 1000);

    });


    // Comingsoon
    // --------------------------------------------------------------------------------------- 
    if ($('.countdown-wrapper').length > 0) {
        if ($().countdown) {
            var newYear = new Date();
            newYear = new Date(newYear.getFullYear() + 1, 1 - 1, 1);
            $('#defaultCountdown').countdown({until: newYear});
        }
    }

    // Close search hotel from in featured section
    $('.open-close-btn').click(function () {
        if ($('.search-overlay').hasClass('closed')) {//open it
            $('.opener-area').css('left', '-100px');
            setTimeout(function () {
                $('.search-overlay').css('left', '0').removeClass('closed');
            }, 300);
        } else {//close it
            $('.search-overlay').css('left', '-100%').addClass('closed');
            setTimeout(function () {
                $('.opener-area').css('left', '0px');

            }, 300);

        }

    });


    /*------ Main Menu Toggle at responsive --------*/
    responsive_toggle.on('click', function (e) {
        $("body").toggleClass('off-canvas-body');
        responsive_toggle.toggleClass("fa-bars fa-close");
        e.preventDefault();
    });


    /*--------- owlCarousel Slider ---------*/
    $('.patners-slider').owlCarousel({
        rtl: false,
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        responsive: {
            0: {items: 1},
            380: {items: 2},
            668: {items: 3},
            768: {items: 2},
            1200: {items: 3}
        },
        navText: [
            "<i class='fa fa-arrow-circle-left'></i>",
            "<i class='fa fa-arrow-circle-right'></i>"
        ]
    });

    $('.spotlight-slider').owlCarousel({
        center: true,
        items: 2,
        loop: true,
        nav: false,
        responsive: {
            768: {items: 2, center: true},
            0: {items: 1, center: false}
        }
    });
    $('.customNextBtn').click(function () {
        $('.spotlight-slider').trigger('next.owl.carousel');
    });

    $('.customPrevBtn').click(function () {
        $('.spotlight-slider').trigger('prev.owl.carousel', [300]);
    });


    $('.news-slider').owlCarousel({
        rtl: false,
        loop: true,
        nav: true,
        autoplay: false,
        responsive: {
            0: {items: 1}
        },
        navText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ]
    });

    $('.review-slider').owlCarousel({
        rtl: false,
        loop: true,
        nav: true,
        autoplay: false,
        margin: 30,
        responsive: {
            992: {items: 2},
            0: {items: 1}
        },
        navText: [
            "PREV",
            "NEXT"
        ]
    });

    $(".testimonials-slider-2").owlCarousel({
        dots: true,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        smartSpeed: 100,
        margin: 30,
        responsive: {
            0: {items: 1},
            1200: {items: 3},
            992: {items: 2},
            768: {items: 1},
            568: {items: 2}
        },
        nav: false,
        navText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ]
    });

    $('.main-slider').owlCarousel({
        rtl: false,
        loop: false,
        margin: 0,
        animateIn: 'fadeInDown',
        animateOut: 'slideOutDown',
        autoplay: true,
        dots: true,
        nav: false,
        navText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ],
        responsive: {
            0: {items: 1}
        }
    });
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    });

    $('.main-slider-one').owlCarousel({
        rtl: false,
        loop: true,
        margin: 0,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        autoplay: true,
        dots: false,
        nav: true,
        navText: [
            "<i class='fa fa-angle-double-left'></i>",
            "<i class='fa fa-angle-double-right'></i>"
        ],
        responsive: {
            0: {items: 1}
        }
    });

    $('.main-slider-two').owlCarousel({
        rtl: false,
        loop: true,
        margin: 0,
        autoplay: true,
        dots: false,
        nav: true,
        navText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ],
        responsive: {
            0: {items: 1}
        }
    });

    $('.best-place-slider').owlCarousel({
        rtl: false,
        loop: true,
        margin: 0,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        autoplay: false,
        dots: true,
        nav: false,
        navText: [
            "<i class='fa fa-angle-double-left'></i>",
            "<i class='fa fa-angle-double-right'></i>"
        ],
        responsive: {
            0: {items: 1}
        }
    });


    $('.img-slider').owlCarousel({
        rtl: false,
        loop: true,
        margin: 0,
        items: 1,
        autoplay: true,
        dots: true,
        nav: false,
        responsive: {
            0: {items: 1}
        }
    });

    //Resize carousels in modal
    if ($('.sync2').length > 0) {
        $(document).on('shown.bs.modal', function () {
            $(this).find('.sync1, .sync2').each(function () {
                $(this).data('owlCarousel') ? $(this).data('owlCarousel').onResize() : null;
            });
        });

        var sync1 = $(".sync1");
        var sync2 = $(".sync2");
        var sliderthumb = $(".testimonials-thumb");
        var homethumb = $(".home-slide-thumb");
        var navSpeedThumbs = 500;

        sliderthumb.owlCarousel({
            rtl: false,
            items: 3,
            loop: false,
            nav: false,
            dots: false,
            autoplay: true,
            margin: 20,
            navSpeed: navSpeedThumbs,
            responsive: {
                992: {items: 3},
                767: {items: 2},
                480: {items: 1},
                320: {items: 1}
            },
            responsiveRefreshRate: 200,
            navText: [
                "<i class='fa fa-angle-left'></i>",
                "<i class='fa fa-angle-right'></i>"
            ]
        });

        sync1.owlCarousel({
            rtl: false,
            items: 1,
            navSpeed: 1000,
            nav: false,
            dots: true,
            autoplay: true,
            onChanged: syncPosition,
            responsiveRefreshRate: 200

        });

        homethumb.owlCarousel({
            rtl: false,
            items: 5,
            autoplay: true,
            nav: false,
            loop: false,
            navSpeed: navSpeedThumbs,
            responsive: {
                1024: {items: 5},
                768: {items: 3},
                600: {items: 2},
                320: {items: 2}

            },
            responsiveRefreshRate: 200
        });
    }
    function syncPosition(el) {
        var current = this._current;
        $(".sync2")
                .find(".owl-item")
                .removeClass("synced")
                .eq(current)
                .addClass("synced");
        center(current);
    }

    $(".sync2").on("click", ".owl-item", function (e) {
        e.preventDefault();
        var number = $(this).index();
        sync1.trigger("to.owl.carousel", [number, 1000]);
        return false;
    });

    function center(num) {

        var sync2visible = sync2.find('.owl-item.active').map(function () {
            return $(this).index();
        });

        if ($.inArray(num, sync2visible) === -1) {
            if (num > sync2visible[sync2visible.length - 1]) {
                sync2.trigger("to.owl.carousel", [num - sync2visible.length + 2, navSpeedThumbs, true]);
            } else {
                sync2.trigger("to.owl.carousel", Math.max(0, num - 1));
            }
        } else if (num === sync2visible[sync2visible.length - 1]) {
            sync2.trigger("to.owl.carousel", [sync2visible[1], navSpeedThumbs, true]);
        } else if (num === sync2visible[0]) {
            sync2.trigger("to.owl.carousel", [Math.max(0, num - 1), navSpeedThumbs, true]);
        }
    }

// owlCarousel Slider End //



    $('.dpd1, .dpd2').datepicker({
        format: 'mm/dd/yyyy',
        startDate: '-3d'
    });


    // Comingsoon
    // --------------------------------------------------------------------------------------- 
    if ($('.countdown-wrapper').length > 0) {
        if ($().countdown) {
            var newYear = new Date();
            newYear = new Date(newYear.getFullYear() + 1, 1 - 1, 1);
            $('#defaultCountdown').countdown({until: newYear});
        }
    }

    if ($('.meso-section').length) {
        $('.meso-section').isotope({
            itemSelector: '.meso-section .meso-wrap',
            percentPosition: true,
            masonry: {
                columnWidth: '.grid-sizer'
            }
        });
    }

    if ($().isotope) {
        var $container = $('.isotope'); // cache container
        $container.isotope({
            itemSelector: '.isotope-item'
        });
        $('.filtrable a').click(function () {
            var selector = $(this).attr('data-filter');
            $('.filtrable li').removeClass('current');
            $(this).parent().addClass('current');
            $container.isotope({filter: selector});
            return false;
        });
        $container.isotope('layout');  // layout/layout
    }

    $(document).on('shown.bs.tab', function (e) {
        try {
            var $grid = $($(e.target).attr("href")).find('#gallery-filter');

            if ($grid.length) {
                $grid.isotope();
            }
        } catch (e) {
        }
    });


    $(window).resize(function () {
        if ($().isotope) {
            $('.row.isotope').isotope('layout'); // layout/relayout on window resize
        }
        return false;
    });

});

$(document).ready(function () {

    /*------------------- Image Popup  -------------------*/
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function (item) {
                return item.el.attr('title') + '<small>by jTheme Studio</small>';
            }
        }
    });
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });


    /*------------------- Scroll To Top Animate -------------------*/
    $('#to-top').on('click', function () {
        $('html, body').animate({scrollTop: 0}, 800);
        return false;
    });



});

$window.scroll(function () {

    /*--------- Sticky Header ---------*/
    if ($(window).width() > 1200) {
        if ($(this).scrollTop() > 5) {
            main_header.addClass('is-sticky');
        }
        else {
            main_header.removeClass('is-sticky');
        }
    }

    /*------------------- Scroll To Top Animate -------------------*/
    if ($(this).scrollTop() > 100) {
        $('#to-top').css({bottom: '55px'});
    }
    else {
        $('#to-top').css({bottom: '-150px'});
    }

});

/*------------------- Map  -------------------*/

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: {lat: 38.897957, lng: -77.036560}
    });

    var image = 'assets/images/icons/map-marker.png';

    var beachMarker = new google.maps.Marker({
        position: {lat: 38.897957, lng: -77.036560},
        map: map,
        icon: image
    });
}