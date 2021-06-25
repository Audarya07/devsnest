let images = ["./images/guido.jpeg", "./images/Python.png"]

let pair = {
    "./images/guido.jpeg" : "./images/Python.png"
} 

for(let i = 0; i < 16; i++){
    let card = document.createElement("div");
    card.classList.add("card");
    let cards = document.getElementById("cards");
    cards.appendChild(card);
}

let chances = 28;
let cards = document.querySelectorAll(".card");

for(let i = 0; i < 16; i++){
    cards[i].addEventListener("click", (b) => {
        
    })
}