
const data =[1,2,3,4,5,6,7]

function chunkArray(arr, size) {
  const result = [];

  while (arr.length > 0) {
    result.push(arr.splice(0, size));
  }

  return result;
}

console.log(
  chunkArray([1, 2, 3, 4, 5, 6, 7], 3)
);