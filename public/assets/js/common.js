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
