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


*/




const str2 = "madam";

function isSame(str) {
const str2 = str.toLowerCase().trim();

return str2 === str2.split('').reverse().join('') ? true : false;
}

console.log(isSame(str2))

/*
Interview Explanation 🇯🇵

文字列を split() で配列に変換します。

reverse() で順番を逆にします。

join() で文字列に戻します。

元の文字列と比較し、同じなら回文です。

時間計算量は O(n)、空間計算量も O(n) です。

Roman Nepali

Yo solution ma

Paila string lai array ma convert gare.

Tespachi reverse gare.

Ani feri string banaye.

Last ma original string sanga compare gare.

Same bhayo bhane palindrome ho.

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