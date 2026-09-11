let str = "Rajal";

function reverseString(str) {
  return str.split("").reverse().join("");
}
  

console.log(reverseString(str));

/*
English: First, we use split('') to convert the string into an array of characters. Next, we call reverse() to flip the array elements in place. Finally, we use join('') to combine the elements back into a single string.

日本語 (Japanese): まず、split('') を使用して文字列を文字の配列に変換します。次に、reverse() を呼び出して配列の要素をその場で反転させます。最後に、join('') を使用して要素を結合し、1つの文字列に戻します。

Time Complexity: {O}(n)
English: We iterate through the string/array of length n three separate times (split, reverse, join), which simplifies to linear time.

日本語: 長さ n の文字列/配列を3回走査（そうさscan)するため、線形時間せんけい　じかん（一階比例いっかいひれい）の計算量になります。O(n)

Space Complexity:　O(n)
 It requires n space to store the intermediate array of characters.

 分割した文字を格納するため、一時的に n 個の配列用メモリスペースを必要とします。
*/

//Two pointer approach
function reverseString(str) {
const arr = [...str];

let left = 0;
let right = arr.length - 1;

  while (left < right){
   let temp = arr[left];

   arr[left] = arr[right];
   arr[right] = temp;
   left++;
   right--;
  }
  return arr.join("");

}

/*
Two-Pointer Approach:

We first convert the string into an array of characters because
strings are immutable in JavaScript, while arrays are mutable.

Then, we use two pointers:
- `left` starts at the beginning of the array.
- `right` starts at the end of the array.

We swap the characters at these two positions and then move
the pointers toward the center until they meet.

This allows us to reverse the string in place within the array.

Time Complexity: O(n)

We move the two pointers toward each other, so we process
approximately n/2 elements. Since constants are ignored in
Big-O notation, the time complexity is O(n).

Space Complexity: O(n)

We convert the string into an array using `[...str]`, which
requires O(n) additional space to store the characters.
Therefore, the space complexity is O(n).


日本語:

Two-Pointer Approach:

まず、文字列はJavaScriptでは変更できない（immutable）ため、
文字列を変更可能な配列に変換します。

次に、2つのポインタを使用します。
`left` は配列の先頭から、`right` は配列の末尾から開始します。

2つのポインタの位置にある文字を入れ替えた後、
それぞれのポインタを中央に向かって移動させます。
ポインタが中央で出会うまで、この処理を繰り返します。

Time Complexity: O(n)

2つのポインタは中央に向かって移動するため、
約 n/2 回の処理を行います。
Big-Oでは定数を無視するため、時間計算量は O(n) です。

Space Complexity: O(n)

`[...str]` を使って文字列を配列に変換するため、
n 個の文字を保存する追加メモリが必要です。
そのため、空間計算量は O(n) です。
*/

/*
Two Pointer Approach:
We convert the string into an array of characters. Then, we use two pointers, one starting at the beginning (left) and one at the end (right) of the array. We swap the elements at these pointers and move the pointers towards each other until they meet in the middle.

文字列を変更可能な配列に変換します。次に、二つのポインタを使用します。一つは配列の先頭（left）、もう一つは配列の末尾（right）です。これらのポインタの要素を入れ替え、ポインタを互いに向かって移動させ、中央で出会うまで繰り返します。

Time Complexity: O(n)
We iterate through the array of length n once, performing constant-time swaps, resulting in linear time complexity.

ループは配列の長さ n に対して一度だけ実行され、定数時間の入れ替えを行うため、線形時間計算量になります。

Space Complexity: O(n)
We require n space to store the intermediate array of characters.

計算量（スペースコンプレックス）: O(n)
一時的に文字の配列を格納するため、n 個のメモリスペースが必要です。



*/


//Decrementing for loop approach
function reverseStringDecrementing(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

/*
 空の文字列 reversed を初期化します。入力文字列の末尾のインデックス（str.length - 1）から 0 に向かって逆方向にループを回し、各文字を新しい文字列に末尾から追加していきます。

Time complexity: O(n)
ループがちょうど n 回実行されます。そのため、時間計算量は O(n) です。

Space complexity: O(n)
一時的に reversed 文字列を格納するため、n 個のメモリスペースが必要です。



*/