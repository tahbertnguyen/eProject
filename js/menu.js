var menuIcon = document.getElementById("menuIcon");
var closeMenu = document.getElementById("closeMenu");
var navlist = document.getElementById("navlist");
var overlay = document.getElementById("overlay");

menuIcon.onclick = () => {
    navlist.classList.add('active');
    overlay.style.display = "block";
    closeMenu.style.display = "block";
}
closeMenu.onclick = () => {
    navlist.classList.remove('active');
    overlay.style.display = "none";
    closeMenu.style.display = "none";
}
window.onclick = (event) => {
    if(event.target === overlay) {
        navlist.classList.remove('active');
        overlay.style.display = "none";
        closeMenu.style.display = "none";
    }
}