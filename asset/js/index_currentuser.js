let currentUser = JSON.parse(sessionStorage.getItem('currentUser'));

if(currentUser) {
    btnDangnhap.style.display = 'none';
    btnProfile.style.display = 'list-item';
}

// sản phẩm trong giỏ hàng bằng []cart của user
let cartNotice = document.querySelector('.cart-notice');
cartNotice.innerText = currentUser.cart.length;