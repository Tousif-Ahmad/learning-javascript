// practice questions 
console.log(Boolean(""));
console.log("5" === 5);
let a = 0;
if (a){
    console.log("yes");
}else{
    console.log("No");
}

// B 
let age = 23;
if (age >= 18){
    console.log("Allowed");
}else{
    console.log("Not allowed");
}

let num = 10;
if (num % 2 === 0){
    console.log("Even");
}else{
    console.log("Odd");
}

// console.log(+null);
console.log(!!"hello");
console.log(null === undefined);
console.log(null == undefined);

// switch 
const dayNumber = 2;
switch(dayNumber){
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day number..");
}

let x = 5;
let y = x;
y = 10;
console.log(x);