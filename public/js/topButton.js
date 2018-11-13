let topBtn = document.getElementById('topBtn');

window.onscroll = function() {scrollFunction()};

function scrollFunction() {

    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

}

$(document).ready(function(){

    $("#topBtn").on("click", function (event) {

        $('body,html').animate({scrollTop:0},2000);
    });

});
