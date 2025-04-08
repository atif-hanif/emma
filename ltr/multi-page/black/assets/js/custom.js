$(document).ready(function () {
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 100) {
            $("body").addClass("fixed-header");
        } else {
            $("body").removeClass("fixed-header");
        }
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