//const foo: never = 1; //error TS2322: Type '1' is not assignable to type 'never'.

/*  */


 

function parseJson(json: string): unknown {
  return JSON.parse(json);
}

const data = parseJson('{"name": "John", "age": 30}');

if(typeof data === 'object' && data !== null && 'name' in data && 'age' in data) {
  console.log(data); //{ name: 'John', age: 30 }
}

let x: never;
x = 10; //error TS2322: Type '10' is not assignable to type 'never'.


//Type never
/*
some functions never return a value.
because after throw,the function stops immediately
1)starts function -> throw error -> program exists function 
It never reaches a return
*/

function throwError(): never {
  throw new Error(); //after throw, the function stops immediately and never reaches a return statement
}

function infiniteLoop(): never {
  while (true) {
    // Infinite loop, never returns
  }
}