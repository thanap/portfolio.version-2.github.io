//mobilenavbar
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

//shrink navbar size
$(window).scroll(function() {
if ($(document).scrollTop() > 50) {
$('nav').addClass('shrink');
} else {
$('nav').removeClass('shrink');
}
});
