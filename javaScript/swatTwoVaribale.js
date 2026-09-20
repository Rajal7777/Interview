/*
a の値が上書きされて消えないよう、一時的に temp という変数に値を退避させます。

English:

The time complexity is O(1) because we perform a constant number of operations. The space complexity is O(1) because we use only one temporary variable.

Japanese:

時間計算量はO(1)です。常に一定回数の処理を行うためです。空間計算量(くうかん けいさん りょう)もO(1)です。追加で使用する変数が1つだけだからです。
*/

let a = 5;
let b = 10;

let temp = a;
a = b;
b = temp;

console.log('a:', a, 'b:', b)

/*
Swapping two variables using array destructuring.
English

We can also swap two variables using array destructuring. The values on the right-hand side are evaluated first and then assigned to the variables on the left-hand side.

Japanese

配列の分割代入を使って、2つの変数を簡単に入れ替えることもできます。右辺の値を先に評価して、その値を左辺の変数に代入します。

English:

The time complexity is O(1) because we perform a constant number of operations. The space complexity is O(1) because we use only a constant amount of extra space.

Japanese:

配列の分割代入を使って2つの変数の値を入れ替えます。
時間計算量はO(1)です。常に一定回数の処理を行うためです。空間計算量(くうかん けいさん りょう)もO(1)です。追加で使用する変数がほとんどないからです。
*/
let a = 5;
let b = 10;

[a, b] = [b, a];

console.log('a:', a, 'b:', b)
