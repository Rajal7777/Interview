

function groupAnagrams(str){
 const obj = new Map();

 for(const s of str){
  let item = s.split('').sort().join('');

  if(!obj.has(item)){
    obj.set(item, []);
  }
  obj.get(item).push(s);
 }
 return [...obj.values()];

}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));