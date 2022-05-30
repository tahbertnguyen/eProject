var slideIndex = 1;
showSlides(slideIndex);

function clickPrevNext(n) {
    showSlides(slideIndex += n);}

function clickThumbnail(n) {
    showSlides(slideIndex = n);}

function showSlides(n) {
    var i;
    var slice = document.getElementsByClassName("slice");
    var thumb = document.getElementsByClassName("thumb");
    if (n > slice.length) { slideIndex = 1 };
    if (n < 1) { slideIndex = slice.length };
    for (i = 0; i < slice.length; i++) {
        slice[i].style.display = "none";
    }
    for (i = 0; i < thumb.length; i++) {
        thumb[i].className = thumb[i].className.replace(" slice-active", "");
    }
    slice[slideIndex - 1].style.display = "block";
    thumb[slideIndex - 1].className += " slice-active";}