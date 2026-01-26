// debugger
// let sayHi = function(){
//     console.log("Hii");
// }
// sayHi();


// function a(){
//     console.log("sam");
// }
// a();

// call stack 
// debugger
// function one(){
//     console.log("One");
//     two();
// }
// function two(){
//     console.log("Two");
//     three();
// }
// function three(){
//     console.log("Done");
// }
// one();



// LEXICAL SCOPE => function apne parent scope ke variable ko access kr skta he.
// function outer(){
//     let a = 10;
//     function inner(){
//         console.log(a);
//     }
//     inner();
// }
// outer();


// higher order function and callback 
// debugger
// function greet(cb){
//     cb();
// }
// greet(function(){
//     console.log("hello");
// })

// debugger
// function greet(name){
//     console.log(name);
// }
// greet("sam")


// sayHello();
// var sayHello = function () {
//   console.log("Hello");
// };

// function returning function and closures 
// debugger
// function outer(){
//   return function inner(){
//     console.log("hello from inner..");
//   };
// }

// let fn = outer();
// fn();

// debugger

// for (var i = 1; i <= 3; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }

for (let i = 1; i <= 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
