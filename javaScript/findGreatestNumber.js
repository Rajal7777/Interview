/*

in for loop 
1st step i = 0 it wil run only one time for first before the loop runs.
then the condition if i < arr.length if true it will run the condition inside the {} block.
then it will run i++ or i -- 

const num = [5, 10, 15, 20, 25];

function findMax(arr){
  let max = arr[0];
  console.log(max);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max){
      max = arr[i];
    }
  }
  return max;
}

const result =findMax(num);


console.log(num.length)
console.log(result)

*/
const num=[5, 10, 15, 20, 25];
function findMax(num){
  return Math.max(...num);  //Math.max() method returns the largest of zero or more numbers. we use spread operator to pass the array elements as individual arguments to the Math.max() function.
}

const res = findMax(num);
console.log(res)
