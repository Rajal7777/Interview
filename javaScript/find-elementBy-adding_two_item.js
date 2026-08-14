const arr = [1, 2, 3, 4, 5];

const result = 7;
/*
we we take j as i +  1 so that we will compare the next element
if j = 0 garyo vany 1+ 1 hunxa which we dont want

time complexity is O(n^2) because we have two nested loops
space complexity is O(1) 
Yo function vitra khali variable haru use vaka xan:i: Euta number index matrai ho (Takes constant memory).j: Yo pani euta number index matrai ho (Takes constant memory).Input array ko size jati sukai thulo (n = 10 vaye pani or n = 10,000,000 vaye pani), hami lai i ra j thah पाउन extra thau thapnu pardaina. Computer ma limited ra fixed memory use hunchha.Tesile, input ko size le memory badhdaina, jaslai hami Big O Notation ma O(1) vanxau.
*/
function findPair(arr, result) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === result) {
        return [arr[i], arr[j]];
      }
    }
  }

  return "not found";
}

console.log(findPair(arr, result));
//console.log(findPair([1, 2, 3, 4, 5], 9));


/* ===================================================== */

/*
Time  → O(n) one loop
Space → O(n) variable seen is storing the values in the array
every loop ma we need to store the value in the seen set so we need to use O(n) space


1)complement = target - num ->yo block scope vitra ca so every loop ma ret hunxa
1st loop ma complement = 9 - 1 = 8
2nd loop ma complement = 9 - 2 = 7

2)complement is alredy in the seen set so we return the pair otherwise add the num to the set
//new set() only stores unique values so if we have duplicate values in the array it will only store one value


*/

function findPair(arr, target) {
  const seen = new Set();

  for (const num of arr) {
    const complement = target - num;

    if (seen.has(complement)) {
      return [complement, num];
    }

    seen.add(num);
  }

  return "not found";
}

console.log(findPair([1, 2, 3, 4, 5], 9));

/* ===================================================== */


/*
new Map()
The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) 

Time  → O(n)
Space → O(n)
Because it gives you O(n) time and directly gives the indexes.

*/

function twoSum(arr, result){
  const map = new Map();

  for (let i = 0; i < arr.length; i++) {
    const complemnt = result -arr[i];

    if(map.has(complemnt)){
        return [complemnt, arr[i]];
    }
    map.set(arr[i], true);
  }
  return "not found";
  }

  console.log(twoSum([1, 2, 3, 4, 5], 7));



