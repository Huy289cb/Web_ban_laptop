// Load Best Seller items

let arrBestSellers = JSON.parse(localStorage.getItem('BestSellers'))
let bestSellersElement = document.querySelector('.best-sellers');


for(item of arrBestSellers){
    let itemElement = document.createElement('section');
    itemElement.setAttribute('item_id', item.id);
    itemElement.classList.add('item')
    bestSellersElement.appendChild(itemElement);

    let imgElement = document.createElement('section');
    imgElement.classList.add('item-img');
    imgElement.style.backgroundImage = `url(${item.img})`;
    itemElement.appendChild(imgElement);

    let nameElement = document.createElement('span');
    nameElement.classList.add('item-name');
    nameElement.innerText = item.name;
    itemElement.appendChild(nameElement);

    let btnWrap = document.createElement('section');
    btnWrap.classList.add('item-btn-wrap');

    let priceElement = document.createElement('span');
    priceElement.classList.add('item-price');
    priceElement.innerText = item.price + 'đ';
    btnWrap.appendChild(priceElement);

    // onclick
    let btnAdd = document.createElement('button');
    btnAdd.classList.add('btn', 'btn-add-cart');

    btnAdd.onclick = addToCart;

    let iconAdd = document.createElement('i');
    iconAdd.classList.add('fas', 'fa-cart-plus');
    btnAdd.appendChild(iconAdd);
    var t = document.createTextNode('Thêm vào giỏ');
    btnAdd.appendChild(t);
    btnWrap.appendChild(btnAdd);

    itemElement.appendChild(btnWrap);
}

let userLogin = sessionStorage.getItem('UserLogin');

if(userLogin) {
    btnDangnhap.style.display = 'none';
}


function addToCart() {
    if(userLogin){
        // lấy item id
        console.log(this.parentNode.parentNode.getAttribute('item_id'));

    } else {
        //mở trang đăng nhập/đăng ký
    }
}

let arrFeatureProduct = JSON.parse(localStorage.getItem('FeatureProduct'))
let productElement = document.querySelector('.content-product');

for(item of arrFeatureProduct){
    let itemElement = document.createElement('section');
    itemElement.classList.add('item')
    productElement.appendChild(itemElement);

    let imgElement = document.createElement('section');
    imgElement.classList.add('item-img');
    imgElement.style.backgroundImage = `url(${item.img})`;
    itemElement.appendChild(imgElement);

    let nameElement = document.createElement('span');
    nameElement.classList.add('item-name');
    nameElement.innerText = item.name;
    itemElement.appendChild(nameElement);

    let btnWrap = document.createElement('section');
    btnWrap.classList.add('item-btn-wrap');

    let priceElement = document.createElement('span');
    priceElement.classList.add('item-price');
    priceElement.innerText = item.price + 'đ';
    btnWrap.appendChild(priceElement);

    let btnAdd = document.createElement('button');
    btnAdd.classList.add('btn', 'btn-add-cart');
    let iconAdd = document.createElement('i');
    iconAdd.classList.add('fas', 'fa-cart-plus');
    btnAdd.appendChild(iconAdd);
    var t = document.createTextNode('Thêm vào giỏ');
    btnAdd.appendChild(t);
    btnWrap.appendChild(btnAdd);
    
    itemElement.appendChild(btnWrap);
}


