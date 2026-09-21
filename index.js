console.log(countOccurencce("javascript", "a"));

function countOccurencce(str, target){
    return [...str].reduce((acc, char) => char === target ? acc + 1 : acc, 0);
}