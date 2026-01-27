// project 1 user age checker 
// let age = +prompt("Enter your age: ");
// if (age >= 1 && age < 18){
//     console.log("Minor");
// }else if(age > 18 && age < 30){
//     console.log("Adult");
// }else{
//     console.log("Senior");
// }

// project 2 shopping cart logic 
// 1. total price 
// 2. items above 100
// 3. Discount 10% apply using map
// const cart = [
//   {item: "Book", price: 200},
//   {item: "Pen", price: 20},
//   {item: "Bag", price: 1500}
// ];

// total price 
// let totalPrice = cart.map((item)=>{
//     return item.price;
// }).reduce((acc, currentVal)=>{
//     return acc + currentVal;
// }, 0)

// console.log(totalPrice);

// item above 100
// let filteredArr = cart.filter((item)=>{
//   return item.price >= 100;
// })
// console.log(filteredArr);


// project 3
// TIMER APP 

// let timeLeft = 10;

// let timer = setInterval(() => {
//   if (timeLeft > 0){
//     console.log(timeLeft);
//     timeLeft--
//   }else{
//     console.log("Time's up");
//     clearInterval(timer)
//   }
// }, 1000);

// project 4
// USER MANAGEMENT 
// const users = [
//   {user1 : "sam"},
//   {user2 : "Ahmad"},
//   {user3 : "Uffexx"},
//   {user4 : "ali"},
//   {user5 : "izhan"},
// ]

// for (let user of users){
//   // add user 
//   user.user1 = "samreen";
//   // remove user 
//   delete user.user4;
//   // update user 
//   user.user3 = "tousif"

// }


// console.log(users);

// q21. 
// FINAL CHALLENGE 
// EXECUTION CONTEXT => execution context means humara js code 2 phases me chlta he.
// 1. memory creation phase => is phase me humare jitne bhiii variables hain undefined 
// store kya jaata he aur function ka definition ka store kya jaata he.
// 2. code execution phase => is phase me humare variables me actual value store store hotii 
// aur run hotii he.

//  CALL STACK => call stack ek mechanism hota he jis me js engine track krta he ke abhii 
// hum konse line me he aur konsa function chal rha he.

// EVENT LOOP => event loop aisa he is me kuch cheezain asynchrnus hotii he 
// jo sedha direct run nhii htoo iko kuch time lgta he run hone me 
// to ye web api's me jaati he usme kuch seconds wait krtii he jitna unko time dya jaata he.

//q 22.
// js is single threaded means  ke ye ek time pe sirf ek he kam krta hee 
// non blocking ka mtlb he ye code ko block nhii krta baqii code chlte hain.

// 23. 
// Difference:

// == vs === => == sirf values check krta he aur === values ke sath sath type bhii check 
// krta he.

// var vs let vs const
// var : global aur function scope he isko hum redeclare kr skte hain .
// let : block scope hota he isko redeclare nhii kr skte aur re initialize kr skte hain.
// const : ye bhii block scope hota he isko humm bilkul chnge nhii kr skte 
// na re declare na re initialize 
// stack vs heap memory=>
  // stack  : stack me humare primitive values store hotii he.
// heap : heap me humare non-primitive aur refernce type store hotii he.


