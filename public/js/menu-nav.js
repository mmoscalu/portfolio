let menuNav = document.getElementById('menu-id');
let menuBtn = document.getElementById('menu-btn-id');
let navItem = document.getElementsByClassName('nav-item');

menuBtn.onclick =  function (e) {

    e.preventDefault();
    menuBtn.classList.toggle('menu-btn-active');
    menuNav.classList.toggle('menu-nav-active');

};

for (let i = 0; i < navItem.length; i++) {

    navItem[i].onclick = function (e) {
        menuNav.classList.remove('menu-nav-active');
        menuBtn.classList.toggle('menu-btn-active');

    };

}

