function factorial(n){
    if(n === 0 || n === 1 ){
        return 1;
    }
    return n * factorial(n - 1);
}

function factorial1(n){
    if(n === 0 || n === 1 ){
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= n; i++){
        result = result * i;
    }
    return result;
}

console.log(factorial(5));
console.log(factorial1(5));

/*
resultを1で初期化し、2からnまでループして掛け合わせます。時間計算量はO(n)、空間計算量はO(1)です。

Space Complexity
O(1) because we only use a variable to store the result.

Time Complexity

O(n) because we loop from 2 to n.

*/