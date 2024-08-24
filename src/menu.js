import xlb from './images/xlb.jpg';
import siewMai from './images/siew_mai.jpg'
import hargao from './images/har_gao.jpg'
import dumplings from './images/dumplings.jpg'
import custardBao from './images/custard_bao.jpg'
import chickenFeet from './images/chicken_feet.jpg'

export function menu(){
    const content = document.querySelector("#content");
    content.textContent = "";

    const images = [xlb, siewMai, hargao, dumplings, custardBao, chickenFeet];
    const dishNames = ["Xiao Long Bao", "Siew Mai", "Har gao", "Dumplings", "Custard Bao", "Chicken Feet"];
    const prices = ["$10", "$3", "$3", "$3", "$4", "$5"];
    for(let i = 0; i < 6; i++){
        const dish = document.createElement("div");
        dish.classList.add("dishContainer");

        const img = document.createElement("img");
        img.classList.add("dishImg")
        img.src = images[i];

        const dishName = document.createElement("p");
        dishName.innerHTML = dishNames[i] + "<br>" + prices[i];

        dish.appendChild(img);
        dish.appendChild(dishName);

        content.appendChild(dish);
    }
}