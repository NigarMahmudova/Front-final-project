

var checkCount = function () {
    let card_list = JSON.parse(localStorage.getItem('cards'));
    if (card_list.length > 0) {
        document.querySelector('.empty-basket').classList.add('d-none');
        document.querySelector('#content').classList.remove('d-none');
    
    } else {
        document.querySelector('#content').classList.add('d-none');
        document.querySelector('.empty-basket').classList.remove('d-none');
    }
}
checkCount();


function getCards() {
    let card_list = JSON.parse(localStorage.getItem('cards'));
    let x = "";
    let total = 0;
    let count = 0;
    card_list.forEach(cr => {
        console.log(cr.Id);
        x += `
        <div id=${cr.Id} class=" basket-card ">
                        <div class="basket-card-img-box">
                            <img class="basket-card-img"
                                src=${cr.Image}>
                        </div>
                        <div class="basket-card-text">
                            <div class="basket-card-header">
                                <div class="basket-card-title">${cr.Name}</div>
                                <span class=" d-none">${cr.Id}</span>
                                <div class="quantity">
                                    <i class="fa-solid fa-minus" onclick="Minus(this)"></i>
                                    <span>${cr.Count}</span>
                                    <i class="fa-solid fa-plus" onclick="Plus(this)"></i>
                                </div>
                                <p>${cr.Count * cr.Price}</p>
                                <span class=" d-none">${cr.Id}</span>
                                <i class="fa-regular fa-x" onclick="Delete(this)"></i>
                            </div>

                            
                            
                        </div>
                    </div>
        `
        count += cr.Count
        total += (cr.Count * cr.Price)

    });
    document.querySelector('.rowlist').innerHTML = x;
    document.querySelector('#total-count').innerHTML = count;
    document.querySelector('#total').innerHTML = total;
}
getCards();

document.querySelector('#btn-clear').addEventListener('click', function () {
    localStorage.removeItem('cards');
    location.reload();
})

var Delete = function(x){
    let card_list = JSON.parse(localStorage.getItem('cards'));
    let wanted = x.previousElementSibling.innerHTML;
    let exist_prod = card_list.find(pr => pr.Id === wanted);
    let filtered_list = card_list.filter(function(obj){ 
        return obj.Id != exist_prod.Id;
    });
    localStorage.setItem('cards',JSON.stringify(filtered_list));
    getCards();
    ShowCount();
    checkCount();
}



var Minus = function(x){
    let card_list = JSON.parse(localStorage.getItem('cards'));
    // console.log(x.parentElement.previousElementSibling.innerHTML)
    let min = x.parentElement.previousElementSibling.innerHTML;
        
    if(card_list.length>1){
        let exist_prod = card_list.find(pr => pr.Id === min);
        if(Number(exist_prod.Count)>1){
            exist_prod.Count -=1;
            localStorage.setItem('cards',JSON.stringify(card_list));
        }else{
        let filtered_list = card_list.filter(function(obj){ 
            return obj.Id != exist_prod.Id; 
        });
        localStorage.setItem('cards',JSON.stringify(filtered_list));
            
    }
    }else{
        let exist_prod = card_list.find(pr => pr.Id === min);
    if(Number(exist_prod.Count)>1){
        exist_prod.Count -=1;
        localStorage.setItem('cards',JSON.stringify(card_list));
    }else{
        localStorage.removeItem('cards')
        location.reload();
    }
    }
    getCards()
    ShowCount();
    checkCount();
}



var Plus = function(x){
    let card_list = JSON.parse(localStorage.getItem('cards'));
    console.log(x.parentElement.previousElementSibling.innerHTML)
    let id = x.parentElement.previousElementSibling.innerHTML
    let exist_prod = card_list.find(pr => pr.Id === id);
    exist_prod.Count += 1
    localStorage.setItem('cards',JSON.stringify(card_list));
    getCards()
}