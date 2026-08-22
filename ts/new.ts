function t(){
    return {x: 10, y: "pana"}
}


type P = ReturnType<typeof t>  //type P = { x: number;y: string;}

type Person = { age: number; name: string; alive: boolean };
type Age = Person["name"];

type P2 = Person[keyof Person]; //type P2 = number | string | boolean


const MyArray = [
  { name: "Alice", age: 15 },
  { name: "Bob", age: 23 },
  { name: "Eve", age: 38 },
];

type Person1 = typeof MyArray[number]; //type Person1 = { name: string; age: number; }
type Age1 = typeof MyArray[number]["age"]; //type Age1 = number