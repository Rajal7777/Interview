function outer(){
    let count = 0;

    return function inner(){
        count++;
        console.log(count);
    }
}

const innerFunc = outer(); // outer function call
innerFunc(); // inner function call  //output: 1
innerFunc(); // inner function call again to see the closure effect  //output: 2


const innerFunc2 = outer(); // another outer function call
innerFunc2();   //output 1

/*
"This code demonstrates a Closure in JavaScript. A closure is created when an inner function retains access to the variables of its outer function, even after the outer function has finished executing.Normally, when a function finishes executing, its local variables are cleaned up from memory (garbage collected). However, because inner is returned and still references count, JavaScript keeps the count variable alive in a special memory scope. Each time we call innerFunc(), it mutates that same preserved state."
*/