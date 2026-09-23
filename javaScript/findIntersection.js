function getIntersectionSet(arr1, arr2) {
  const set1 = new Set(arr1);
  
  // Filter items in arr2 that exist in set1
  const intersected = arr2.filter(item => set1.has(item));
  
  // Convert to a Set and back to an array to remove duplicate matches
  return [...new Set(intersected)];
}

const num1 =["2","6"];
const num2 =["7","6"];
console.log(getIntersectionSet(num1, num2)); // Output: [2, 3]


const intersect = (a, b) => a.filter(x => b.includes(x))