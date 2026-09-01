
const numbers = [1, 2, 3, 4, 5];

function rotate(array, k) {
  const n = array.length;
  k = k % n;
  return array.slice(n - k).concat(array.slice(0, n - k));
}

console.log(rotate(numbers, 2));