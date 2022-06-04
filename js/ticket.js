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


document.getElementById("dataSl").innerText = 'Child';
dataSl = 'Child';
document.getElementById("price").innerText = '$' + 150;
function changeSl() {
  var dataSl = document.getElementById("human").value;
  document.getElementById("dataSl").innerText = dataSl;
  if (dataSl == 'Child') {
    var price = 150;
  } else if (dataSl == 'Young') {
    var price = 200;
  } else {
    var price = 300;
  }
  document.getElementById("price").innerText = '$' + price;
}

  var amountDT = 1;
  document.getElementById("amountDT").innerText = amountDT;
  var dayDT = 1;
  document.getElementById("dayDT").innerText = dayDT;

  function nbTicket(){
    amountDT = document.getElementById("amount").value;
    document.getElementById("amountDT").innerText = amountDT;
    dayDT = document.getElementById("day").value;
    document.getElementById("dayDT").innerText = dayDT;
  }

  function all(){
    document.getElementById("all").innerText = 'han';
  }



