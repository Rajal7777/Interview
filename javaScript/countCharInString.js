console.log(countOccurrences("javascript", "a"));


/*

Complexity

If n is the length of the string:

Time: O(n)
Space: O(1)

Because we only use one counter.
*/
function countOccurrences(str, char){
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  return count;
}

function countOccurrences(str, charToCount){
    let count = 0;

    for(const char of str){
        if(char === charToCount){
            count++;
        }
    }
    return count;
}

function countOccurencce(str, target){
    return [...str].reduce((acc, char) => char === target ? acc + 1 : acc, 0);
}