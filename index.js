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
/* ===================================================== */
