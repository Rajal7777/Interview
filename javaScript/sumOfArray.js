const nums = [2, 4, 6, 8];

function sum(nums) {
  let s = 0;
  for (let i = 0; i < nums.length; i++) {
    s += nums[i];
  }
  return s;
}
console.log(sum(nums));//20
console.log(nums.length);//4


const nums = [2, 4, 6, 8];

function sum(nums) {
  return nums.reduce((acc,num) => (
    acc + num
  ),0)
}


//it still works evene the value is in negative
const nums = [10,-2,5,-3];

function sum(nums) {
  return nums.reduce((acc, num) => acc + num, 0);
}
console.log(sum(nums)); //20
console.log(nums.length); //4



//in case there is a string inside the nums then how to check and validate then numbers only inside it
const nums = [1, "2", 3];

// 1. Filter out non-numbers and calculate the sum
const totalSum = nums
  .filter(item => typeof item === 'number' && !isNaN(item))
  .reduce((sum, current) => sum + current, 0);

console.log(totalSum); // Output: 4
/*
Strict Type Check: Use typeof item === 'number' to ensure the value is a primitive number type.Safety Check: Combine it with !Number.isNaN(item) because JavaScript considers NaN (Not a Number) a number type.Coercion Check: Use !isNaN(item) if you want to allow string numbers like "2" to count as valid numbers
*/


const nums = [1,"2",3];

//here we will use the map method to convert every element to a number then use the reduce method for sum

function sum(nums) {
  //1st convert every num to numbers
  const checkedNums = nums.map((num) => Number(num));
 return checkedNums.reduce((acc, current) => acc + current, 0);

}
console.log(sum(nums)); //20

