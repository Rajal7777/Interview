const number = [1,2,4,5];


console.log(missing(number));

function missing(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] - arr[i] > 1) {
      return arr[i] + 1;
    }
  }
  return null; // Return null if no missing number is found
}