// 階乗（かいじょう

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

function factorial1(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result = result * i;
  }
  return result;
}

console.log(factorial(5));
console.log(factorial1(5));

/*
resultを1で初期化し、2からnまでループして掛け合わせます。時間計算量はO(n)、空間計算量はO(1)です。

Space Complexity
O(1) because we only use a variable to store the result.

Time Complexity

O(n) because we loop from 2 to n.

再帰処理を使って階乗を計算しています。まず、nが0または1の場合は1を返すベースケースを設定しています。それ以外の場合は、nにfactorial(n - 1)を掛けて返します。nを1ずつ減らしながら再帰的に呼び出し、ベースケースに到達すると再帰が終了します。その後、呼び出し元に戻りながら計算が行われます。時間計算量はO(n)、空間計算量は再帰のコールスタックを使用するためO(n)です。

Timi recursion bujhda "function le afailai call garyo" matra nabujha. Main kura chai call stack le previous function calls lai hold garera rakheko huncha, ani base case pugesi reverse order ma return huncha. Yo concept clear bhayo bhane recursion ko dherai coding problems sajilo huncha.   b    

*/
