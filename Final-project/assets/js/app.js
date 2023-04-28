// var $jq = jQuery.noConflict();
// $jq(document).ready(function() {
//     $jq('a').click(function(event) {
//         $jq(this).hide();
//         event.preventDefault();
//     })
// })

//Slider section
// $('.slider').slick({
//     dots: true,
//     infinite: false,
//     speed: 300,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     responsive: [
//         {
//             breakpoint: 1024,
//             settings: {
//                 slidesToShow: 3,
//                 slidesToScroll: 3,
//                 infinite: true,
//                 dots: true
//             }
//         },
//         {
//             breakpoint: 600,
//             settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 2
//             }
//         },
//         {
//             breakpoint: 480,
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1
//             }
//         }
//         // You can unslick at a given breakpoint now by adding:
//         // settings: "unslick"
//         // instead of a settings object
//     ]
// });



//Mobile js

let hamburger = document.querySelector('.hamburger');
let mobile_content = document.querySelector('#js-mobile');

hamburger.onclick = function () {

    // mobile_content.classList.toggle('active');
    if (!mobile_content.classList.contains('active')) {
        mobile_content.classList.add('active')
    } else {
        mobile_content.classList.remove('active')
    }
}