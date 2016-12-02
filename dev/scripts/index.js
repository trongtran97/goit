require("./active.js");
require("owl.carousel/dist/owl.carousel.js");
require("remodal/dist/remodal.min.js");

console.log('set up');
$(document).ready(function() {
    $(document).on('opening', '.remodal', function () {
        console.log('Modal is opening');
    });

    $(document).on('opened', '.remodal', function () {
        console.log('Modal is opened');
    });

    $(document).on('closing', '.remodal', function (e) {

        // Reason: 'confirmation', 'cancellation'
        console.log('Modal is closing' + (e.reason ? ', reason: ' + e.reason : ''));
    });

    $(document).on('closed', '.remodal', function (e) {

        // Reason: 'confirmation', 'cancellation'
        console.log('Modal is closed' + (e.reason ? ', reason: ' + e.reason : ''));
    });

    $(document).on('confirmation', '.remodal', function () {
        console.log('Confirmation button is clicked');
    });

    $(document).on('cancellation', '.remodal', function () {
        console.log('Cancel button is clicked');
    });
});


$(document).ready(function() {
    $(document).on('closed', '.remodal', function (e) {
        $('#stop').on('click', function () {
            //$('#popup-youtube-player').stopVideo();
            $('#youtube-player')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
        })
        });
});
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
});


