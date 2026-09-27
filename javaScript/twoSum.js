/*
timeComplexity -> O(N²) we have another loop inside the loop

space complexity -> O(1) => we dont create any data structure that grows to n

*/

function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }

  return [];
}

/*

time complexity -> O(N) => we ony use one loop to the n 

space complexity -> O(N) => why in worst case the map store all the posible n number to the map

*/

function twoSum(nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let current = nums[i];
    let needed = target - current;

    if (map.has(needed)) {
      return [map.get(needed), i];
    }

    map.set(current, i);
  }

  return [];
}

const users = [
  { id: 101, name: "John" },
  { id: 102, name: "Alice" },
  { id: 103, name: "Bob" },
];

const userMap = new Map();

for (const user of users) {
  userMap.set(user.id, user);
}

console.log(userMap.get(101));
console.log(userMap);
