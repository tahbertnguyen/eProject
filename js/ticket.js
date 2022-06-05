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

function changeSl() {
  var dataSl = document.getElementById("human").value;
  if (dataSl == 'Child') {
    var price = 150;
  } else if (dataSl == 'Young') {
    var price = 200;
  } else {
    var price = 300;
  }
  document.getElementById("price").innerText = '$' + price;
}

  function nbTicket(){
    amountDT = document.getElementById("amount").value;
    dayDT = document.getElementById("day").value;
    document.getElementById("dayDT").innerText = dayDT;
  }

  function all(){
    document.getElementById("all").innerText = 'han';
  }



