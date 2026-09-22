const data1 =["s","t","a","r"];
console.log(reverseInPlace(data1));

/*
Time Complexity: \(O(N)\) — The loop runs \(N/2\) times where \[N\] is the number of elements in the array. This simplifies linearly to \(O(N)\).

Space Complexity: \(O(1)\) — It modifies the array in-place, using a constant amount of extra memory for the pointer tracking variables. 

🇯🇵 計算量:
時間計算量: \(O(N)\) — 配列の要素数を \[N\] とすると、ループは \(N/2\) 回実行されます。これは線形時間 \(O(N)\) に簡略化されます。

空間計算量: \(O(1)\) — 元の配列をその場で（インプレースで）書き換えるため、ポインタ用のわずかな定数メモリしか消費しません。 

*/
function reverseInPlace(arr) {
let left = 0;
let right = arr.length -1;

while(left < right){
[arr[left], arr[right]] = [arr[right], arr[left]];
  left++;
  right--;  
}
  return arr;
}


/*
Time Complexity: \(O(N)\) — The engine's internal implementation visits each element to reverse the order.

Space Complexity: For .reverse(), it is \(O(1)\) because it alters the data in place. For .toReversed(), it is \(O(N)\) because it allocates a shallow copy of length \[N\] to store the new array.

 🇯🇵 計算量:

時間計算量: \(O(N)\) — 内部的なエンジン処理において、配列の全要素の順序を並べ替えるために要素数に比例した時間がかかります。

空間計算量: .reverse() の場合は、その場で書き換えるため \(O(1)\) です。一方、.toReversed() の場合は、長さ \[N\] の新しい配列（浅いコピー）を生成してメモリを確保するため \(O(N)\) となります。 

*/
function reverseInPlace(arr) {
return [...arr].reverse()
}


/*
Time Complexity: \(O(N^2)\) — The for...of loop runs \[N\] times. However, .unshift() is an \(O(N)\) operation because it must re-index every existing element in the target array every time a new item is added. A nested \(O(N)\) inside an \(O(N)\) loop creates quadratic time.

Space Complexity: \(O(N)\) — A separate array instance of size \[N\] is created to store the results. 
*/

function reverseInPlace(array) {
  const arr = [];

  for(const item of array){
  arr.unshift(item)
  }
  return arr;

}