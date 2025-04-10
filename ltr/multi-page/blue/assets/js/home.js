$(document).ready(function () {
    new TypeIt("#type-it", {
        speed: 100,
        loop: true,
        strings: ["Designer", "Developer"],
        breakLines: false,
    }).go();

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
                items:2
            }
        }
    });
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