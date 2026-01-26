// debugger
// console.log(a);
// let a = "tousif";

// // function declaration 
// sayHi();
// function sayHi(){
//     console.log("Hii");
// }

// // function expression   
// const sayHi = function(){  /* this is also called anonymous function  */
//     console.log("hiii");
// }
// sayHi();


// GLOBAL SCOPE VS LOCAL SCOPE 
// const userName = "sam";
// let userAge = 21;
// var a = 8;

// function add(){
//     const x = 5;
//     const y = 6;
//     console.log(x + y);
// }
// add();

// console.log("program Ended!");



// LEXICAL AND BLOCK SCOPE 
const username = 'Anurag'
let userAge = 25
var a = 50

// function add() {
// //   debugger
//   const username = 'Akash'
//   const x = 5
//   const y = 8
//   console.log(x + y)
//   console.log(username)
// }

function subtract() {
  // debugger
  const x = 15
  const y = 18
  let z = 40;
  console.log(x - y)
  console.log(username)

  function child(){
    const childName = "golu";
    console.log(childName);
    console.log(z);

    function granChild(){
      let granChildName = "Molu";
      console.log(granChildName);
    }
    granChild();
  }
  child();
}

// add()
subtract()

console.log('Program Ended')