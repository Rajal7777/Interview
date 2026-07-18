/*

let c = {greeting: 'hey'};

let d;

d = c;
c.greeting = 'Hello';
console.log(d.greeting)  //hello

//In javaScript all objects interact by reference when setting them equal to.
//both a and d have same reference. they both pint to {greeting: 'hey'} obj in the memory

*/

/*

let a = 3;
let b = new Number(3);
let c = 3;

console.log(typeof new Number(3))  //object
console.log(a == b);  //true
console.log(a === b); //false
console.log(b === c); //false
console.log(3 === 3)  //true

//new Number is a built in function it is obj .
// (==) only check the value inside 
//(===) it strictly checks the value and type both

*/


/*

function bark() {
  console.log('Woof!');
}

bark.animal = 'dog';
console.log(bark()) //output 'Woof! undefined

//javaScript are objects so nothing happen when you log this.
//js will simply ignore bark.animal => console.log(undefined)

*/

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const lydia = new Person('Lydia', 'Hallie');
const sarah = Person('Sarah', 'Smith');  //this become to the global obj undefined

console.log(lydia);  // {firstName: "Lydia", lastName: "Hallie"}
console.log(sarah);  // undefined 

//in js using new keyword this refers to the new empty object we create.

