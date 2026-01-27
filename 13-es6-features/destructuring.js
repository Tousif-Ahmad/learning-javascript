// DESTRUCTURING IN JS 
// console.log("Destructuring");

let colors = ["red", "green", "yellow", "black", "white"];

const [color1, color2,,color4] = colors;
// console.log(color1);
// console.log(color2);
// console.log(color4);


const user = {
    name : "sam",
    age :23,
    address:{
        city : "chitral",
        state : "Kpk",
    }
}


// const {name:username, age:userage} = user;
// console.log(username);
// console.log(userage);

// const {address} = user;
// console.log(address);
// const {city} = address;
// console.log(city);

const {address:{city}} = user;
console.log(city);
