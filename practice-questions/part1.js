// q1. console.log(typeof null);
// type of null is  object because in the starting days of javascript 
// there was a bug and it still there that's why the it shows object.

// q2. 
// let name = "uffexx"
// let a = [];
// let b = [];

// console.log(a == b);
// console.log(a === b);

// both gives false because in memory both arrays have different address it doesn't matter 
// what inside the array.

// q3. 

// const user = {
//   name: "Ali",
//   age: 20
// };

// Object.freeze(user);

// user.age = 25;

// console.log(user.age);

// so here we use obj.freeze() so we couldn't change, update or delete the user object properties 
// or values here it gives the original value 20.



// q4. 
// difference explain karo :
// 1. undefined => jab hum variable declare kr ke use initialize nhiii
// krte to undefined ata he.
// let a;
// console.log(a); /* undefined  */ 

// 2. not defined => jab hum declare nhii kr ke seedha log krde to usme time 
// not defined ata he.
// console.log(b);  /* b is not defined  */

// 3. null => null tab ata he jab hum khud intentionally apnii mrzii se null 
// value asign krte hain tab ata he.
// let score = null;
// console.log(score);  /* null */

// q5.
// console.log(Boolean("false")); /* true because its truthy value  */
// console.log(Boolean(0));  /* false its falsy value */
// console.log(Boolean([]));  /* true cause it's truthy value */


