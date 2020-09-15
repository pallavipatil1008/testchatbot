

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
function asLi(item) {
 return $('<li>').text(item);
}
 
function showItem(item) {
 $('ul').append(asLi(item));
}
 
function showCars() {
 const cars = [];
 showItem('ford');
 fetch('germanCars.json').then(
   (resp) => {
     showItem('toyota');
     return resp.json();
   }).then((data) => {
     data.forEach(c => showItem(c));
   });
 showItem('honda');
}
 
document.addEventListener("DOMContentLoaded", function(){
 showCars();
});

///// germanCars.json /////

["vw", "bmw", "mercedes"]


