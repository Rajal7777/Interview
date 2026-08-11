const obj1 = {
  id: 1,
  name: "Hari",
};

const obj2 = {
  name: "Jhon",
  city: "New York",
};

function mergeObj(obj1, obj2) {
  // obj1 properties will naturally overwrite obj2 properties
  return { ...obj2, ...obj1 }; 
}

console.log(mergeObj(obj1, obj2));