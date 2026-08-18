console.log([] === []);  //false because they are two different array objects in memory

console.log([] == ![]);  //true because they are two different array objects in memory

console.log({} === {});  //false because they are two different object instances in memory

/*
here under the hood, javascript apply .toString to {}  and "[object Object]" + "[object Object] vayara [object Object][object Object]"  and for [] it apply .toString to [] and "" + "" = ""
*/

console.log({} + {}); // "[object Object][object Object]" because the + operator converts both objects to strings and concatenates them


console.log([] + []); // "" because the + operator converts both arrays to strings and concatenates them, resulting in an empty string

console.log({} + []); // "[object Object]" because the + operator converts the object to a string and concatenates it with the empty string representation of the array

console.log([] + {}); // "[object Object]" because the + operator converts the array to a string and concatenates it with the string representation of the object

console.log({}.toString()); // "[object Object]" because the toString method of an object returns the string "[object Object]"

console.log([].toString()); // "" because the toString method of an array returns an empty string for an empty array