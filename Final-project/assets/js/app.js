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
    document.body.classList.toggle('body-noscroll')
}


// Mobile exchange
let exc_buttons = document.querySelectorAll('.exc-box-mob .exc-item');

for (let btn of exc_buttons) {
    btn.onclick = function (e) {
        e.preventDefault();
        let active = document.querySelector('.exc-mob-active');

        active.classList.remove('exc-mob-active');
        this.classList.add('exc-mob-active');


        let data_id = this.getAttribute('data-id');
        let exc_contents = document.querySelectorAll('.exc-content-mob .exchange-item');

        for (let content of exc_contents) {
            if (content.id === data_id) {
                content.classList.remove('d-none');
            }
            else {
                content.classList.add('d-none');
            }
        }
    }
}

// Dark mode
let mode_btn = document.querySelector('#js-mode');
let sun = document.querySelector('.sun');
let moon = document.querySelector('.moon');
let header_wrapper = document.querySelector('.header .wrapper');
let header_top = document.querySelectorAll('.header-top .top-left .top-menu .top-menu-link');
let top_options = document.querySelector('.top-options');
let top_option = document.querySelectorAll('.top-options .top-option');
let lang_eng = document.querySelector('.top-langs .lang-eng');
let lang_rus = document.querySelector('.top-langs .lang-rus');
let top_basket = document.querySelector('.top-basket');
let basket_icon = document.querySelector('.top-basket i');
let top_search = document.querySelector('.top-search');
let search_icon = document.querySelector('.top-search a i');
let nav_link = document.querySelectorAll('.nav-menu-left .menu-link');
let nav_tel = document.querySelectorAll('.nav-menu-right a');
let statistic_box = document.querySelectorAll('.statistic-box');
let st_caption = document.querySelectorAll('.statistic-caption');
let st_desc = document.querySelectorAll('.statistic-desc');
let ucard = document.querySelector('.ucard-wrapper');
let ucard_btn = document.querySelectorAll('.ucard-text .ucard-extras .btn-extra');
let ubank = document.querySelector('.ubank-wrapper');
let exchange = document.querySelector('.exchange-wrapper');
let exchange_header = document.querySelectorAll('.exc-item-header');
let exchange_date = document.querySelectorAll('.exc-item-date');
let exchange_data = document.querySelectorAll('.exc-item-body td');
let exc_calc = document.querySelector('.exc-convertor');
let exc_inp = document.querySelectorAll('.exc-convertor .exc-calc');
let news_cards = document.querySelectorAll('.news-card');
let news_summary = document.querySelectorAll('.news-summary');
let network_loc = document.querySelector('.network-location');
let network_que = document.querySelector('.network-que');
let network_sum = document.querySelectorAll('.network-summary');
let footer_first = document.querySelectorAll('.footer-menu-list .first');
let footer_child = document.querySelectorAll('.footer-menu-list .child');


mode_btn.onclick = function () {
    mode_btn.classList.toggle('mode-light');
    mode_btn.classList.toggle('mode-dark');

    if (mode_btn.classList.contains("mode-light")) {
        sun.classList.remove('d-none');
        moon.classList.add('d-none');
        document.body.classList.add('dark-mode');

        document.querySelector('.ucard-text .ucard-desc').style.color = 'white';
        document.querySelector('.ubank-text .ubank-desc').style.color = 'white';
        document.querySelector('.exc-cnv-header .exc-header').style.color = 'white';
        document.querySelector('.exc-cnv-header .exc-date').style.color = 'white';
        document.querySelector('.footer-text').style.color = 'white';
    }
    else {
        sun.classList.add('d-none');
        moon.classList.remove('d-none');
        document.body.classList.remove('dark-mode');

        document.querySelector('.ucard-text .ucard-desc').style.color = 'black';
        document.querySelector('.ubank-text .ubank-desc').style.color = 'black';
        document.querySelector('.exc-cnv-header .exc-header').style.color = 'black';
        document.querySelector('.exc-cnv-header .exc-date').style.color = 'black';
        document.querySelector('.footer-text').style.color = 'black';
    }


    header_wrapper.classList.toggle('dark-mode');
    lang_eng.classList.toggle('dark-mode-card');
    lang_rus.classList.toggle('dark-mode-card');
    top_basket.classList.toggle('dark-mode-card');
    basket_icon.classList.toggle('dark-mode-text');
    top_search.classList.toggle('dark-mode-card');
    search_icon.classList.toggle('dark-mode-text');
    ucard.classList.toggle('dark-mode-card');
    ubank.classList.toggle('dark-mode-card');
    exchange.classList.toggle('dark-mode-card');
    exc_calc.classList.toggle('dark-mode-card');
    top_options.classList.toggle('dark-mode-card');
    network_loc.classList.toggle('dark-mode-card');
    network_que.classList.toggle('dark-mode-card');



    for (let item of header_top) {
        item.classList.toggle('dark-mode-text');
    }

    for (let item of top_option) {
        item.classList.toggle('dark-mode-text');
    }

    for (let item of nav_link) {
        item.classList.toggle('dark-mode-text');
    }

    for (let item of nav_tel) {
        item.classList.toggle('dark-mode-border');
        item.classList.toggle('dark-mode-text');
    }

    for (let item of statistic_box) {
        item.classList.toggle('dark-mode-card');
    }

    for (let item of st_caption) {
        item.classList.toggle('dark-mode-text');
    }

    for (let item of st_desc) {
        item.classList.toggle('dark-mode-text');
    }

    for (let item of exchange_header) {
        item.classList.toggle('dark-mode-text');
    }

    for (let item of exchange_date) {
        item.classList.toggle('dark-mode-text');
    }

    for (let item of ucard_btn) {
        item.classList.toggle('dark-mode-border');
    }

    for (let item of exchange_data) {
        item.classList.toggle('dark-mode-text');
    }

    for (let item of exc_inp) {
        item.classList.toggle('dark-mode-inp');
    }

    for (let item of news_cards) {
        item.classList.toggle('dark-mode-card');
    }

    for (let item of news_summary) {
        item.classList.toggle('dark-mode-text');
    }

    for (let item of network_sum) {
        item.classList.toggle('dark-mode-text');
    }

    for (let item of footer_first) {
        item.classList.toggle('dark-mode-text');
    }

    for (let item of footer_child) {
        item.classList.toggle('dark-mode-text');
    }
}