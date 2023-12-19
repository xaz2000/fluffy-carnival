/* 

Instructions: when a user clicks on one of the colored dots, the background color of the entire page changes to match that dot. You should not need to change any HTML or CSS. 

Hint: Classes for each color have already been defined in the CSS tab.

*/

// 1 -- Select each button

// let grayBtn = document.getElementById("grayButton");
let grayBtn = document.querySelector("#grayButton");
let whiteBtn = document.querySelector("#whiteButton");
let yellowBtn = document.querySelector("#yellowButton");
let blueBtn = document.querySelector("#blueButton");


// 3 -- Write an event handler to change the color of the page when each circle is pressed. Hint: you may need to use style.backgroundColor and style.color

function switchToGray() {
  let body = document.querySelector("body");
  body.style.backgroundColor = "gray"
  // body.classList.add('gray-theme')
}

function switchToWhite() {
  let body = document.querySelector("body")
  body.style.backgroundColor = "white"
  // body.classList.add("white-theme")
}

function switchToYellow() {
  let body = document.querySelector("body")
  body.style.backgroundColor = "yellow"
  // body.classList.add("yellow-theme")
}

function switchToBlue() {
  let body = document.querySelector("body")
  body.style.backgroundColor = "blue"
  // body.classList.remove("blue-theme", "white-theme", "gray-theme")
  // body.classList.add('blue-theme')
}

// 2 -- Add an event listener to each circle
grayBtn.addEventListener("click", switchToGray);
whiteBtn.addEventListener("ckick", switchToWhite);
yellowBtn.addEventListener("ckick", switchToYellow);
blueBtn.addEventListener("ckick", switchToBlue);

