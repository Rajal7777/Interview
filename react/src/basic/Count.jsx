import { useState } from "react";
export default function Count() {
  const [count, setCount] = useState(0);

  function increaseAndDecreaseCount(btnType) {
    if (count <= 0) {
      setCount(0);
    }

    if (btnType === "add") {
      setCount((prev) => prev + 1);
    } else if (btnType === "subtract") {
      setCount((prev) => {
        if (prev === 0) return 0;
        return prev - 1;
      });
    }
  }
  //setCount((prev) => Math.max(prev - 1, 0));
  //{ setCount((prev) => {if(prev === o) return 0; return prev- 1})}
  return (
    <>
      <div>{count}</div>
      <button onClick={() => increaseAndDecreaseCount("add")}>Add</button>
      <button onClick={() => increaseAndDecreaseCount("subtract")}>
        Subtract
      </button>
    </>
  );
}
