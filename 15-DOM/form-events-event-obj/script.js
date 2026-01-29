const userName = document.querySelector("#userName");
const form = document.querySelector("form")
// userName.addEventListener("input", function(obj){
//     // console.log("user input");
//     console.log(obj.target.value);
// })

// userName.addEventListener("change", function(obj){
//     // console.log("user input");
//     console.log(obj.target.value);
// })


// userName.addEventListener("focus", function(obj){
//     console.log("focus input");
//     console.log(obj.target.value);
// })

// userName.addEventListener("blur", function(obj){
//     console.log("blur input");
//     console.log(obj.target.value);
// })


form.addEventListener("submit",function(e){
    e.preventDefault()
    console.log(e);
})