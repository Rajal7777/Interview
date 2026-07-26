"use strict";
//void -> the function finishes but returns nothing
function printname(name) {
    console.log(name);  //Jhon Doe
}

printname("John Doe"); 

const showthis = printname("Jane Doe");
 console.log(showthis);  //undefined we call the function but it does not return anything so the value is automatically undefined



//never -> the function never finishes
function throwError(message) {
    throw new Error(message);
}

throwError("This is an error message"); // This will throw an error and stop the execution of the program


function area1(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.side * shape.side;
        default:
            const x = shape;
            return x;
    }
}
console.log(area1({ kind: "circle", radius: 5 })); // 78.53981633974483
