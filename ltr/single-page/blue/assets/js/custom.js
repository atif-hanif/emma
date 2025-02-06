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
                items:2
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
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:5
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

document.addEventListener("DOMContentLoaded", function (event) {
    let circle = document.querySelectorAll(".circle");
    circle.forEach(function (progress) {
        let degree = 0;
        var targetDegree = parseInt(progress.getAttribute("data-degree"));
        let color = progress.getAttribute("data-color");
        let number = progress.querySelector(".number");
    
        var interval = setInterval(function () {
            degree += 1;
            if (degree > targetDegree) {
            clearInterval(interval);
            return;
            }
            progress.style.background = `conic-gradient(${color} ${degree}%, #222 0%)`;
            number.innerHTML = degree + "<span>%</span>";
            number.style.color = color;
        }, 50);
    });
});

var btn = $('#button');

$(window).scroll(function() {
    if ($(window).scrollTop() > 500) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
});
  
const d = new Date();
let year = d.getFullYear();
document.getElementById("demo").innerHTML = year;