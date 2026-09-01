
const numbers = [1, 2, 3, 4, 5];

function rotate(array, k) {
  const n = array.length;
  k = k % n;
  console.log(k)
  return array.slice(n - k).concat(array.slice(0, n - k));
}

console.log(rotate(numbers, 2));


/*

Roman Nepali 🧠

Main part:

numbers.slice(-k)

k = 2 bhaye:

[4, 5]

Ani:

numbers.slice(0, -k)

gives:

[1, 2, 3]

Then:

[4, 5].concat([1, 2, 3])

Result:

[4, 5, 1, 2, 3]

*/