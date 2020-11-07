// Load Best Seller items

let arrBestSellers = JSON.parse(localStorage.getItem('BestSellers'))
let bestSellersElement = document.querySelector('.best-sellers');


for(item of arrBestSellers){
    let itemElement = document.createElement('section');
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

    let priceElement = document.createElement('span');
    priceElement.classList.add('item-price');
    priceElement.innerText = item.price + 'đ';
    itemElement.appendChild(priceElement);
}

// Cần load lại array khác cho content-product này
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

    let priceElement = document.createElement('span');
    priceElement.classList.add('item-price');
    priceElement.innerText = item.price + 'đ';
    itemElement.appendChild(priceElement);
}


