// q6.
// let x = 5;
// console.log(x++);  /* here x is still 5 cause it's use first then increment */
// console.log(++x);  /* here it's 7 */

// q7.
// function test() {
//   console.log(a);
//   var a = 10;
// }
// test();   /* it give undefined cause the variable is hoisted  */

// q8.
// debugger
// let a = 10;

// function outer() {
//   let a = 20;
//   function inner() {
//     console.log(a);
//   }
//   return inner;
// }

// const fn = outer();
// fn();
// outer()();
// the result of this code is 20 because first it call outer function a = 20 then it returns the 
// inner function when the outer function finished it remembers the outer function 
// variable due to closures.

// q9. 
// debugger
// for (var i = 1; i <= 3; i++) {
//   setTimeout(() => console.log(i), 2000);
// }

// it prints 4,4,4 because in memory i share same address that's why it print this.
// but in let case it print 1,2,3 because in memory i share different memory address.


// q10. 
// const arr = [1,2,3];

// const result = arr
//   .map(n => n * 2)
//   .filter(n => n > 4)
//   .reduce((a,b) => a + b, 0);

// console.log(result);

// it print 6 


