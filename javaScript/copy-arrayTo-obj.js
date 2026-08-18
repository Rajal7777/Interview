const arr = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
];

const obj = {};

for (const item of arr) {
  obj[item.id] = item.name;
}

console.log(obj);  //{ '1': 'John', '2': 'Jane' }

const obj2 = arr.reduce((acc, item) => {
  acc[item.id] = item.name;
  return acc;
}, {});


console.log(obj2);  //{ '1': 'John', '2': 'Jane' }


/*
for...of loop: Yo Imperative Programming ho. Yesma computer lai step-by-step sikauna parcha (khali object banau, loop chalau, value thap)
.reduce() method: Yo Declarative/Functional Programming ho. Yesma computer lai k garne bhannu bhanda pani, input lai output ma kasari transform (badalne) 
bhanera direct function bata bhanincha.
*/