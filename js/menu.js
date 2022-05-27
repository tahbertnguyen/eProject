var menuIcon = document.getElementById("menuIcon");
var closeIcon = document.getElementById("closeIcon");
var navlist = document.getElementById("navlist");
var overlay = document.getElementById("overlay");

menuIcon.onclick = () => {
    navlist.classList.add('active');
    overlay.style.display = "block";
    closeIcon.style.display = "block";
}
closeIcon.onclick = () => {
    navlist.classList.remove('active');
    overlay.style.display = "none";
    closeIcon.style.display = "none";
}
window.onclick = (event) => {
    if(event.target == overlay) {
        navlist.classList.remove('active');
        overlay.style.display = "none";
        closeIcon.style.display = "none";
    }
}