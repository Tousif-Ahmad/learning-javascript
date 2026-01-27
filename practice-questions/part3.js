// q11.
// const user = {
//   name: "Sam",
//   greet: () => {
//     console.log(this.name);
//   },
// };
// user.greet();


// it prints nothing because arrow function doesn't have this keyword.

// q12. 
// difference between 
// 1. foreach => it doesn't return new array it changes the original array.
// 2. map => it changes the original array and return new array it transform.
// 3. filter => it also changes the original array and return new array it filter 
// out values based on something is true or false.
// 4. reduce => it also changes the original array and returns a single value. we uses 
// it for calculations, etc.

// q13. 
// console.log([] + []); /* "" cause it converts both to string using toString() method */
// console.log([] + {});  /* [object object]  */
// console.log({} + []);  /* [object object] */
// console.log({} + {});  /* [object object] */

// q14
// function sum(a, b = a) {
//   return a + b;
// }
// console.log(sum(5));   /* it give 10  */


// q15. 
// const a = {x:1};
// const b = {...a};
// b.x = 2;

// console.log(a.x);  /* it give 1 cause it copies using shallow copy  differenet address in memory*/

// q16. 

