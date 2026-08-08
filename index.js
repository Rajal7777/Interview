const numbers = [1, 2, 4, 7, 8, 11];

function findEvenNumbers(arr) {
  return arr.filter(num => num % 2 === 0);
}

console.log(findEvenNumbers(numbers)); //[ 2, 4, 8 ]

function evenNumbers(arr) {
  let count = 0;

  for(const num of arr){
    if(num % 2 === 0){
      count++;
    }
  }

  return count;
}

console.log(evenNumbers(numbers));  //3
/*
配列を一つずつ確認し、2 で割り切れるかどうかを判定します。

2 で割り切れる場合は、カウントを 1 増やします。

すべての要素を確認した後、偶数の個数を返します。

時間計算量は O(n)、空間計算量は O(1) です。

*/