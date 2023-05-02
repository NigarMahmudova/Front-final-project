let hr_buttons = document.querySelectorAll('.locations-links .locations-item');

for(let btn of hr_buttons){
    btn.onclick = function(e) {
        e.preventDefault();
        let active = document.querySelector('.loc-active');

        active.classList.remove('loc-active');
        this.classList.add('loc-active');


        let data_id = this.getAttribute('data-id');
        let contents = document.querySelectorAll('.hr-contents .hr-content');

        for(let content of contents){
            if(content.id === data_id){
                content.classList.remove('d-none');
            }
            else{
                content.classList.add('d-none');
            }
        }
    }
}