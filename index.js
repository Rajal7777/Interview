console.log(generateRange(1, 5));

function generateRange(start, end){
  let array = [];
  for (let i = start; i <= end; i++){
    array.push(i);
  }
  return array;
}