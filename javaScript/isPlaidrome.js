/*
前から読んでも後ろから読んでも同じ文字列（回文）であるかどうかを判定する関数を実装してください。
*/

const str = "Madam    ";

function isPalindrome(s) {
  // 1. Clean the string
  s = s.toLowerCase().trim();

  let left = 0;
  let right = s.length - 1;

  // 2. Meet in the middle approach
  while (left < right) {
    if (s[left] !== s[right]) {
      return false; // Stop immediately if a mismatch is found
    }
    left++;
    right--;
  }
  return true; // Return true if all characters matched
}

console.log(isPalindrome(str)); // Outputs: true

/*
str = str
      .toLowerCase()
      .replace(/[^a-z0-9]/g,"");

      Advantages
Doesn't create another array
Doesn't create another string
Uses only two variables
More memory efficient

 2つのポインタを初期化します。left をインデックス 0 に、right を末尾のインデックスに配置します。while ループ内で両端の文字を比較し、もし一致しなければ即座に false を返します。一致していれば、ポインタを中央に向かって移動させ（left++, right--）、交差するまで繰り返します。不一致がなくループが終了すれば true を返します。

 Time complexity is O(n) for the two-pointer approach.
 English: Linear time complexity as we potentially check each character once.
 日本語: 各文字を一度ずつ確認する可能性があるため、線形時間計算量です。

 space complexity is O(1) for the two-pointer approach.
 English: Highly optimized. Unlike string reversal, we do not create any new arrays or strings; we only store two integer pointers.
 非常に最適化されています。文字列反転とは異なり、新しい配列や文字列を一切生成せず、2つの整数ポインタを保持するだけなので定数空間で済みます。


*/

const str2 = "madam";

function isSame(str) {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}

console.log(isSame(str2));

/*
Interview Explanation 🇯🇵
->文字列を split() で配列に変換します。
->reverse() で順番を逆にします。
->join() で文字列に戻します。
->その後、厳密等価演算子(げんみつ　どうか　えんざんし）（===）を使って元の文字列と反転した文字列を比較し、一致すれば true を返します。

元の文字列と比較し、同じなら回文かいぶんです。
Time complexity is O(n).
English: Reversing the string takes linear time, and comparing the two strings takes up to n steps, which simplifies to O(n).
日本語: 文字列の反転に線形時間がかかり、2つの文字列の比較に最大 n ステップかかるため、全体の計算量は O(n) になります。

Space Complexity:O(n)
English: Reversing the string creates a new array and a new string, which requires linear space.
日本語: 文字列の反転により新しい配列と新しい文字列が作成されるため、空間計算量は線形になります。

時間計算量は O(n)、空間計算量も O(n) です。

Roman Nepali
->Yo solution ma
->Paila string lai array ma convert gare.
->Tespachi reverse gare.
->Ani feri string banaye.
->Last ma original string sanga compare gare.
->Same bhayo bhane palindrome ho.

Disadvantages
Creates a new array with split()
reverse() modifies that array
join() creates a new string
Uses extra memory
*/

/*
FINAL ANSWER
🇯🇵 How to explain this in an interview

最初は split と reverse を使う方法もありますが、追加のメモリが必要になります。

より効率的な方法として Two Pointer を使いました。

この方法では追加の配列を作らないため、空間計算量は O(1) になります。

🇳🇵 Roman Nepali Meaning

Yo bhaneko:

"Paila split ra reverse use garne solution pani cha. Tara tyo solution ma extra memory chaincha.

Tesko satta ma ma Two Pointer use garchu.

Kinabhane yo method ma extra array banaunu pardaina.

Tesaile Space Complexity O(1) huncha, jun optimized solution ho."
Write the simple solution first (shows you can solve the problem quickly).
Say, "I can optimize this."
Write the Two Pointer solution.
Explain why it's better (same time complexity, but lower space complexity and early exit on mismatches).
*/
