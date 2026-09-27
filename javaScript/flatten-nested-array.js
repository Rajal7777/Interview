// Flattening a nested array using different methods in JavaScript.
/*
JavaScript（ES2019以降）の標準機能(standaed method　ひょうじゅんきのう）である flat() を使います。引数を指定しない場合、デフォルトでちょうど1階層分を平坦化する(へいたんかflatten)ことができます。

*/
const nested = [1, [2, [3, 4], 5], 6];

const res = nested.flat(); //[ 1, 2, [ 3, 4 ], 5, 6 ]

//const res = nested.flat(Infinity); //[ 1, 2, 3, 4, 5, 6 ]

/*
This method in not good for large nested array because it will throw stack overflow error if the nested array is too deep. So we can use recursive solution to flatten the nested array.
the calls stack becomes full and it will throw stack overflow error. So we can use recursive solution to flatten the nested array.

*/
const nested = [1, [2, [3, 4], 5], 6];
//Recursive solution
function flattenArr(arr) {
  let result = [];

  for (const item of arr) {
    //check if item is array
    //Array.array(value) return true if the item is array else false
    if (Array.isArray(item)) {
      //recursively flatten nested array and merge results {if its array pass the the same function}
      result.push(...flattenArr(item));
    } else {
      //if value is primitive/non array type
      result.push(item);
    }
  }

  return result;
}



/*
Time Complexity: O(N).
Space Complexity: O(N). The call stack overhead is gone, safely shifting all memory onto the heap.
*/
function flattenArrIterative(arr) {
  let result = [];

  //copy all the values
  const stack = [...arr];

  while(stack.length > 0){
    const item = stack.pop();
      //if item is an array then push back to the stack
    if(Array.isArray(item)){
      stack.push(...item);
    } else {
      result.push(item);
    }
  }
  //since we take the items from the end we use reverse to restore the original order
  return result.reverse();
}

console.log(flattenArrIterative(nested));


/*
Time Complexity: O(N) because each element is touched exactly once and pushed directly to the final array.
Space Complexity: O(N + D) (O(N) for the final array, O(D) for the recursion call stack).
*/
let demo = [1, [2, [3, 4], 5]];
console.log(demo.pop());


const nested = [1, [2, [3, 4], 5], 6];

function flattenArr(arr, result = []) {
  for (const item of arr) {
    if (Array.isArray(item)) {
      // Pass the same result array reference downward
      flattenArr(item, result); 
    } else {
      result.push(item);
    }
  }
  return result;
}

console.log(flattenArr(nested)); // [1, 2, 3, 4, 5, 6]


const nested = [1, [2, [3, 4], 5], 6];

function flaternArr(arr) {
  return arr.reduce((acc, item) => {
   return acc.concat(Array.isArray(item) ? flaternArr(item) : item);
  }, []);
  
}

console.log(flaternArr(nested));


/*
Time complexity -> O(N2) because we use filter which visit every element and also we use the concat which behind the seen copy all the element
時間計算量 → O(N²) フィルタを使用してすべての要素を走査し、さらにconcatを使用してすべての要素をコピーするためです。


Space Complexity -> O(N)  memory is required to store the newly created flattened array and the temporary intermediate arrays during .concat
空間計算量 → O(N) 新しく作成されたフラット化された配列と、concat処理中に一時的に生成される中間配列を格納するためにメモリが必要です。

*/
console.log(flaternArr(nested))

const numbers = [1, 2, [3, 4], [5, 6]];

const result = [].concat(...numbers);

console.log(result);