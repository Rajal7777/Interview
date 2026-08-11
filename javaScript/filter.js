function myFilter(arr, callback) {
  //new array so that we dont modify the original array
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    //if block kine (num) => num > 2 then (3) => 3 > 2 true dinxa ra (1) => 1 > 2 false dinxa so only true value will pass ani will be pushed to newArr

    //yesma simplly hamro callback function (num) => num > 2 num matra hamro parameter ly use garya ca so i ra arr ignore hunca
    //also if we want we can use  i and arr
    //(num, i, arr) => console.log(num, i, arr)  // this will print the value of num, index and the original array
    if (callback(arr[i], i, arr)) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

const number = [1, 2, 3, 4, 5];

const filteredNumbers = myFilter(number, (num) => num > 2);
console.log(filteredNumbers); // Output: [3, 4, 5]

/* ==================================================  */

//wher will will use prototype
/*
->this depends on how the function is called.
-> object before the .newFilter is numbers so inside the normal function this refers to numbers 

//when we run const result = numbers.newFilter((num) => num >2)
here javascript understands that inside the method 
this === numbers

*/
Array.prototype.newFilter = function (callback) {
  const newArr = [];

  //here this will point to the object which is calling newFilter function
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      newArr.push(this[i]);
    }
  }

  return newArr;
};

const numbers = [1, 2, 3, 8, 7, 5];
const evenNumber = numbers.newFilter((num) => num % 2 === 0);

console.log(evenNumber); //[2,8]


/*
Time and Space Complexity

If the input array has n elements:
time complexiy will be O(n) { because we will visit each element in the array}

SPACE COMPLEXITY
in the worst case every element passes the condition
we create a new array to store the matching elements

*/