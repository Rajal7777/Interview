const numbers = [10, 5, 20, 8, 20, 15];


function secondLargest(arr) {
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (const num of arr) {
    if(num > largest){
        secondLargest = largest;
        largest = num;
    } else if (num > secondLargest && num < largest   ) {
        console.log('inside loop', num);
        secondLargest = num;
    }
  }
  return secondLargest;
}


console.log(secondLargest(numbers)); // Output: 15


const numbers = [10, 5, 20, 8, 20, 15];

function secondLargest(arr) {
  // 1. Remove duplicates using a Set
  const uniqueNumbers = [...new Set(arr)];

  // 2. Check if we have at least two numbers to compare
  if (uniqueNumbers.length < 2) {
    return null; // Or return undefined / -Infinity depending on preference
  }

  // 3. Sort the unique numbers in descending order (largest to smallest)
  uniqueNumbers.sort((a, b) => b - a);

  // 4. Return the element at index 1 (the second item)
  return uniqueNumbers[1];
}


console.log(secondLargest(numbers)); // Output: 15