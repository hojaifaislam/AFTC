(function ($) {
    "use strict";

    $(window).on('load', function(){
        //===== Prealoder
        $("#preloader").delay(400).fadeOut();

        if (window.matchMedia('(max-width: 991.98px)').matches) {
            $('.drop_toggle').click(function(e) {
                e.preventDefault();
                var $this = $(this);
                $('.drop_toggle').removeClass('active');
                $this.toggleClass('active');
                
                
                if ($this.next().hasClass('show')) {
                    $this.next().removeClass('show');
                    $this.next().slideUp(350);
                    $('.drop_toggle').removeClass('active');
                    
                } else {
                    $this.parent().parent().find('ul').removeClass('show');
                    $this.parent().parent().find('ul').slideUp(350);
                    $this.next().toggleClass('show');
                    $this.next().slideToggle(350);
                }
            }); 
        }
        if (window.matchMedia('(max-width: 575.98px)').matches) {
            $('.mobile_slider').addClass('owl-carousel');
            $('.owl-carousel.mobile_slider').owlCarousel({
                items: 1,
                loop: true,
                margin: 30,
                nav: false,
                dots: true,
                nav: true,
                navText:['<i class="fal fa-angle-left"></i>','<i class="fal fa-angle-right"></i>'],
            }); 
        } 
    });

    $(document).ready(function () {
        //05. sticky header
        function sticky_header(){
            var wind = $(window);
            var sticky = $('header');
            wind.on('scroll', function () {
                var scroll = wind.scrollTop();
                if (scroll < 10) {
                    sticky.removeClass('sticky');
                } else {
                    sticky.addClass('sticky');
                }
            });
        }
        sticky_header();
        //===== Back to top

        //03. Smoot Scroll Effect
        $('.scroll_box').bind('click', function(event) {
            var $anchor = $(this);
            var headerH = '90';
            $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"
            }, 600, 'easeInSine');
            event.preventDefault();
        });

        // Show or hide the sticky footer button
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 600) {
                $('.back-to-top').fadeIn(200)
            } else {
                $('.back-to-top').fadeOut(200)
            }
        });

        //Animate the scroll to yop
        $('.back-to-top').on('click', function (event) {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: 0,
            }, 900);
        });

        // Hamburger-menu
        $('.toggle_wrap').on('click', function () {
            $('.hamburger-menu .line-top, .menu_area').toggleClass('current');
            $('.hamburger-menu .line-center').toggleClass('current');
            $('.hamburger-menu .line-bottom').toggleClass('current');
        });

        // step form
        var form = $("#contact");
        form.children('div').steps({
            headerTag: "h4",
            bodyTag: ".step_item",
            transitionEffect: "fade",
        });

        // nice selec
        $('select').niceSelect();


        //Slider Initialize
        $('.owl-carousel.home_slider').owlCarousel({
            loop: true,
            margin: 1,
            items: 1,
            // autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: false,
            nav: false,
            dots: false,
        });        

        //Slider Initialize
        $('.owl-carousel.application_slider').owlCarousel({
            loop: true,
            margin: 30,
            nav: false,
            dots: false,
            nav: true,
            stagePadding: 2,
            navText:['<i class="fal fa-angle-left"></i>','<i class="fal fa-angle-right"></i>'],
            responsive:{
                0:{
                    items: 1,
                },
                576:{
                    items: 3,
                    margin: 20,
                },
                768:{
                    items: 3,
                },
                992:{
                    items: 5,
                }
            }
        }); 
        $('.owl-carousel.check_slider').owlCarousel({
            loop: true,
            margin: 0,
            nav: false,
            dots: false,
            responsive: {
                0: {
                    items: 1,
                    dots: true,
                },
                992:{
                    items: 3,
                }
            }
        });        
        $('.owl-carousel.check_slider2').owlCarousel({
            loop: true,
            margin: 0,
            nav: false,
            dots: false,
            responsive: {
                0: {
                    items: 1,
                    dots: true,
                },
                992:{
                    items: 2,
                }
            }
        });
    });

})(jQuery);