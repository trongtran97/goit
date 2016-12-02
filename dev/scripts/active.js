$(document).ready(function () {
    var liGiftContainer = $('#nav-gift');
    var giftDropdown = $('.gift-dropdown');
    liGiftContainer.find('a').on('click', function(){
        liGiftContainer.toggleClass('active');
        return false;
    });
    $(window).on('click', function(e){
        var giftContainer = $(e.target).closest('#nav-gift');
        if(giftContainer.length === 0){
            liGiftContainer.removeClass('active');
        }
    })
    // $(window).click(function (e) {
    //     var giftVoucherContainer = $(e.target).closest('.gift-dropdown');
    //     if (!giftVoucherContainer.length) {
    //         $('body').click(function () {
    //             liGiftContainer.removeClass('active');
    //         })
    //         liGiftContainer.click(function () {
    //             if (liGiftContainer.hasClass('active')) {
    //                 liGiftContainer.removeClass('active');
    //                 console.log('active');
    //             }
    //             else {
    //                 liGiftContainer.addClass('active');
    //                 console.log('chưa active');
    //             }
    //         })
    //     }
    //     else {
    //         liGiftContainer.addClass('active');
    //     }
    // })
})

// $(document).ready(function () {
//     liGiftContainer.click(function () {
//         if ($(liGiftContainer).hasClass('active')) {
//             $(liGiftContainer).removeClass('active');
//             console.log('active');
//         }
//         else {
//             liGiftContainer.addClass('active');
//             console.log('chưa active');
//         }
//     })
// });
// $(document).ready(function () {
//     $(window).click(function (e) {
//         var giftVoucherContainer = $(e.target).closest('div.gift');
//         var liGiftContainer = $('li.dropdown');
//         //Haven't' click on giftVoucher container
//         if (!giftVoucherContainer.length) {
//             liGiftContainer.click(function () {
//                 if ($(this).hasClass('active')) {
//                     $(this).removeClass('active');
//                     console.log('active');
//                     return false;
//                 }
//                 else {
//                     $(this).addClass('active');
//                     console.log('chưa active');
//                     return false;
//                 }
//             })
//         }
//         else {
//             liGiftContainer.addClass('active');
//         }
//     })
// })
