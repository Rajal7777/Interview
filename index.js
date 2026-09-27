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

console.log(twoSum([2, 7, 11, 15], 9));

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
  console.log(map)

  return [];
}
