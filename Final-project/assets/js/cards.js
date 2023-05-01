// let getCards = function () {
//     fetch('/assets/json/cards.json')
//         .then(response => response.json())
//         .then(data => {
//             let x = '';
//             data.forEach(item => {
//                 x += `
//                 <div id=${item.id} class="commoncards-card">
//                 <img class="commoncards-img" src=${item.img} alt="Visa Platinum">
//                 <div class="commoncards-text">
//                     <div class="commoncards-name"> ${item.title} </div>
//                     <div class="commoncards-desc"> ${item.description} </div>
//                     <div class="commoncards-btn">
//                         <a class="button" href="#"> Sifariş et </a>
//                     </div>
//                 </div>
//             </div>
//             `
//             })
//             document.querySelector('#commoncards').innerHTML = x;
//         })
//         .catch(err => console.log(err))
// }

// getCards();


if (localStorage.getItem('cards') === null) {
    localStorage.setItem('cards', JSON.stringify([]))
}

let buttons = document.querySelectorAll('.button');

for(let btn of buttons) {
    btn.onclick = function(e) {
        e.preventDefault();
        let id = this.parentElement.parentElement.parentElement.parentElement.id;
        let src = this.parentElement.parentElement.parentElement.children[0].src;
        let cardName = this.parentElement.parentElement.children[0].innerHTML;
        let cardPrice = this.parentElement.parentElement.children[2].children[0].innerHTML;
        
        let card_list = JSON.parse(localStorage.getItem('cards'));

        let existCard = card_list.find(item => item.Id === id);

        if (existCard === undefined) {
            card_list.push({
                Id: id,
                Image: src,
                Name: cardName,
                Price: cardPrice,
                Count: 1
            })
        } else {
            existCard.Count++;
        }

        localStorage.setItem('cards', JSON.stringify(card_list));
        document.querySelector('.alert-box').style.display = 'block';
        setTimeout(() => {
        document.querySelector('.alert-box').style.display = 'none';
        }, 1000);
        ShowCount();
    }
}

 function ShowCount(){
    let card_list = JSON.parse(localStorage.getItem('cards'));
    document.querySelector('#count').innerHTML = card_list.length;
}
ShowCount();