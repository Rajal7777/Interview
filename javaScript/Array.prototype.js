/* 
Implement a custom version of the native Array.prototype.map() method, named myMap.

Your custom method must be attached to the global Array prototype so it can be called on any array instance. It must accept a callback function as its first argument. The callback should receive three parameters: the current item, the current index, and the original array.

Do not use the built-in .map() or .forEach() methods in your solution.
*/

/* In JavaScript, Array.prototype is the core blueprint object that contains all built-in array methods and properties, allowing every array instance you create to automatically inherit and share those functionalities.Instead of copying functions like .map() or .push() into every single array, JavaScript stores them once on Array.prototype to save memory.How it Works: The Prototype ChainWhen you call a method on an array, JavaScript uses a mechanism called the prototype chain 

 Array.prototype?
 Array.prototype is the master blueprint object where JavaScript stores all built-in array methods
 Nearly every common array utility you use daily is defined here:Iteration methods: .map(), .forEach(), .filter(), .reduce().Mutator methods: .push(), .pop(), .splice(), .sort().Accessor methods: .slice(), .includes(), .concat()
*/
/*  */

// Array.prototype {create a custon arrray function available in in whole app}
Array.prototype.newMap = function (callback) {
  //create a brand new empty array to hold our new  transformed array
  const resultArray = [];

  //loop through the orginal array
  for (let i = 0; i < this.length; i++) {
    //check! if the array actually contains a real value at the current index i, rather than an empty unassigned slot
    if(this.hasOwnProperty(i)){

        //array function has 3 return value current item, current index and original array 
        //pass thoes 3 value to the callback returns.
        const transformedValule = callback(this[i], i, this);
        console.log('trArr', transformedValule)
        //push the new value into resultArray
        resultArray.push(transformedValule) //trArr 2 trArr 4 trArr 6 ...

    }
  }

  //return the completely new array
  return resultArray;
};

//TESTING  newMap{cusom method}
const number = [1,2,3,4,5];

const doubled = number.newMap((num) => num * 2);
console.log(doubled)  //[ 2, 4, 6, 8, 10 ]

//Testing with index argument
const indexdStrings = number.newMap((num, index) => `items at ${index}index number ${num} double is ${num * 2}` );
console.log(indexdStrings)  
/*  //[
  'items at 0number1 value is 2',
  'items at 1number2 value is 4',
  'items at 2number3 value is 6',
  'items at 3number4 value is 8',
  'items at 4number5 value is 10'
] */

  console.log(number)  //[ 1, 2, 3, 4, 5 ]




  
/* 
//dobule the number using for loop
const number = [1,2,3];
const dobuled =[];

for (let i = 0; i < number.length; i++){
    dobuled.push(number[i]* 2)
    console.log(i)
}

console.log(dobuled);

*/
