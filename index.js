const numbers = [1,1,2,3,5,5,8,8,10,11,12];


console.log(removeDuplicate(numbers));

function removeDuplicate(arr){
 const newArr = [];

  for(const num of arr){
    if(!newArr.includes(num)){
      newArr.push(num)
    }
  }

  return newArr;
}

// Modern Set use garay ra duplicate number hataya ko
const unique = [...new Set(numbers)]

console.log(unique)

//we will use filter() & indexOf method coz indexOf will always return the 1st index of the element
const findUnique = (nums) => {
  //hami sab num ma check garcau if 1st ma vetay ko index ra ahilay ko num ko index same xa vany matra filter match hunxa
  return nums.filter((num, index) => nums.indexOf(num) === index)
}

console.log(findUnique(numbers))