function findFirstElement<T>(arr: T[]): T | undefined {
    return arr.length > 0 ? arr[0] : undefined;
    //return arr?.[0];
}
//suppose we have an array of numbers, strings, objects, etc. We can use the generic function to find the first element of any type of array.
console.log(findFirstElement([1,2,3]))   //a T wil be number
console.log(findFirstElement(['a','b','c']))  //a T will be string
console.log(findFirstElement([]))  //undefined
console.log(findFirstElement([{name:'John'},{name:'Doe'}]))  //{name:'John'}
console.log(findFirstElement(['elephant','tiger','lion']))  //elephant

/*
EXPLANATION:

What is <T>?
function findFirstElement<T>
TELLS TYPESCRIPT => 
we  what type the user will give lets just call it T variable{take T as a placeholder}
T = ? later typescript will automatically fill it 


T represents any type
the function worls with number, string , obj,array, etc
generics allows us to create reusable components 
*/