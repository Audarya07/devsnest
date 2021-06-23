for(let i = 0; i < 36; i++){
    let cell = document.createElement("button");
    cell.classList.add("cell");
    let seats = document.getElementById("seats");
    seats.appendChild(cell);
}

let booked = 0;
let remaining = 36;
let btns = document.querySelectorAll("button");
let stats = document.querySelectorAll("span");

for(let i = 0; i < 36; i++){
    btns[i].addEventListener("click", (b) => {
        if(b.target.className == "cell"){
            b.target.className = "booked";
            remaining--;
            booked++;
            stats[0].innerHTML = booked;
            stats[1].innerHTML = remaining;
        }
        else{
            b.target.className = "cell";
            remaining++;
            booked--;
            stats[0].innerHTML = booked;
            stats[1].innerHTML = remaining;
        }
    })
}