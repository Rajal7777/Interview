/*
素数とは？

**素数（そすう）**とは、

1より大きく、1とその数自身でしか割り切れない数
「素数とは、1より大きく、1とその数自身でしか割り切れない数です。2からn-1までの数字で割り切れるかを確認します。どれか一つでも割り切れた場合はfalseを返し、最後まで割り切れなければtrueを返します。時間計算量はO(n)、空間計算量はO(1)です。」

*/

function isPrime(n){
  if (n <= 1){
    return false;
  }
  for (let i = 2; i < n; i++){
    if(n % i === 0){
      return false;
    }
  }
  return true;
}

function isPrime(n) {
  if (n < 2) return false;

  for (let i = 2; i * i <= n; i++)
    if (n % i === 0) return false;

  return true;
}



console.log(isPrime(7))
console.log(isPrime(8))
console.log(Math.sqrt(7))