Array.prototype.myFilter = function(callback) {
  const newArr = [];

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      newArr.push(this[i]);
    }
  }
  return newArr;
};

const number = [1, 2, 3, 4, 5];

const evenNums = number.myFilter((num) => num  % 2 === 0);
console.log(evenNums); // Output: [2, 4]


