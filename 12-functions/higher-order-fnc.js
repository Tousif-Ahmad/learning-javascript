
// debugger
// function a(b){
//     console.log(b);
//     b();
// }
// a({userName:"sam", age : 23});
// a([10,20,30,40]);

// console.dir(a);

// function sayHi(){
//     console.log("HIiiiiiiiiii");
// }
// a(sayHi);


// callback function => jab bhii kisi function ke andr koi doosra function pass kiya jaaye 
// as an argument to jis function ko pas kya jaa rha he woh callback function aur jis function 
// andr pass kya jaa rha he woh higher order function function keh lata he ...


// debugger
function a(b){
    console.log(b);
    b();
}

function sayHello(){
    console.log("hello");
}

a(sayHello)