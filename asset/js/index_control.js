// đã khai báo ở file index_loadproduct.js nên k cần khai báo lại
// let userLogin = sessionStorage.getItem('UserLogin');

console.log(userLogin);

let btnDangnhap = document.getElementById('btnDangnhap');

if(userLogin) {
    btnDangnhap.style.display = 'none';
}

