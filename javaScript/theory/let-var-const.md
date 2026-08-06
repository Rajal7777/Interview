1. What is the difference between let, const, and var?
✅ English Answer

var is function-scoped and can be redeclared and reassigned.

let is block-scoped. It cannot be redeclared in the same scope, but it can be reassigned.

const is also block-scoped, but it cannot be reassigned after initialization.

In modern JavaScript, I mainly use const. If a value needs to change, I use let. I rarely use var.

🇯🇵 Interview Answer

var は関数スコープで、再宣言と再代入ができます。

let はブロックスコープで、再代入はできますが、同じスコープで再宣言はできません。

const もブロックスコープですが、一度代入すると再代入できません。

普段は基本的に const を使い、値が変わる場合だけ let を使います。var はほとんど使いません。





2. What is the difference between == and ===?
✅ English Answer

== compares values after type conversion.

=== compares both value and type without type conversion.

I always use === because it helps prevent unexpected bugs.

== は型変換(かたへんかん)をして比較します。

=== は型変換をせず、値と型の両方を比較します。

予期しないバグを防ぐため、普段は === を使っています。

🇳🇵 Roman Nepali Explanation

Yo answer ko meaning:

== le compare garnu aghi type convert garcha.
=== le type convert gardaina. Type ra value duitai compare garcha.
Unexpected bug aauna nadina ma sadhai === use garchu.


3. What is a Closure?
✅ English Answer

A closure is a function that remembers variables from its outer(parent) scope even after the outer function has finished executing.

Closures are commonly used for data privacy, callbacks, and event handlers.

🇯🇵 Japanese Interview Answer

クロージャとは、外側の関数が実行した後でも、その変数を保持できる（ほうじ）retention関数のことです。

データの保持やコールバック、イベント処理などでよく使われます。

🇳🇵 Roman Nepali Explanation

Yo bhaneko:

Closure bhaneko yesto function ho jun le bahira ko function sakkepachi pani tyo function ko variables samjhirakcha.

Yo data private rakhna, callback banauna ra event handler haruma dherai use huncha.               

5. What is the difference between map() and forEach()?
✅ English Answer

forEach() executes a function for each element but does not return a new array.

map() returns a new array after transforming each element.

I use map() when I need a new array, and forEach() when I only need to perform an action.
🇯🇵 Japanese Interview Answer

forEach は配列の各要素に対して処理を行いますが、新しい配列は返しません。

map は各要素を変換して、新しい配列を返します。

新しい配列が必要な場合は map を使い、処理だけ行いたい場合は forEach を使います。