const nums = [1,"2",3];

//here we will use the map method to convert every element to a number then use the reduce method for sum

function sum(nums) {
return nums.reduce((acc,current) => {
 return current === 'number' ? acc + current : Number(current) + acc
})

}
console.log(sum(nums)); //20

