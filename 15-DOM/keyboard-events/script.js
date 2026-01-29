const h1 = document.querySelector("h1");
let input = document.querySelector("input")
h1.addEventListener("click", function(e){
    console.log(e);
})

window.addEventListener("keypress", function(e){
    console.log(e.key);
})