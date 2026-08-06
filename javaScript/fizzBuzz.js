function fizBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzBuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } 
  }
  return 'ok'
}


console.log(fizBuzz(20))

/*
🇯🇵 Japanese Interview Explanation

1 から 100 までループします。

まず 3 と 5 の両方で割り切れる場合は "FizzBuzz" を出力します。

次に 3 だけで割り切れる場合は "Fizz"、5 だけなら "Buzz" を出力します。

それ以外は数字をそのまま出力します。

時間計算量は O(n)、空間計算量は O(1) です。

Time Complexity O(n) ho, kinabhane loop ek choti chalcha.
Space Complexity O(1) ho, kinabhane extra array ya object banaeko chaina.

//If the interviewer asks:

"Can you improve this?"

You can say:

"The algorithm is already optimal. We must visit each number once, so the time complexity cannot be better than O(n). The space complexity is already O(1) because we don't use any extra data structures."
*/