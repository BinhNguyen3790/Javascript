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
const car = { type: "Fiat", model: "500", color: "white" };
document.getElementById("object").innerHTML = "Car type: " + car.type;

//===============JavaScript Template Literals===================//
let firstName = "John";
let lastName = "Doe";
let text = `Welcome ${firstName}, ${lastName}!`;
document.getElementById("text").innerHTML = text;

//===============JavaScript Aray===================//
const points = [40, 100, 1, 15, 55, 10];
document.getElementById("maxArr").innerHTML = myArr(points);
function myArr(arr) {
  let len = arr.length;
  let max = -Infinity;
  while (len--) {
    if (arr[len] > max) {
      max = arr[len];
    }
  }
  return max;
}

//===============JavaScript Try Catch===================//
function myFunction() {
  const message = document.getElementById("p01");
  message.innerHTML = "";
  let x = document.getElementById("tryCatch").value;
  try {
    if (x == "") throw "empty";
    if (isNaN(x)) throw "not a number";
    x = Number(x);
    if (x < 5) throw "too low";
    if (x > 10) throw "too high";
  }
  catch (err) {
    message.innerHTML = "Input is " + err;
  }
  finally {
    document.getElementById("tryCatch").value = "";
  }
}

//===============JavaScript Class===================//
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age() {
    let date = new Date();
    return date.getFullYear() - this.year;
  }
}
let myCar = new Car("Ford", 2014);
document.getElementById("carClass").innerHTML =
  "My car is " + myCar.age() + " years old.";

//===============JavaScript Json===================//
let textJson = '{"employees":[' +
  '{"firstName":"John","lastName":"Doe" },' +
  '{"firstName":"Anna","lastName":"Smith" },' +
  '{"firstName":"Peter","lastName":"Jones" }]}';

const obj = JSON.parse(textJson);
document.getElementById("jsonTxt").innerHTML =
  obj.employees[1].firstName + " " + obj.employees[1].lastName;
//===============JavaScript Accessors===================//
const person = {
  fname: "binh",
  lname: "nguyen",
  language: "",
  get name() {
    return this.fname.toUpperCase();
  },
  set lang(lang) {
    this.language = lang.toUpperCase();
  }
}
person.lang = "en";

document.getElementById("getSet").innerHTML = person.language;

//===============JavaScript Class Inheritance===================//
class Car2 {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return "i have a " + this.carname;
  }
}
class Model extends Car2 {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this.present() + " it is a " + this.model;
  }
}
let myCar2 = new Model("ferari", "Mustang");
document.getElementById("showCar").innerHTML = myCar2.show();
// Javascript static method:
class Name {
  constructor(name) {
    this.name = name;
  }
  static hello(x) {
    return "Hello!!" + x.name;
  }
}

let myName = new Name("Ford");

// document.getElementById("showCar").innerHTML = Name.hello(myName);