
$(document).ready(function () {
  $("#reserve").click(function () {
    $("#menuSelect").toggle("slow", "swing");
  });
  $("#buyNow").click(function () {
    $("#showSure").show("slow", "swing");
  });
  $("#hideSure").click(function () {
    $("#showSure").hide();
    $("#menuSelect").hide();
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
    $("#restaurants h4").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value2) > -1)
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
var end = 0;

document.getElementById("addRes2").innerText = 
'Successful restaurant booking !' + '\n' + 'Please pay in the booking tickets !'
var price = 150;
var amountDT = 1;
var dayDT = 1;
document.getElementById("price").innerText = '$' + price;

var count =0;
if(count < 1 ){
  listRes.style.display = "none";
} else {
  listRes.style.display = "block";
}

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
  // document.getElementById("all").innerText = '$' + all;
  // document.getElementById("intro").innerText = 'Total money';
  document.getElementById("total").innerText = parseInt(end) + parseInt(all);
}

document.getElementById("showSure1").innerText = 'Please complete all information !'
function nbTicket() {
  amountDT = document.getElementById("amount").value;
  dayDT = document.getElementById("day").value;
  all = price * amountDT * dayDT;
  // document.getElementById("intro").innerText = 'Total money';
  // document.getElementById("all").innerText =  all + '$';
  if (all > 1) {
    document.getElementById("showSure1").innerText = 'Successful ticket set !'
                  + '\n' + '$' + all;
    }
    else {
      document.getElementById("showSure1").innerText = 'Please complete all information !'
    }
    document.getElementById("total").innerText = parseInt(end) + parseInt(all);
}

//add money

var cart = [];

function test(id, money){
  count +=1;
  if(count < 1 ){
    listRes.style.display = "none";
  } else {
    listRes.style.display = "block";
  }
  for(x in cart){
    if(id == cart[x].id){
      cart.splice(x,1)
      end -= money;
    }
  }
  cart.push({'id': id, 'money': money});
  showCart(cart);
  end += money;
  // document.getElementById("end").innerText = end;
  if(all>1){
  document.getElementById("total").innerText = parseInt(end) + parseInt(all);
}
else{
  document.getElementById("total").innerText = "Please enter amount and number of days !!";
}
}
function disRes(){
  for(x in cart){
    if(id == cart[x].id){
      cart.splice(x,1)
      end -= money;
      count -=1;
      document.getElementById("total").innerText = parseInt(end) + parseInt(all);
    }
}}
function showCart(cart){
  $('#idResShow').html(null);
  $('#priceResShow').html(null);
  for(i in cart ){ 
  $('#idResShow').append(`${cart[i].id} <br> `);
  $('#priceResShow').append(` ${cart[i].money} $ <br> `);
}}
//end add money
function focusFunction(){
  document.getElementById("amount").style.background = "yellow";
}
function focusFunction1(){
  document.getElementById("day").style.background = "yellow";
}
function blurFunction() {
  document.getElementById("amount").style.background = "white";
  }
function blurFunction1() {
    document.getElementById("day").style.background = "white";
    }
// function myReload(){
//   return "Do you like me ";
// }




