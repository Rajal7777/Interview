//indexOf()Yo character pahilo choti kata bhetiyo vanera index dinxa.

//indexOf(c) will give the index from the start  ->4 count from a
//Yo character last choti kata bhetiyo vanera index dinxa.

//lastIndexOf(c) will give the index count from the last(back) -> 5 count from e

const str = "aabbcdded";

function findFirstNonRepeatingChar(str) {
  for (const char of str) {
    if (str.indexOf(char) === str.lastIndexOf(char)) {
      return char;
    }
  }
 
}

console.log(findFirstNonRepeatingChar(str)); //c


const str2 = "aabbcdded";
console.log(str2.indexOf('b'))  //2
console.log(str2.indexOf('c'))  //4 found 1st time at 4 index

console.log(str2.lastIndexOf('a'))  //1
console.log(str2.lastIndexOf('c'))  //4  found last time at index 4