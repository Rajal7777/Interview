let number = 12344;

console.log(countNumber(number));


function countNumber(num){
  let count = 0;

  while(num > 0){
    count += num %10
    num = Math.floor(num / 10);
  }
  return count;
}

/*
time complexity: O(n) where n is the number of digits in the number
"If n is the number of digits, we convert the number to a string, create an array of its digits, and iterate through all digits using reduce. Each operation is linear, so the overall time complexity is O(n)."

 "The space complexity is O(n) because we create an array of the digits of the number, which requires linear space relative to the number of digits."
space complexity: O(n) where n is the number of digits in the number



*/
function countNumber(num) {
  let number = num.toString();

  return [...number].reduce((acc, num) => acc + Number(num), 0);
}
