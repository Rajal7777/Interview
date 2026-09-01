const sentence = "I am learning JavaScript programming";

function longestWord(sentence) {
  const newWord = sentence.split(" ");

  let longest = "";
  for (const word of newWord) {
    if (word.length > longest.length) {
      longest = word;
    }
  }

  return longest;
}

console.log(longestWord(sentence));

//まずsplit()を使って文章を単語ごとの配列に変換します。その後、各単語の長さを比較して、最も長い単語を変数に保存します。

/*
sentence.split(" ") gray paxi sentence lai 
["I", "am", "learning", "JavaScript", "programming"]

*/