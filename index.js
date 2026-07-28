//const nested = [1, [2, [3, 4], 5], 6];

//const res = nested.flat();  //[ 1, 2, [ 3, 4 ], 5, 6 ]

//const res = nested.flat(Infinity); //[ 1, 2, 3, 4, 5, 6 ]

/*
This method in not good for large nested array because it will throw stack overflow error if the nested array is too deep. So we can use recursive solution to flatten the nested array.
the calls stack becomes full and it will throw stack overflow error. So we can use recursive solution to flatten the nested array.

const nested = [1, [2, [3, 4], 5], 6];
//Recursive solution
function flattenArr(arr) {
 let result = [];

 for(const item of arr){
  //check if item is array
  //Array.array(value) return true if the item is array else false
  if(Array.isArray(item)){
  //recursively flatten nested array and merge results {if its array pass the the same function}
  console.log('if block',...flattenArr(item))
  result.push(...flattenArr(item))
  }else{
    //if value is primitive/non array type
    console.log('else block',item)
    result.push(item);
    
  }
 }

 return result;
}


console.log(flattenArr(nested))


*/

//for deeply nested array we can use iterative solution to flatten the nested array.
console.log("hey");
const nested = [1, [2, [3, 4], 5], 6];
//1st loop 6 will go to the else block.2nd will be [1, [2, [3, 4], 5] from if block then ...arr will unpack it becomes -> 1,[2,[3,4],5 that will be again puhsed back to the coppied arr.

function flattenArr(arr) {
  //copy the arr so that we dont mutate the original array
  const copiedArr = [...arr];

  const result = [];

  while (copiedArr.length > 0) {
    const next = copiedArr.pop();

    if (Array.isArray(next)) {
      //push items back to the copiedArr to continue unpacking
      copiedArr.push(...next);
      console.log("from if block", next);
    } else {
      result.push(next);
      console.log("from else block", next);
    }
  }
  return result;
}

console.log(flattenArr(nested));


let demo = [1, [2, [3, 4], 5]];
console.log(demo.pop())