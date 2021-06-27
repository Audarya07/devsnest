// let images = ["./images/guido.jpeg", "./images/dennis.jpeg", "./images/bjarnes.jpeg", "./images/james.jpeg", "./images/brendan.jpeg", "./images/yukihiro.jpeg", "./images/larry.jpeg", "./images/rasmus.jpeg"]


let images = ["Audi", "Pranjal", "Rajat", "Venkya", "Rohan", "Kunal", "Saurabh", "Tanmay"]

images = [...images, ...images]

for(let i = 0; i < 16; i++){
    let card = document.createElement("div");
    card.classList.add("card");

    let front = document.createElement("div");
    front.classList.add("front");

    let back = document.createElement("div");

    let rand = Math.floor(Math.random()*(16-i));
    // back.innerHTML = "<img src='"+images[rand]+"'/>"
    back.innerHTML = "<h2>" + images[rand] + "</h2>"

    card.appendChild(front);
    card.appendChild(back);

    document.getElementById("cards").appendChild(card);
    back.classList.add("back");
}

let clicked;
let chances = 28;
let cards = document.getElementsByClassName("card");

for(let card of cards){
    card.addEventListener("click", (b) => {
        chances--;
        document.querySelector("span").innerHTML = chances;
        if(clicked){
            setTimeout(() => {
                if(card.lastChild.innerHTML != clicked.lastChild.innerHTML){

                }
            }, 500);
        }
    })
}