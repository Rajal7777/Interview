/*
const clonedObj = JSON.parse(JSON.stringify(originalObj));
console.log(clonedObj);

const clonedObj1 = structuredClone(originalObj);
console.log(clonedObj1);

*/

const originalObj = {
  name: "Alish",
  address: {
    city: "Kathmandu",
    geo: { lat: 27.7172, lng: 85.324 },
  },
};

function cloneObject(obj) {
  //first check if it is obj or not
  //in case return matra garyo vany primitive value "Alish" key hunda yo obj hoina so return hunca return hunda javascript ly undefined value return garca
  //so pretive value like Alish, Kathmandu hunda return obj same obj nai return garny
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  //conditional initailize if array then empty array else empty obj
  const clone = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    //this checks if the proprerty actually belongs to the obj itself rather then being inherited through its prototype
    if (obj.hasOwnProperty(key)) {
      clone[key] = cloneObject(obj[key]);
    }
  }

  return clone;
}

console.log(cloneObject(originalObj));

/*
Time complexity: O(n), and space complexity: O(n), including the cloned object and recursion stack.

🇳🇵 Roman Nepali Explanation

"Yo function le object ko deep clone banaucha. Pahila value object ho ki primitive ho check garcha. Primitive value or null bhaye directly return garcha. Object bhaye empty object, array bhaye empty array create garcha. Tespachi for...in bata each property ma loop garcha. hasOwnProperty() le property directly object ko ho ki inherited ho check garcha. Finally clone[key] = cloneObject(obj[key]) ma recursion use garera nested object lai pani separately clone garcha. Tesaile original ra cloned object ko nested references different huncha."

まず、typeofを使って値がオブジェクトかどうかを確認します。プリミティブ値やnullの場合は、そのまま値を返します。

次に、配列の場合は空の配列、オブジェクトの場合は空のオブジェクトを作成します。

その後、for...inループを使って各プロパティを確認します。hasOwnProperty()を使って、そのプロパティがオブジェクト自身のプロパティかどうかを確認します。

そして、clone[key] = cloneObject(obj[key])の部分で再帰処理を行います。ネストされたオブジェクトがある場合は、同じ関数をもう一度呼び出して、そのオブジェクトも別のオブジェクトとしてコピーします。

時間計算量はO(n)で、すべてのプロパティを一度ずつ確認します。空間計算量もO(n)で、コピー用の新しいオブジェクトと再帰処理のためのメモリが必要になります
*/

//why we use recurcion :- We use recursion here because the object itself can contain another object, and that nested object can contain another object again.
//再帰処理を使う理由は、オブジェクトの中にネストされたオブジェクトがあり、その深さが事前に分からない可能性があるためです。

//DEEP CLONE & SHALLOW CLONE
/*




*/

/* ============================================================== */

const originalObj = {
  name: "Alish",
  address: {
    city: "Kathmandu",
    geo: { lat: 27.7172, lng: 85.324 },
  },
};

const copy = originalObj;
copy.name = "Ramu";
console.log(copy.name); //Ramu it will change the originalobj why because both copy and originalobj point the same object in the memory
/*
user ────────┐
             ↓
        ┌─────────────┐
        │ name        │
        │ address     │
        └─────────────┘
             ↑
copy ────────┘
*/

const shallowCopy = { ...originalObj };
console.log(shallowCopy);
console.log(shallowCopy === originalObj); //false
console.log(shallowCopy.address === originalObj.address); //true

//why ??
/*
user
 ↓
┌─────────────────┐
│ name            │
│ address ────────┼──────┐
└─────────────────┘      ↓
                    ┌──────────────┐
                    │ city         │
                    │ Kathmandu    │
                    └──────────────┘
                         ↑
┌─────────────────┐      │
│ name            │      │
│ address ────────┼──────┘
└─────────────────┘
 ↑
copy
shallow copy only copy the outer layer but nested obj is not copied {instead the obj reference is copied}

*/

//Real world example like react
/*
const user = {
  name: "Alish",
  address: {
    city: "Kathmandu"
  }
};

//here we want to update the nested obj
const user = {
  name: "Alish",
  address: {
    city: "Kathmandu"
  }
};
here we're creating new objects at each level
This is basically manual immutable updating and is closely related to shallow-copy concepts.

You don't always need a full deep clone in React. Usually, you copy only the levels you're changing.

Shallow clone

Shallow clone le outer object matra new banaucha.

Deep clone

Deep clone le outer object ra nested objects sabai ko separate copy banaucha.

"A shallow clone creates a new outer object but shares references to nested objects, while a deep clone creates independent copies of nested objects as well."
*/
