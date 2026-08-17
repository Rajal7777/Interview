/*
NaN = not a number 
example: "rama" * 200 {invalid number} => NaN
typeof NaN => number


*/

let a = 5;
console.log(Number.isNaN(a))  //false
console.log(!Number.isNaN(a))  //true

console.log(Object.is(a,NaN))  //false

console.log(typeof NaN)  //number 'number'
console.log(typeof typeof NaN)  //string 'string'