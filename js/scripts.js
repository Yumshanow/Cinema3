const schemeSvg = document.querySelector(".scheme-svg");
const priceTag = document.querySelector(".price-total");

let cost = 500;
let price = 0;
schemeSvg.addEventListener("click", (event) => {
    if(!event.target.classList.contains("booked")) {
    event.target.classList.toggle("active");
    let seats = schemeSvg.querySelectorAll(".active").length;
    price = seats * cost;
    priceTag.textContent = price;
    }
});