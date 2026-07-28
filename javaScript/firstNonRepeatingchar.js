//for this we will use 2 steps 1st we we find the char frequency count.
//then in second loop we will find the first  char with value 1 and return the value.

//Sabai bhanda pahila ma object (wa Map) use garera string ko harek character ko frequency count garchu. Tespaxi original string lai feri traverse garchu ra jun character ko frequency 1 xa, teslai immediately return garchu. Yo approach ko time complexity O(n) ra space complexity O(n) hunxa."


const str = "aabbcdde";

function findFirstNonRepeatingChar(str) {
  const obj = {};

  //fist the char freq
  for (const char of str) {
    obj[char] = (obj[char] || 0) + 1;
  }

  //find the 1st non-repeating char
  for(const char of str){
    if(obj[char] === 1){
      return char;
    }
  }
  
}

console.log(findFirstNonRepeatingChar(str)); //c




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