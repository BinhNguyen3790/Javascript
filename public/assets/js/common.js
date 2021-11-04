//===============Introduction===================//
// Change Content:
function getDate() {
  document.getElementById('demo').innerHTML = Date();
}

// Change Value:
function changeImgOn() {
  document.getElementById('myImage').src = 'https://www.w3schools.com/js/pic_bulbon.gif';
}
function changeImgOff() {
  document.getElementById('myImage').src = 'https://www.w3schools.com/js/pic_bulboff.gif';
}

// Change CSS:
function changeCss() {
  document.getElementById('changeCss').style.fontSize = "35px";
}

// Hide Show:
function hideMe() {
  document.getElementById('hideShow').style.display = "none";
}
function showMe() {
  document.getElementById('hideShow').style.display = "block";
}

//===============Where To===================//
// Change CSS:
function whereTo() {
  document.getElementById('whereTo').innerHTML = "My First JavaScript";
}

//===============Javascript Output===================//
function printPage() {
  window.print();
}

//===============Javascript Statements===================//
$(".sumOf").click(function (e) {
  e.preventDefault();
  var inputs = document.getElementsByTagName('input');
  var operator = document.getElementById("select_id").value;
  var value = 0;
  for (index = 0; index < inputs.length; ++index) {
    var value1 = parseInt(inputs[0].value);
    var value2 = parseInt(inputs[1].value);
    if (operator === "+") {
      value = value1 + value2;
    } else if (operator === "-") {
      value = value1 - value2;
    } else if (operator === "*") {
      value = value1 * value2;
    } else {
      value = value1 / value2;
    }
  }
  document.getElementById("sumResult").innerHTML = "RESULT: " + value;
})

//===============Javascript Function===================//
let x = myFunction(4, 3);   
function myFunction(a, b) {
  return a * b;             
}
document.getElementById("showNumber").innerHTML = x;

//===============Javascript Object===================//
const car = {type:"Fiat", model:"500", color:"white"};
document.getElementById("object").innerHTML = "Car type: " + car.type;
