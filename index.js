const str2 = "madam";

function isSame(str) {
const str2 = str.toLowerCase().trim();

return str2 === str2.split('').reverse().join('');


}

console.log(isSame(str2))