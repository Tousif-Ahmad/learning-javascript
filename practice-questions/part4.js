// q16. 
// let arr = [1,2,2,3,4,4,5];

// let removeDuplicateVal = [...new Set(arr)];

// console.log(removeDuplicateVal);


// 2nd method 
// let arr = [1,2,2,3,4,4,5];
// let removeDuplicateVal = arr.filter((num, i)=>{
//     return arr.indexOf(num) === i;
    
// })
// console.log(removeDuplicateVal);


// q17. 
// let str = "madam";

// let arr = str.split("");
// if (arr.reverse().join("") === str){
//     console.log("It's a palindrome");
// }else{
//     console.log("Not a palindrome");
// }

// q18.
// let arr = [1,23,45,67,100];
// let max = arr[0];

// for(let i = 1; i<arr.length; i++){
//     if (arr[i] > max){
//         max = arr[i];
//     }
    
// }
// console.log(max);

// 2nd approach 
// let arr = [1,23,45,67,100];

// let maxValue = arr.reduce((acc, currentVal)=>{
//     return (currentVal > acc) ? currentVal : acc
// }, arr[0])
// console.log(`maximum value is ${maxValue}`);

// q19. 
// let str = "javascript is very powerful";
// let count = {};

// for(let char of str){
//     if (char === "") continue;
//     if (count[char]){
//         count[char]++;
//     }else{
//         count[char] = 1
//     }
// }
// console.log(count);


