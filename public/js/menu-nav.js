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
// Scroll menu
$(document).ready(function(){
    $("#menu-id").on("click","a", function (event) {


        var id  = $(this).attr('href'),

            top = $(id).offset().top;

        $('body,html').animate({scrollTop: (top - 90)}, 3000);
    });

});
// Footer menu scroll
$(document).ready(function(){

    $("#menu-footer").on("click","a", function (event) {


        var id  = $(this).attr('href'),

            top = $(id).offset().top;

        $('body,html').animate({scrollTop: (top - 90)}, 3000);
    });

});

// Scroll top button


