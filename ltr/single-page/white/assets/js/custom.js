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


var $grid = $('.grid').isotope({
    itemSelector: '.column',
    layoutMode: 'fitRows'
});

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

const d = new Date();
let year = d.getFullYear();
document.getElementById("demo").innerHTML = year;