// FUNCTIONS

// function myIntro(userName="admin", profession, age) {   /* function definition  */
//   console.log("Hii");
//   console.log(`my name is ${userName}`);
//   console.log(`I am a ${profession}`);
//   console.log(`I am ${age} years old.`);
// }
// myIntro("uffexx", "software engineer", 23)  /* function calling */
// console.log("********************");
// myIntro("sam", "graphic designer", 21);



// RETURN KEYWORD 
// function addTwoNumbers(num1, num2){
//     // return 2 + 2
//     return num1 + num2
// }
// // debugger
// let ans = addTwoNumbers(10,20);
// console.log(ans);


// EXECUTION CONTEXT 
// debugger
// const userName = "sam";
// const userAge = 23;

// function sayHi(){
//     console.log("Hii");
// }


// CALL STACK => call stack ek mechanism hota he jis ke through js engine 
// track krta he ke abhii woh kis line pe pohncha he aur kis function ke andr he. 
// debugger

// sayHi()

// const username = 'Anurag'
// const userAge = 25

// function sayHi() {
//     const a = 14
//     const b = 12
//     add(7, 9)
// }

// function add(x, y) {
//     kuchhBhi()
//     return x + y
// }

// function kuchhBhi() {
//     console.log('Kuchh bhi');
// }

debugger
function introduceMe(){
    console.log("Hi my name is sam");
    introduceMe()
}
introduceMe()
console.log('Program Ended');