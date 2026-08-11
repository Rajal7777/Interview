/*

let num = 565657;

/*
1st loop
565657 / 10 = 56565.7
Math.floor(56565.7) = 56565
count = 0 + 1 -> 1
*/
/*
//Number ko lenght ko lagi
let count = 0;
while (num > 0) {
    //we will use Math.floor to round  down the number and remove the decimal part
    num = Math.floor(num / 10);
    count++;
}
console.log(count);

time complexity: O(n) -> why we need to loop throgh all the numbers one by one to get the length of the number

space complexity: O(1) -> we are using only one variable to store the count of the number
*/

//in case the number is zero
let num = 0;

//num zero ko case ma while loop run hundaena so hami if condtion use garcau
let count = 0;
if (num === 0) {
  count = 1;
}

while (num > 0) {
  //we will use Math.floor to round  down the number and remove the decimal part
  num = Math.floor(num / 10);
  count++;
}

//case of negative number
const number = -12345;
//we will use Math.abs to get the absolute value of the number
const absoluteNumber = Math.abs(number);
console.log(absoluteNumber); // Output: 12345

/*
decimal = 小数点小数点以下しょうすうてんいか
まず、count を0に初期化します。その後、while ループを使って、数字が0になるまで処理を繰り返します。

Math.floor(num / 10) によって、数字を10で割って小数点以下を切り捨てることで、1桁ずつ右側みぎがわ｜の数字を取り除いています。

計算量は、桁数をdとするとO(d)です。各桁を1回ずつ処理するためです。

空間計算量はO(1)です。追加の配列などを使用せず、一定数の変数だけを使用しているためです。

Interview ma yo point ekdam important cha: Big-O ma fixed number ko variables count gardaina; input badhda memory badhcha ki badhdaina hercha. 2 variables, 5 variables, 10 fixed variables bhaye pani O(1) nai huncha.
*/

/* -------------------------------------------- */

//reverse the number with out converting it to string
let numberToReverse = 12345;
let reversedNumber = 0;

while (numberToReverse > 0) {
  //get the last digit of the number
  //まず、% 10を使って元の数字から最後の1桁を取得します。
  let lastDigit = numberToReverse % 10;

  //reversedNumber * 10 + lastDigitとすることで、新しい数字を右側に追加することができます。
  //multiply the reversed number by 10 and add the last digit to it
  reversedNumber = reversedNumber * 10 + lastDigit;

  //remove the last digit from the original number
  numberToReverse = Math.floor(numberToReverse / 10);
}
console.log(reversedNumber); // Output: 54321




//isPlindrome

let numberToCheck = 12321;
let reversedNum = 0;
let originalNum = numberToCheck;

while (numberToCheck > 0) {
  let lastDigit = numberToCheck % 10;
  reversedNum = reversedNum * 10 + lastDigit;
  numberToCheck = Math.floor(numberToCheck / 10);
}
console.log(reversedNum === originalNum); // Output: true

console.log(numberToCheck);  //0

let num1 = 12345;

let numreversed = String(num1).split("").reverse().join("")
console.log(numreversed)

console.log(typeof numreversed)
let n = Number(numreversed)
console.log(n)
console.log(typeof n)