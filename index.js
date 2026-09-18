const numbers = [1,1,2,2,3,4,5,6,4,5,4,7,8];

const removedDuplicates = numbers.reduce((acc, num) => {
  if(!acc.includes(num)){
    acc.push(num);
  }
  return acc;
}, []);

console.log(removedDuplicates)