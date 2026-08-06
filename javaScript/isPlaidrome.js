const str = "Madam    ";

function isPalindrome(s) {
  // 1. Clean the string
  s = s.toLowerCase().trim();
  
  let left = 0;
  let right = s.length - 1;

  // 2. Meet in the middle approach
  while (left < right) {
    if (s[left] !== s[right]) {
      return false; // Stop immediately if a mismatch is found
    }
    left++;
    right--;
  }
  return true; // Return true if all characters matched
}

console.log(isPalindrome(str)); // Outputs: true

/*
str = str
      .toLowerCase()
      .replace(/[^a-z0-9]/g,"");


*/