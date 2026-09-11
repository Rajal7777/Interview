/*

in for loop 
1st step i = 0 it wil run only one time for first before the loop runs.
then the condition if i < arr.length if true it will run the condition inside the {} block.
then it will run i++ or i -- 

const num = [5, 10, 15, 20, 25];

function findMax(arr){
  let max = arr[0];
  console.log(max);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max){
      max = arr[i];
    }
  }
  return max;
}

const result =findMax(num);


console.log(num.length)
console.log(result)

*/
const num = [5, 10, 15, 20, 25];
function findMax(num) {
  if (num.length === 0) return null;
  return Math.max(...num); //Math.max() method returns the largest of zero or more numbers. we use spread operator to pass the array elements as individual arguments to the Math.max() function.
}

const res = findMax(num);
console.log(res);
/*
まず、配列が空であるエッジケースを考慮し、その場合は null を返します。次に、スプレッド演算子（...arr）を使用して配列の要素を展開し、それを Math.max() に引数として渡すことで、最も大きい数値を即座に取得します。

Time complexity O(n)
配列の全 n 個の要素を走査して最大値を探索するため、線形時間かかります。

space complexity O(n)
スプレッド演算子は関数呼び出しのスタック上に配列要素のコピーを展開するため、配列のサイズに比例(ひれい　proportional)したメモリ空間を消費します(しょうひ　consumption)。
*/
