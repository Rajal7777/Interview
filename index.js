Array.prototype.newArray = function (callback) {
  const newArr = [];

  for (let i = 0; i < this.length; i++) {
    //check if value is not empty
    if (this.hasOwnProperty(i)) {
      const storedArr = callback(this[i], i, this);
        console.log(storedArr)

      //pushiing the value to new arr
      newArr.push(storedArr);
    }
  }

  return newArr;
};

const number = [1, 2, 3];
const double = number.newArray((num) => num * 2);
console.log(double)
