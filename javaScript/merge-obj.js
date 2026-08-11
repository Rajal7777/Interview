//question is we need to merge two object but if the key repets the we keep the first object key value and ignore the second object key value

const obj1 = {
  id: 1,
  name: "Hari",
};

const obj2 = {
  name: "Jhon",
  city: "New York",
};

function mergeObj(obj1, obj2) {
  // copy the 1st obj
  const mergedObj = { ...obj1 };
  for (let key in obj2) {
    //we will only add the key value pair if the property is not present in the mergedObj
    if (!mergedObj.hasOwnProperty(key)) {
      mergedObj[key] = obj2[key];
    }
  }
  return mergedObj;
}

console.log(mergeObj(obj1, obj2));

/* =============================================== */

function mergedObj(obj1, obj2) {
  const mergedObj = {};

  //get the key[value] of obj1
  for (const key in obj1) {
    mergedObj[key] = obj1[key];
  }

  for (const key in obj2) {
    //if the key is not present in the mergedObj then merged[key] will be undefined and we will add the key value pair from obj2 to mergedObj
    if (mergedObj[key] === undefined) {
      mergedObj[key] = obj2[key];
    }
  }

  return mergedObj;
}

console.log(mergedObj(obj1, obj2));

/*
It starts by shallow-copying obj1 using the spread syntax to avoid mutating the original input. It then iterates through the keys of obj2 using a for...in loop and uses hasOwnProperty to check if a key is already present in mergedObj. If the key doesn't exist, it adds it from obj2.The overall time complexity is $O(A + B)$ and space complexity is $O(A + B)$, where $A$ and $B$ represent the number of keys in each object. In modern JavaScript, we could also write this more concisely as Object.assign({}, obj2, obj1) or use Object.hasOwn() for safer property checks.

まずスプレッド構文（...）を用いて obj1 の浅いコピー（シャローコピー）を作成し、元データを変更しないようにします。次に、for...in ループで obj2 のキーを順に確認し、hasOwnProperty で mergedObj にまだ存在しないキーのみを追加します。時間計算量・空間計算量ともに $O(A + B)$（$A, B$ は各オブジェクトのキー数）となります。実務や最新のES仕様においては、Object.assign({}, obj2, obj1) と記述するか、より安全な Object.hasOwn() を用いた実装を検討します。

*/


function mergeObj(obj1, obj2) {
  // obj1 properties will naturally overwrite obj2 properties
  return { ...obj2, ...obj1 }; 
}

const obj = {
  id: 1,
  name: "Hari",
};

const newObj = {};

for (const key in obj) {

  if (newObj[key] === undefined) {
    console.log(`the key ${key} is notinside newObj`);
    newObj[key] = obj[key];
  }
  console.log(newObj); //1st time { id: 1 }  2nd time { id: 1, name: 'Hari' }
}
