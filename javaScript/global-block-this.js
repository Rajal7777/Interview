
/*
function sayHi(){
  console.log(name);  //undefined
  console.log(age);   //reference error why because we can not access the variable before initialization;

  var name = 'rama';
  let age = 20;
}

sayHi();

//In this case name variable with the var keyword is hoisted{mean taken to the top during compiling but undefined or by default value of undefined until it reach to line we define the variable}

//but let and const are hoisted but  not initialized like var.they are not accessable before the line we declare them{initialize}. This is called temporal dead zone.
when we try to access the variable before they are declared we get the reference error

*/



//here the variable declared with var has the global scope,because the event queue in javaScript, the setTimeout callback function is called after the loop has been executed.the loop run 1st and due to var is global scope the value at last is 3 and when the console.log is runned it has value 3.

//Main idea 
//1)incase of var it is global socpe so at 1st var i = 0; 
// 2)setTimeout does not run its code immediately. It pushes the callback functions into a queue to run after the main code finishes
//3)javaScript binds the value 0 to the callback function 

//var is global scope. var creates only one single variable shared by the whole loop. final value of i = 3 so 3 is printed 3 time

//let is blocked so each loop creates a new i . 1st time i = 0; 2nd i = 1; 3rd i = 2;

/*

for (var i = 0; i < 3; i++){
  setTimeout(()=> console.log(i), 1)  //output 3 3 3 
}


//here let and const has block scope so 
for (let i = 0; i < 3; i++){
  setTimeout(() => console.log(i), 1)   //output 0 1 2
}

*/

//here perimeter is arrow function so this points to the window obj which is undefined 
//then 2*Math.P(3.21525) * undefined -> output NaN not a number
const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius,
};

console.log(shape.diameter()); //output 20
console.log(shape.perimeter()); //output Nan{not a number}

console.log(typeof NaN) //number





//arrow function has not their own this. this will not point to the user object.It will points to the global scope(window in browsers)
const user = {
  name: "Alice",
  greet: () => {
    console.log(this.name); // `this` points to the window, not 'user'
  }
};

const timer = {
  seconds: 0,
  start() {
    setInterval(() => {
      // Success! `this` is inherited from the start() method, which points to 'timer'
      this.seconds++; 
      console.log(this.seconds);
    }, 1000);
  }
};

timer.start(); // Output: 1, 2, 3...



