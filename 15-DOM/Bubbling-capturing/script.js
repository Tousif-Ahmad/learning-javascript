const green = document.querySelector(".green");
let pink = document.querySelector(".pink");
let blue = document.querySelector(".blue");
// window.addEventListener("click", function(){
//     console.log("6. window eventlistener");
// },true)
// document.addEventListener("click", function(){
//     console.log("5. document eventlistener");
// },true)
// document.body.addEventListener("click", function(){
//     console.log("4. body eventlistener");
// },true)
// green.addEventListener("click", function(){
//     console.log("3. green eventlistener");
// },true)
// pink.addEventListener("click", function(){
//     console.log("2. pink eventlistener");
// },true)
blue.addEventListener("click", function(e){
    e.stopPropagation()
    console.log("1. blue eventlistener");
},true)