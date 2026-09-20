/*
Time  → O(n)
Space → O(n)
Time Complexity / 時間計算量\(O(N)\)Loop runs max \(N+1\) times; Set lookups are \(O(1)\). / ループは最大 \(N+1\) 回で、Setの検索は \(O(1)\) のため。

Space Complexity / 空間計算量\(O(N)\) because we store all elements in a Set. / 配列のすべての要素をSetに格納するため。
*/
const nums = [3, 4, -1, 1];

function findMissingNumber(nums) {
  const set = new Set(nums);

  for (let i = 0; i <= nums.length; i++) {
    if (!set.has(i)) {
      return i;
    }
  }
}

console.log(findMissingNumber(nums));


/*
yesma ma i= 1
Aba current number array ma cha ki chaina bhanera whole array search garchau.
xa then found = true garay ra array break

if(!found) return number which is the first missing positive number

space → O(1) kina beacuse we use number , found, i only variables
variables have fixed size in memory so space complexity is O(1) No Set, Map, or extra array.
*/
const nums = [3, 4, -1, 1];

function findFirstMissingPositive(nums) {
  let number = 1;

  while (true) {
    let found = false;

    //search whole array for current number 
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === number) {
        found = true;
        break; //found then dont need to continue loop break from current loop
      }
    }

    //incase found = false then return number which in the first number missing positive
    if (!found) {
      return number;
    }
    number++;
  }
}

console.log(findFirstMissingPositive(nums));


/*
theory 
space → O(1)  incase the varible,arr,obj have fixed size in memory so space complexity is O(1) No Set, Map, or extra array.

space → O(n)  incase the varible,arr,obj have dynamic size in memory so space complexity is O(n) Set, Map, or extra array.
*/

function findMissingNumber(nums) {
  nums.sort((a, b) => a - b);

  for (let i = 0; i <= nums.length; i++) {
    if (nums[i] !== i) {
      return i;
    }
  }
}