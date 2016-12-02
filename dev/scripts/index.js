require("./active.js");
require("owl.carousel/dist/owl.carousel.js");

$(document).ready(function(){
    $('.slider').owlCarousel({
        items: 1,
        loop:true,
        autoplay: true,
        nav: true
    })
});
$(document).ready(function () {
    $('.slick-slider').owlCarousel({
        items: 10,
        loop:true,
        margin:2,
        autoplay: true
    })
});
$(document).ready(function () {
    $('#list-popular').owlCarousel({
        items: 4,
        loop:true,
        autoplay: true,
    })
})
