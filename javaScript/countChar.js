/*

const str = 'apple';
function countChr(str){
  const obj= {};

  for(const char of str){
    console.log('char', char)  // a p p l e
    obj[char] = (obj[char] || 0) + 1;
    console.log(obj[char])  //1 1 2 1 1 
  }

  return obj;
}

const res = countChr(str);

console.log(res);  //{ a: 1, p: 2, l: 1, e: 1 }
 // || operator if the value in the left is falsy then use right value

 //obj obj[char] -> obj(["a"]  that does not exist on the obj so it returns 0 then 0 + 1  becomes 1)
 //obj(["a"] = 1)  => { a: 1} 

const obj = {
  name: 'Rajal',
}

console.log('from obj', obj["name"]) //Rajal


*/

/*
USING REDUCE METHOD
const str = 'apple';

function countChar(str){
  //reduce method can be only use in array so we convert str to array also we can use str.split('') to convert str to array
  return [...str].reduce((acc,char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});  //here we give the accumulator initial value as empty object
}


const res = countChar(str);
console.log(res)

*/

const str = "apple";

function countChar(str) {
  const obj = {};

  for (const char of str) {
    if (obj[char]) {
      obj[char] += 1;
      console.log('if block',char, obj[char], obj);
    } else {
      obj[char] = 1;
      console.log('else block',char, obj[char], obj);
    }
  }

  return obj;
}
const res = countChar(str);

console.log(res);
/*
else block a 1 { a: 1 } 1st loop  -> 1st time obj['a'] is not there so goes to if block
else block p 1 { a: 1, p: 1 } 2nd
if block p 2 { a: 1, p: 2 } 3rd  => obj['P'] exist p: 1 -> so stays in if block 1 + 1 -> 2
else block l 1 { a: 1, p: 2, l: 1 } 4th
else block e 1 { a: 1, p: 2, l: 1, e: 1 } 5th
{ a: 1, p: 2, l: 1, e: 1 }
 */