/*
const obj1 = { name: "Alice", details: { age: 25 } };
const obj2 = { name: "Alice", details: { age: 25 } };

console.log(obj1 == obj2); //false
console.log(obj1 === obj2); //false

*/

/*

the reason why it is false is that (==) only checks  reference  equality (shallow equal) for objects.

since obj1 & obj2 are stored in different memory addresses == returns false

console.log(Object.keys(obj1))  //[ 'name', 'details' ]
*/

//A recursive function in JavaScript is a function that calls itself inside its own code block to solve smaller versions of the same problem

function deepEqual(obj1, obj2) {
  //check if they are the exact same primitive or reference,they are equal
  if (obj1 === obj2) return true;

  //null or non-obj type {typeof null = object so}
  if (
    obj1 === null ||
    obj2 === null ||
    typeof obj1 !== "object" ||
    typeof obj2 !== "object"
  )
    return false;

  //Get the keys of both objects
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  //if they dont have the same number of keys
  if (keys1.length !== keys2.length) return false;

  //recursively check every key
  //loop through every key inside obj1
  for (const key of keys1) {
    //check if key exists in the secound obj
    console.log("key", keys1, "value", obj1[key]); //name Rama | country India ...

    //The includes() method of Array instances determines whether an array includes a certain value among its entries, returning true or false as appropriate.
    //Basic Use: [1, 2, 3].includes(2); // true

    //check if has same key
    if (!keys2.includes(key)) return false; //key2.includes(name) check for  1st loop

    //recursive compare values of the keys
    //chek! if has same value
    if (!deepEqual(obj1[key], obj2[key])) return false;
  }

  return true;
}

const a = { name: "Rajal", detail: { age: 29 } };
const b = { name: "Rajal", detail: { age: 29 } };
const c = { name: "Ujwal", detail: { age: 29 } };

console.log(deepEqual(a, b)); //true
console.log(deepEqual(a, c)); //false
