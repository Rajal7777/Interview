const number = [1,1,2,2,3,4,5,6,4,5,4,7,8];

/*
This solution removes duplicates by converting the array to a Set, which inherently only keeps unique values. The time complexity is O(n) because creating a Set from an array iterates over the array once. The space complexity is O(n) because a new Set is created.

この解決策は、配列を Set に変換することで重複を削除します。Set は本質的に一意の値のみを保持するためです。時間計算量は O(n) で、配列から Set を作成する際に配列を一度だけ反復するためです。空間計算量は O(n) で、新しい Set が作成されるためです。

*/
const removedDulicates = [...new Set(number)];

console.log(removedDulicates)


/*
English

"This solution removes duplicates by keeping only the first occurrence of each value. The time complexity is O(n²) because filter iterates over the array and indexOf can take O(n) for each element. The space complexity is O(n) because filter creates a new array."

Japanese

「このコードは、各値の最初の出現だけを残すことで重複を削除しています。filterで配列全体を処理し、その中でindexOfによる検索を行うため、時間計算量はO(n²)です。また、filterは新しい配列を作るため、空間計算量はO(n)です。」
*/

const removedDuplicates = numbers.filter((num,index)=> {

  return numbers.indexOf(num) === index
})


const numbers = [1,1,2,2,3,4,5,6,4,5,4,7,8];


/*
This solution removes duplicates by using the reduce method to accumulate unique values. The time complexity is O(n²) because includes checks each element in the accumulator array for every element in the input array. The space complexity is O(n) because a new array is created to store the unique values.

この解決策は、reduce メソッドを使用して一意の値を蓄積することで重複を削除します。includes は入力配列の各要素に対して蓄積配列の各要素をチェックするため、時間計算量は O(n²) です。空間計算量は O(n) で、一意の値を格納するために新しい配列が作成されます。

*/
const removedDuplicates = numbers.reduce((acc, num) => {
  if(!acc.includes(num)){
    acc.push(num);
  }
  return acc;
}, []);

console.log(removedDuplicates)

