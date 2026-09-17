
/*
日本語の解説 (Japanese Explanation)準備:
 小文字と大文字の母音を含んだ文字列 vowels と、数を数えるための変数 count（初期値 0）を用意します。

ループ: for...of ループを使って、入力された文字列の文字（char）を1文字ずつ順番に取り出します。

条件分岐: vowels.includes(char) で、現在の文字が母音のリストに含まれているかを確認します。一致した場合は count を1増やします。

*/
function countVowels(str) {
 let vowel = 'aeiou';
 let count = 0;

 for(const char of str){
  if(vowel.includes(char)){
    count += 1;
  }
 }

 return count;
}

console.log(countVowels("Hello World"))  // Output: 3


function countVowel(str){
   // Matches all 'a', 'e', 'i', 'o', 'u' globally (g) and case-insensitively (i)
  const match = str.match(/[aeiou]/gi) || [];

  return match.length;
}

console.log(countVowel('hello world'))

/*
1.RegEx Matching: str.match(/[aeiou]/gi) searches the entire string. The /g flag means "global" (find all matches), and /i means "case-insensitive" (ignore upper/lowercase differences).
正規表現(せいきひょうげん)のマッチング: str.match(/[aeiou]/gi) を使って文字列全体から母音(ばいんvowel)を探します。/g フラグは「文字列全体からすべて探す」、/i フラグは「大文字と小文字を区別しない」という意味です。

2.Result Array: .match() returns an array of all found vowels. If it finds "JavaScript", it returns ['a', 'a', 'i'].
結果の配列: .match() は見つかったすべての母音を配列として返します。例えば "JavaScript" の場合は ['a', 'a', 'i'] が返されます。





*/