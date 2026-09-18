const number = [1,1,2,2,3,4,5,6,4,5,4,7,8];

const removedDulicates = [...new Set(number)];

console.log(removedDulicates)


const removedDuplicates = numbers.filter((num,index)=> {

  return numbers.indexOf(num) === index
})


const numbers = [1,1,2,2,3,4,5,6,4,5,4,7,8];

const removedDuplicates = numbers.reduce((acc, num) => {
  if(!acc.includes(num)){
    acc.push(num);
  }
  return acc;
}, []);

console.log(removedDuplicates)

/*
English

"This solution removes duplicates by keeping only the first occurrence of each value. The time complexity is O(n²) because filter iterates over the array and indexOf can take O(n) for each element. The space complexity is O(n) because filter creates a new array."

Japanese

「このコードは、各値の最初の出現だけを残すことで重複を削除しています。filterで配列全体を処理し、その中でindexOfによる検索を行うため、時間計算量はO(n²)です。また、filterは新しい配列を作るため、空間計算量はO(n)です。」
*/