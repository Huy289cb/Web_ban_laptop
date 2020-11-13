let currentUser = JSON.parse(sessionStorage.getItem('currentUser'));

if(currentUser) {
    btnDangnhap.style.display = 'none';
    btnProfile.style.display = 'list-item';
} else {
    
}
