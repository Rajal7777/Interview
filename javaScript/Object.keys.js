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