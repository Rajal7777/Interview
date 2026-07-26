"use strict";
//const foo: never = 1; //error TS2322: Type '1' is not assignable to type 'never'.
/*  */
function parseJson(json) {
    return JSON.parse(json);
}
const data = parseJson('{"name": "John", "age": 30}');
if (typeof data === 'object' && data !== null && 'name' in data && 'age' in data) {
    console.log(data); //{ name: 'John', age: 30 }
}
