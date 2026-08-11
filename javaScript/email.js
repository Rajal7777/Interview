const email = 'suwal@gmail.com';

function getEmail(email){
const [first, last] = email.split('@');
return first[0] + '*'.repeat(first.length - 1) + '@' + last;

}

console.log(getEmail(email));  //s****@gmail.com


function getEmailSlice(email) {
  const [username, domain] = email.split('@');
  const maskedUser = username[0] + ''.padStart(username.length - 1, '*');
  return `${maskedUser}@${domain}`;
}

console.log(getEmailSlice('suwal@gmail.com')); // s****@gmail.com

/*
具体的には、まず split('@') を使ってメールアドレスをユーザー名とドメイン名に分割し、分割代入で取得します。次に、ユーザー名の先頭1文字目を取り出し、残りの文字数分だけ repeat() メソッドを用いて *（アスタリスク）を生成して結合します。最後にドメイン名をもう一度結合して返します。例えば 'suwal@gmail.com' の場合、出力は 's****@gmail.com' となります。

timeComplexity: O(n) で、n はメールアドレスの長さです。
spaceComplexity: O(n) で、n はメールアドレスの長さです。
why coz we use array to store first and last parts of the email to store the split values, and we also create a new string for the masked email address.

*/