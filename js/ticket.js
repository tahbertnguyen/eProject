$(document).ready(function () {
  $("#reserve").click(function () {
    $("#menuSelect").toggle("slow", "swing");
  });
  $("#buyNow").click(function () {
    $("#showSure").show("slow", "swing");
  });
  $("#hideSure").click(function () {
    $("#showSure").hide("slow", "swing");
  });
  $("#buyNow1").click(function () {
    $("#menuSelect").hide();
  });
  $(".addRes").click(function () {
    $("#addRes1").show("slow", "swing");
  });
  $("#hideaddRes").click(function () {
    $("#addRes1").hide("slow", "swing");
  });
  $("#myBk").click(function () {
    $("#addRes1").hide("slow", "swing");
    $("#menuSelect").toggle("slow", "swing");
  });

  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#attractions div").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  }); 

  $("#myInput1").on("keyup", function() {
    var value1 = $(this).val().toLowerCase();
    $("#restaurants div").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value1) > -1)
    });
  });

  $("#myInput2").on("keyup", function() {
    var value2 = $(this).val().toLowerCase();
    $("#Characters h4").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value2) > -1)
    });
  });

});
var all = 1;
document.getElementById("addRes2").innerText = 
'Successful restaurant booking !' + '\n' + 'Please pay in the booking tickets !'
var price = 150;
var amountDT = 1;
var dayDT = 1;
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
  document.getElementById("all").innerText = '$' + all;
  document.getElementById("intro").innerText = 'Total money';
}

document.getElementById("showSure1").innerText = 'Please complete all information !'
function nbTicket() {
  amountDT = document.getElementById("amount").value;
  dayDT = document.getElementById("day").value;
  all = price * amountDT * dayDT;
  document.getElementById("intro").innerText = 'Total money';
  document.getElementById("all").innerText = '$' + all;
  if (all > 1) {
    document.getElementById("showSure1").innerText = 'Successful ticket set !'
                  + '\n' + '$' + all;
    }
    else {
      document.getElementById("showSure1").innerText = 'Please complete all information !'
    }
}




