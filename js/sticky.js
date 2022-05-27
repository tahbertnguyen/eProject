// Sticky Navigation
var nav = document.getElementById("nav");
var gap = document.getElementById("gap");
window.onscroll = function() {
    if(window.pageYOffset >= gap.offsetHeight) {
        nav.classList.add("sticky");
    } else {
        nav.classList.remove("sticky");
    }
}