export function about(){
    const content = document. querySelector("#content");
    content.textContent = "";

    const about = document.createElement("div");
    about.classList.add("aboutContent");
    about.innerHTML = "You can find us at Ah Tan's Dim Sum 1237 Harmony Street Lotus District, Crescent City, CA 90210" + 
    "<br>" + "Phone: (555) 123-4567" + "<br>" +
    "or you can email us @ AhTanDS@gmail.com" + "</br>" +
    "Opening hours: 8am - 8pm";

    content.appendChild(about);
}