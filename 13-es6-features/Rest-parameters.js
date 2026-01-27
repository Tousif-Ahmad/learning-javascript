// REST PARAMETERS 
const nums1 = [1,2,3,4];

function add(...nums){
    console.log(nums);
    let result = nums.reduce((acc, currentVal)=>{
        return acc + currentVal;
    }, 0)
    console.log(result);
}

add(...nums1)