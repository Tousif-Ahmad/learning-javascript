let nameElem = document.querySelector(".name-tag");
let ageELem = document.querySelector(".age-tag");

let nameInput = document.querySelector(".nameInput");
let ageInput = document.querySelector(".ageInput");

// nameElem.textContent = localStorage.getItem("myName");

// nameInput.addEventListener("input", function(e){
//     localStorage.setItem("myName", e.target.value)
//     nameElem.textContent = localStorage.getItem("myName");
// })
// ageELem.textContent = localStorage.getItem("myAge");

// ageInput.addEventListener("input", function(e){
//     localStorage.setItem("myAge", e.target.value)
//     ageELem.textContent = localStorage.getItem("myAge");
// })

let myData = {
    name : "",
    age : "",
}

nameInput.addEventListener("input", function(e){
    myData.name = e.target.value;
    localStorage.setItem("myData", JSON.stringify(myData))
})
ageInput.addEventListener("input", function(e){
    myData.age = e.target.value;
    localStorage.setItem("myData", JSON.stringify(myData))
})