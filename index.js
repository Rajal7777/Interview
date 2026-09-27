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