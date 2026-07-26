

//void -> the function finishes but returns nothing

function printname(name: string): void {
   console.log(name);
}

printname("John Doe"); 

const showthis = printname("Jane Doe"); 

console.log(showthis); 

type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; side: number };


function area1(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;

    case "square":
      return shape.side * shape.side;

    default:
      const x: never = shape;
      return x;
  }
}

console.log(area1({ kind: "circle", radius: 5 })); // 78.53981633974483