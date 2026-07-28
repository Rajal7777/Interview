const john = {
  age: 67,
  getAge: function() {
    return this.age;
  }
}

console.log(john.getAge()); // 67

const unbounded = john.getAge;
console.log(unbounded()); // undefined

const bound = john.getAge.bind(john);
console.log(bound()); // 67

const newObj = {
  age: 10
}
const bounded = john.getAge.bind(newObj);
console.log(bounded()); // 10



//in case of arrow function, they inherit this from their lexical scope, so this will not refer to the object itself but to the outer scope. In this case, it will refer to the global object (window in browsers) or undefined in strict mode.

/*
const john1 = {
  age: 67,
  getAge() { // Shorthand method syntax
    return this.age;
  }
}

// Call the method directly
console.log(john1.getAge()); // 67

*/

const jho1 = {
  age: 67,
  getAge: () => {
    return jho1.age;
  }
}

console.log(jho1.getAge()); // 67