export function home() {
    const content = document.querySelector("#content");
    content.textContent = "";

    const introduction = document.createElement("div");
    introduction.classList.add("homeContent");
    introduction.textContent = "Welcome to Ah Tan's Dim Sum, where you can find rich traditions of Chinese cuisine. Our hand crafted dim sum dishes offer a taste of heritage in every bite.";

    content.appendChild(introduction);
}