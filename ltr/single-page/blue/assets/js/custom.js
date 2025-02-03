// const d = new Date();
// let year = d.getFullYear();
// document.getElementById("demo").innerHTML = year;

$(document).ready(function () {
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 100) {
            $("body").addClass("fixed-header");
        } else {
            $("body").removeClass("fixed-header");
        }
    });

    new TypeIt("#type-it", {
        speed: 100,
        loop: true,
        strings: ["Designer", "Developer"],
        breakLines: false,
    }).go();

    $.scrollIt({
        upKey: 38,
        downKey: 40,
        easing: 'linear',
        scrollTime: 600,
        activeClass: 'active',
        onPageChange: null,
        topOffset: -40
    });

    $(".testimonial-carousel").owlCarousel({
        loop:true,
        margin:10,
        dots:true,
        nav:false,
        autoplay:true,
        responsiveClass:true,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    $(".client-carousel").owlCarousel({
        loop:true,
        margin:10,
        dots:false,
        nav:false,
        autoplay:true,
        responsiveClass:true,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:5
            },
            600:{
                items:5
            },
            1000:{
                items:5
            }
        }
    });

    var counters = $(".count");
    var countersQuantity = counters.length;
    var counter = [];

    for (i = 0; i < countersQuantity; i++) {
        counter[i] = parseInt(counters[i].innerHTML);
    }

    var count = function(start, value, id) {
        var localStart = start;
        setInterval(function() {
        if (localStart < value) {
            localStart++;
            counters[id].innerHTML = localStart;
        }
        }, 40);
    }

    for (j = 0; j < countersQuantity; j++) {
        count(0, counter[j], j);
    }
});


// var $grid = $('.grid').isotope({
//     itemSelector: '.column',
//     layoutMode: 'fitRows'
// });

$('.filters-button-group').on( 'click', 'button', function() {
    var filterValue = $( this ).attr('data-filter');
    $grid.isotope({ filter: filterValue });
});

$('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
        $buttonGroup.find('.is-checked').removeClass('is-checked');
        $( this ).addClass('is-checked');
    });
});

(function($) {
    "use strict";
    var WEA = {};
    var plugin_track = 'assets/vendors/';
    $.fn.exists = function() {
        return this.length > 0;
    };



    /*--------------------
    * OwlSlider
    ----------------------*/
    // WEA.Owl = function() {
    //     var owlslider = $("div.owl-carousel");
    //     if (owlslider.length > 0) {
    //         loadScript(plugin_track + 'owl-carousel/js/owl.carousel.min.js', function() {
    //             owlslider.each(function() {
    //                 var $this = $(this),
    //                     $items = ($this.data('items')) ? $this.data('items') : 1,
    //                     $loop = ($this.attr('data-loop')) ? $this.data('loop') : true,
    //                     $navdots = ($this.data('nav-dots')) ? $this.data('nav-dots') : false,
    //                     $navarrow = ($this.data('nav-arrow')) ? $this.data('nav-arrow') : false,
    //                     $autoplay = ($this.attr('data-autoplay')) ? $this.data('autoplay') : true,
    //                     $autospeed = ($this.attr('data-autospeed')) ? $this.data('autospeed') : 5000,
    //                     $smartspeed = ($this.attr('data-smartspeed')) ? $this.data('smartspeed') : 1000,
    //                     $autohgt = ($this.data('autoheight')) ? $this.data('autoheight') : false,
    //                     $CenterSlider = ($this.data('center')) ? $this.data('center') : false,
    //                     $space = ($this.attr('data-space')) ? $this.data('space') : 30;

    //                 $(this).owlCarousel({
    //                     loop: $loop,
    //                     items: $items,
    //                     responsive: {
    //                         0: { items: $this.data('xs-items') ? $this.data('xs-items') : 1 },
    //                         480: { items: $this.data('sm-items') ? $this.data('sm-items') : 1 },
    //                         768: { items: $this.data('md-items') ? $this.data('md-items') : 1 },
    //                         980: { items: $this.data('lg-items') ? $this.data('lg-items') : 1 },
    //                         1200: { items: $items }
    //                     },
    //                     dots: $navdots,
    //                     autoplayTimeout: $autospeed,
    //                     smartSpeed: $smartspeed,
    //                     autoHeight: $autohgt,
    //                     center: $CenterSlider,
    //                     margin: $space,
    //                     nav: $navarrow,
    //                     navText: ["<i class='bi-chevron-left'></i>", "<i class='bi-chevron-right'></i>"],
    //                     autoplay: $autoplay,
    //                     autoplayHoverPause: true
    //                 });
    //             });
    //         });
    //     }
    // }

    /* ---------------------------------------------- /*
     * All Functions
    /* ---------------------------------------------- */
    // loadScript
    var _arr = {};

    function loadScript(scriptName, callback) {
        if (!_arr[scriptName]) {
            _arr[scriptName] = true;
            var body = document.getElementsByTagName('body')[0];
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = scriptName;
            // WEAn bind WEA event to WEA callback function
            // WEAre are several events for cross browser compatibility
            // script.onreadystatechange = callback;
            script.onload = callback;
            // fire WEA loading
            body.appendChild(script);
        } else if (callback) {
            callback();
        }
    };

    // Document on Ready
    $(document).ready(function() {
            WEA.Counter();
            // WEA.Owl();
    });


    // Window on Resize
    $(window).on("resize", function() {});


})(jQuery);