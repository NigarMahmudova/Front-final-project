let buttons = document.querySelectorAll('#tabmenu-dots .dot');

for (let btn of buttons) {
    btn.onclick = function (e) {
        e.preventDefault();
        let active = document.querySelector('.dot-active');

        active.classList.remove('dot-active');
        this.classList.add('dot-active');


        let data_id = this.getAttribute('data-id');
        let contents = document.querySelectorAll('.tabmenu .card-item');

        for (let content of contents) {
            if (content.id === data_id) {
                content.classList.remove('d-none');
            }
            else {
                content.classList.add('d-none');
            }
        }
    }
}

let types = document.querySelectorAll('.type-item .type');

for (let type of types) {
    type.onclick = function (e) {
        e.preventDefault();
        let active = document.querySelector('.type-active');

        active.classList.remove('type-active');
        this.classList.add('type-active');
    }
}

let values = document.querySelectorAll('.type-inner .value-btn');

for (let value of values) {
    value.onclick = function (e) {
        e.preventDefault();
        let active_value = document.querySelector('.value-btn-active')

        active_value.classList.remove('value-btn-active');
        this.classList.add('value-btn-active');
    }
}


let forgot_password = document.querySelector('#f_password');
let forgot_password_modal = document.querySelector('.modal-content')
let x = document.querySelector('#close')


forgot_password.onclick = function (e) {
    e.preventDefault();
    forgot_password_modal.classList.add('active');
}

x.onclick = function (e) {
    e.preventDefault();
    forgot_password_modal.classList.remove('active');
}