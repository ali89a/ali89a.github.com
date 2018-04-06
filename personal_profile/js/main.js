(function($) {

	"use strict";

    // Preloader
    $(window).on('load', function() { 
      $('#preloader').delay(350).fadeOut('slow'); 
    })

    // slick-carousel for testimonial two
    $(".testimonial-carousel").slick({
            dots: true,
            arrows: false,
            margin: 30,
            infinite: true,
            autoplay: true,
            pauseOnHover: false,
            speed: 800,
            autoplaySpeed: 2500,
            responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            
          ]

      });


    // slick-carousel for blog
    $(".blog-carousel").slick({
            dots: false,
            arrows: false,
            margin: 30,
            infinite: true,
            autoplay: true,
            pauseOnHover: false,
            speed: 800,
            autoplaySpeed: 2500,
            responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
              }
            }
            
          ]

      });



    // Light box - Portfolio Gallery
    lightbox.option({
      'imageFadeDuration': 800,
      'resizeDuration': 500,
      'wrapAround': true
    })


    
    // CounterUp
    $('.counter').counterUp({
          delay: 10,
          time: 1000
      }); 

    // Filtering
    if($('.filtr-container').length){
        $('.filtr-container').imagesLoaded(function() {
            var filterizr = $('.filtr-container').filterizr();
        });
    }

    // Parallax background
    $('.jarallax').jarallax({
            speed: 0.5,
    })

    // Water ripples animation
    $('#water-ripples').ripples({
        resolution: 512,
        dropRadius: 20,
        perturbance: 0.04
    });

    // ======= Scroll-Up
     dyscrollup.init({
        showafter : 500,
        scrolldelay : 1000,
        position : 'right',
        shape : 'squre',
        width : "20",
        height : "20"
    });




})(window.jQuery);