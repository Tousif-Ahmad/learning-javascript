// let card = document.querySelector(".card");


// function sayHi(){
//     console.log("Hii");
// }

// function sayHi(){
//     console.log("hello world");
// }

// card.onclick = sayHi;

// card.addEventListener("click", sayHi)
// card.addEventListener("click", function(){
//     console.log("second Hii");
// })


let container = document.querySelector(".container")
let card = document.querySelector(".card");
let count = 1;

function addCard(){
    let newCard = document.createElement("div");
    newCard.classList.add("card");
    newCard.textContent = count;
    count++;
    container.append(newCard)
}

card.addEventListener("click", addCard)
