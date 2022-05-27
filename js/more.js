// See more or See less - Experience
function moreExp() {
    var item = document.querySelectorAll(".moreExp");
    var more = document.getElementById("moreExp");
    for(var i=0; i<item.length; i++) {
        item[i].classList.toggle("showOrHide");
    }
    if(more.innerHTML == "See Less") {
        more.innerHTML = "See More";
    } else {
        more.innerHTML = "See Less";
    }
    more.scrollIntoView(false);
}

// See more or See less - Experience
function moreDin() {
    var item = document.querySelectorAll(".moreDin");
    var more = document.getElementById("moreDin");
    for(var i=0; i<item.length; i++) {
        item[i].classList.toggle("showOrHide");
    }
    if(more.innerHTML == "See Less") {
        more.innerHTML = "See More";
    } else {
        more.innerHTML = "See Less";
    }
    more.scrollIntoView(false);
}

// See more or See less - Characters
function moreChar() {
    var item = document.querySelectorAll(".moreChar");
    var more = document.getElementById("moreChar");
    for(var i=0; i<item.length; i++) {
        item[i].classList.toggle("showOrHide");
    }
    if(more.innerHTML == "See Less") {
        more.innerHTML = "See More";
    } else {
        more.innerHTML = "See Less";
    }
    more.scrollIntoView(false);
}

// See more or See less - Whatsup
function moreWhatsup() {
    var item = document.querySelectorAll(".moreWhatsup");
    var more = document.getElementById("moreWhatsup");
    for(var i=0; i<item.length; i++) {
        item[i].classList.toggle("showOrHide");
    }
    if(more.innerHTML == "See Less") {
        more.innerHTML = "See More";
    } else {
        more.innerHTML = "See Less";
    }
    more.scrollIntoView(false);
}