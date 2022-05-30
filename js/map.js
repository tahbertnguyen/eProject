document.querySelectorAll(".fa-map-location-dot").forEach((item) => {
    item.addEventListener("click", (event) => {
        event.target.nextElementSibling.style.display = "block";
    });
});

document.querySelectorAll(".closeMap").forEach((item) => {
    item.addEventListener("click", (event) => {
        event.target.parentElement.style.display = "none";
    });
});

document.querySelectorAll(".map-layer").forEach((item) => {
    item.addEventListener("click", (event) => {
        if(event.target === event.currentTarget) {
            event.target.style.display = "none";
        }
    });
});