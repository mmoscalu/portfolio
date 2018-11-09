let menuNav = document.getElementById('menu-id');
let menuBtn = document.getElementById('menu-btn-id');



menuBtn.onclick =  function (e) {
    e.preventDefault();
    menuBtn.classList.toggle('menu-btn-active');
    menuNav.classList.toggle('menu-nav-active');
    console.log('click');
};