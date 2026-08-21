const obj = {
    name: 'Rama',
    country: 'India',
  age: 20
};

//Object.keys() は、JavaScriptのオブジェクトが持つすべてのプロパティ名（キー）を配列として返す静的メソッドです
const keys = Object.keys(obj) 
console.log(keys)  //[ 'name', 'country', 'age' ]

let i = 1;
for(const key of keys){
    console.log(i,key,obj[key])  //1 name Rama 2 country India 3 age 20
    i++
}

Object.keys(obj).forEach(key => {
  console.log(`${key}: ${obj[key]}`); //name: Rama  | country: India | age: 20
});


const obj = { a: 1, b: 2, c: 3 };
const str = JSON.stringify(obj);
console.log(str); // Output: '{"a":1,"b":2,"c":3}'

const str1 = JSON.stringify(obj, null, 2);
console.log(str1); 
// Output:
// {
//   "a": 1,
//   "b": 2,
//   "c": 3
// }

const strCustom = Object.entries(obj).map(([key, value]) => `${key}: ${value}`)
.join(', ');


console.log(strCustom);  // Output: "a: 1, b: 2, c: 3"

/*
The Object.entries() static method returns an array of a given object's own enumerable string-keyed property key-value pairs.
*/

for (const [key, value] of Object.entries(obj)) {
  console.log(`${key}: ${value}`);   // Output: "a: 1", "b: 2", "c: 3"
}

const o1 = {
  name: "rama",
  car: "bmw",
  age: 30,
}

const o2 = {
  name: "hari",
  age: 26,
}

console.log({ ...o1, ...o2 }); // Output: { name: 'hari', age: 26 }

console.log(Object.keys(obj)); // Output: [ 'a', 'b', 'c' ]
console.log(Object.values(obj)); // Output: [ 1, 2, 3 ]

console.log(Object.entries(obj)); // Output: [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]


/*
The Object.assign() static method copies all enumerable own properties from one or more source objects to a target object and returns the modified target object.
The target object is modified directly in place.
Shallow Copy: It only copies property values. If a source value is a reference to an object, it only copies the reference point, not the underlying object.
*/
console.log(Object.assign( o1, o2)); // Output: { name: 'hari', car: 'bmw', age: 26 }


console.log(({a: 1}).hasOwnProperty('a')); // Output: true

