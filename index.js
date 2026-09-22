const data1 =["s","t","a","r"];
console.log(reverseInPlace(data1));

function reverseInPlace(array) {
  const arr = [];

  for(const item of array){
  arr.unshift(item)
  }
  return arr;

}