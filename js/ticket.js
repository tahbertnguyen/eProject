$(document).ready(function () {
  $("#reserve").click(function () {
    $("#menuSelect").toggle("slow", "swing");
  });
  $("#buyNow").click(function () {
    alert("One");
  });
  $("#buyNow1").click(function () {
    $("#menuSelect").hide();
  });
  $("#young").select(function () {
    alert("Handler for .select() called.");
  });
});   
var price = 150;
var amountDT = 1;
var dayDT = 1;
var all = 1;
document.getElementById("price").innerText = '$' + price;

function changeSl() {
  var dataSl = document.getElementById("human").value;
  if (dataSl == 'Child') {
     price = 150;
  } else if (dataSl == 'Young') {
     price = 200;
  } else {
     price = 300;
  }
  document.getElementById("price").innerText = '$' + price;
  all = price * amountDT * dayDT;
  document.getElementById("all").innerText ='$' + all;
  document.getElementById("intro").innerText ='Total money';
}

  function nbTicket(){
    amountDT = document.getElementById("amount").value;
    dayDT = document.getElementById("day").value;
    all = price * amountDT * dayDT;
    document.getElementById("intro").innerText ='Total money';
    document.getElementById("all").innerText ='$' + all;
  }

  var myButton = document.getElementById("myBtn");
  window.onscroll = function() {scrollFunction()};
  function scrollFunction() {
    if (document.body.scrollTop > 20 
      || document.documentElement.scrollTop > 20) {
        myButton.style.display = "block";
    } else {
      myButton.style.display = "none";
    }
  }
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  



