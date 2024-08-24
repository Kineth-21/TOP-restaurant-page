import './style.css';
import {home} from './home.js';
import {menu} from './menu.js';
// import test from "./images/chicken_feet.jpg"

// console.log("You've been served!");
// const content = document.querySelector("#content");

// const myIcon = new Image();
// myIcon.src = test;

// content.appendChild(myIcon);

home();

const homeBtn = document.querySelector("#home");
homeBtn.addEventListener("click", home);

const menuBtn = document.querySelector("#menu");
menuBtn.addEventListener("click", menu);

