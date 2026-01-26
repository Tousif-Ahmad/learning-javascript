// const timer1 = setTimeout('console.log("sam")', 1000)
// const timer2 = setTimeout('console.log("Hello")', 2000)
// const timer3 = setTimeout(a(), 3000)

// SET INTERVAL
// const timer1 = setInterval('console.log("sam")', 1000)
// const timer2 = setInterval('console.log("Hello")', 2000)
// const timer3 = setInterval(a(), 3000)

// clearTimeout(timer1)
// clearTimeout(timer2)
// clearTimeout(timer3)

// function a(){
//     console.log("Hello world");
// }

// setTimeout(() => {
//     console.log("uffexx");
// }, 2000);

// console.log("Hi 1");

// function hello(){
//     console.log("hello world");
// }

// for (let i = 0; i<=4; i++){
//     console.log(i);
// }
// setTimeout(hello, 0)

// console.log("Hi 2");

// FUNCTION RETURNING FUNCTION

function parent() {
  let a = 4;
  let b = 6;
  function add() {
    console.log(a + b);
  }
  return add;
}
// console.dir(add)
let add1 = parent();
console.dir(add1);
