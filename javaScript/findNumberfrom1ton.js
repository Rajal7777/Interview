/*
English

I can calculate the expected sum of numbers from 1 to n using the formula n * (n + 1) / 2, then subtract the actual sum of the array. The difference is the missing number. The time complexity is O(n) and the space complexity is O(1).

Japanese

1からnまでの数字の合計をn × (n + 1) ÷ 2で計算し、配列に入っている数字の合計を引きます。その差が欠けている数字になります。時間計算量はO(n)、追加の空間計算量はO(1)です。

time Complexity → O(n)  because we sum all elements in the array using reduce.
Space Complexity → O(1)  only a few variables are used, no extra space proportional to input size.

時間計算量 → O(n)  配列のすべての要素をreduceで合計するため。
空間計算量 → O(1)  使用される変数は少数で、入力サイズに比例した追加の空間は使用しない。

*/

console.log(findMissingNumber([1, 2, 4, 5], 5));

function findMissingNumber(arr,n){
let total = (n * (n + 1)) / 2;
let sum = arr.reduce((acc, num) => acc + num, 0);
return total - sum;

}

//case if there is not n

/*
time Complexity → O(n)  because we sum all elements in the array using reduce.
Space Complexity → O(1)  only a few variables are used, no extra space proportional to input size.



*/
function findMissingNumberW(arr){
    let n = arr.length + 1; // Since one number is missing, the total count should be array length + 1
    let total = (n * (n + 1)) / 2;
    let sum = arr.reduce((acc, num) => acc + num, 0);
    return total - sum; 
}