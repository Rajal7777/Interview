
const data =[1,2,3,4,5,6,7]
console.log(chunkArraySlice(data, 3)); 
// Output: [[1, 2, 3], [4, 5, 6], [7]]

/*

English explanation

We create an empty result array. Then we move through the original array by the chunk size. At each step, we use slice() to copy the next group of elements and push that group into the result.

Japanese explanation

空の配列 result を作り、指定した size ずつインデックスを進めます。それぞれの位置で slice() を使って、次のグループの要素を取り出して result に追加します。
*/


/*
Time Complexity: O(N) — The while loop runs N / size times. Inside the loop, slice() copies elements, which scales with the total number of items N.

spaceComplexity O(N)
Space Complexity: O(N) — The function returns a brand new nested structure containing all N original elements.

時間計算量: O(N) — while ループ自体は N / size 回実行されます。ループ内の slice() による要素のコピー処理を合わせると、全体の要素数 N に比例します。

空間計算量: O(N) — 元の要素 N 個すべてを保持する新しい多次元配列を生成して返すためです。
*/
function chunkArraySlice(arr, size) {
  const chunked = [];
  let index = 0;

  // Loop through the array, incrementing by the chunk size each time
  while (index < arr.length) {
    // slice(start, end) copies elements from start up to (but not including) end
    chunked.push(arr.slice(index, index + size));
    index += size;
  }

  return chunked;
}


function chunkArray(arr, size) {
  const result = [];

  while (arr.length > 0) {
    result.push(arr.splice(0, size));
  }

  return result;
}

console.log(
  chunkArray([1, 2, 3, 4, 5, 6, 7], 3)
);