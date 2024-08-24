import './style.css';
import {home} from './home.js';
// import test from "./images/chicken_feet.jpg"

// console.log("You've been served!");
// const content = document.querySelector("#content");

// const myIcon = new Image();
// myIcon.src = test;

// content.appendChild(myIcon);

const homeBtn = document.querySelector("#home");
homeBtn.addEventListener("click", home);

home();

