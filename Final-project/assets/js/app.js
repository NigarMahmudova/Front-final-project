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
    mobile_content.classList.toggle('active');
    document.body.classList.toggle('body-noscroll')
}


//Search
let search = document.querySelector('.top-search');
let search_content = document.querySelector('#js-search');


search.onclick = function () {
    search_content.classList.toggle('active');
    document.body.classList.toggle('body-noscroll')
}

let close = document.querySelector('#js-search .search-content-body-close');

close.onclick = function () {
    search_content.classList.remove('active');
}


// Mobile exchange
let exc_buttons = document.querySelectorAll('.exc-box-mob .exc-item');

for(let btn of exc_buttons){
    btn.onclick = function(e) {
        e.preventDefault();
        let active = document.querySelector('.exc-mob-active');

        active.classList.remove('exc-mob-active');
        this.classList.add('exc-mob-active');


        let data_id = this.getAttribute('data-id');
        let exc_contents = document.querySelectorAll('.exc-content-mob .exchange-item');

        for(let content of exc_contents){
            if(content.id === data_id){
                content.classList.remove('d-none');
            }
            else{
                content.classList.add('d-none');
            }
        }
    }
}