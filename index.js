function foo() {
  this.value = 100;
}


/*
. console.log(foo.value); // undefinedWhy: In JavaScript, functions are objects, but this.value = 100 inside foo is not a static property on the function object itself. That line of code only runs when foo is invoked as a constructor (using the new keyword). Since we are just inspecting the function object foo directly without invoking it, value does not exist on it yet, returning undefined.
*/
console.log(foo.value); // undefined because 'value' is not a static property of the function 'foo'


/*
Why: Every function in JavaScript has a default object property called prototype. By explicitly writing foo.prototype.value = 200, you are adding a shared property to that prototype object. This property will be shared across all future instances created by foo.
*/
foo.prototype.value = 200; // setting a property 'value' on the prototype of 'foo'

console.log(foo.prototype.value); // 200 because 'value' is now defined on the prototype of 'foo'

const foo1 = new foo(); // creating a new instance of 'foo'

/*
Why: When you invoke const foo1 = new foo();, JavaScript does three things under the hood:
1. It creates a brand-new empty object (foo1).
2. It binds this inside the constructor function to this new object.
3. It sets foo1's internal prototype (__proto__) to point to foo.prototype
*/
console.log(foo1.value); // 100 because 'value' is an instance property of 'foo1'


