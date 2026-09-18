


console.log(isAnagram("listen", "silent"));

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  const sortedStr1 = str1.split('').sort().join('');
  const sortedStr2 = str2.split('').sort().join('');
  return sortedStr1 === sortedStr2;
}

console.log("hello".split("").sort())




/*
if (str1.length !== str2.length)→ で2つ目の文字列の長さを取得します。2つの文字列の長さが違う場合 即時falseを返します。

「まず、2つの文字列の長さを比較します。長さが違う場合はアナグラムではないのでfalseを返します。次に、空のオブジェクトを作って、1つ目の文字列に含まれる各文字の出現回数をカウントします。その後、2つ目の文字列を1文字ずつ確認して、対応するカウントを1つずつ減らします。もし1つ目の文字列に存在しない文字があればfalseを返します。最後まで問題がなければtrueを返します。」

時間計算量はO(n)です。2つの文字列をそれぞれ1回ずつ走査するためです。空間計算量はO(n)です。文字の出現回数を保存するために、最大でn個の文字をオブジェクトに保存する可能性があるからです。
*/



function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  //文字の出現(しゅつげんapperance) 回数を管理するために、空のオブジェクトを作ります。
  const count = {};

  //str1 の文字を1文字ずつ取り出す
  for(const char of str1){
    //その文字の現在のカウントがあればそれを使い、なければ0を使う
    count[char] = (count[char] || 0) + 1
  }

  //順番ではなく、同じ文字が同じ回数あるかを確認していることです。
  for(const char of str2){
    if(!count[char]){
      return false;
    }

    count[char]--
  }
  return true;

}


function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const map = new Map();

  for (const char of str1) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  for (const char of str2) {
    if (!map.has(char)) {
      return false;
    }

    map.set(char, map.get(char) - 1);
  }

  return true;
}