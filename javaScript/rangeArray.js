console.log(generateRange(1, 5));


/*
“I can generate a range array by starting from the given start value and incrementing until the end value. I store each value in a result array and return it. The time complexity is O(n) because I generate each element once, and the space complexity is O(n) because the returned array contains n elements.”

指定された開始値から終了値までループして、それぞれの値を配列に追加することで、連続した数値の配列を作成できます。各要素を一度ずつ生成するため、時間計算量はO(n)です。また、n個の要素を持つ配列を作成するため、空間計算量もO(n)です。

*/
function generateRange(start, end){
  let array = [];
  for (let i = start; i <= end; i++){
    array.push(i);
  }
  return array;
}