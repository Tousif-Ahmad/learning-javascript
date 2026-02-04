//PROMISE =>  A promise is a container for a value
// that will come in the future.

// let resolveBtn = document.querySelector(".resolveBtn");
// let rejectBtn = document.querySelector(".rejectBtn");
// // const p = new Promise((resolve, reject) => {
//   resolveBtn.addEventListener("click", () => {
//     resolve("promise resolved");
//   });

//   rejectBtn.addEventListener("click", () => {
//     reject("promise rejected");
//   });
// });

// p.then((data) => {
//   console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })/* .finally(()=>{
//     console.log("finally");
// }) */

// debugger
// function greet(callback) {
//   callback();
// }

// greet(() => {
//   console.log("Hello");
// });


// function greet(callback) {
//   callback();
// }

// greet(() => console.log("Hello"));
// greet(() => console.log("Hi"));
// greet(() => console.log("Assalamualaikum"));



const promise = new Promise((resolve, reject) => {
  // async work

  let success = false;
  if (success) {
    resolve(data);
  } else {
    reject(error);
  }
});

