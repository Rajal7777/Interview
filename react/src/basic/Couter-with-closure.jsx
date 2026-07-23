import { useState } from 'react'

export default function CouterWithClosure() {
const [count, setCount] = useState(0);

console.log('count from outside', count);

//in this case, the count value is captured in the closure during render, so it will always be 0 when the function is called, regardless of how many times the button is clicked.
const falsyHandleIncreaseByThree = () => {
 setCount(count + 1);
 setCount(count + 1);
 setCount(count + 1);
}

//useCallback fun to get the latest value of the count.
//the callback function will be pushed to the queue and executed after the current render is completed, so it will always have access to the latest value of count.
function handleIncreaseByThree() {
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    console.log('count from handleIncrease', count);
}

  return (
    <>
      <div>CouterWithClosure</div>
       <h1>Count  {count}</h1>
      <button onClick={falsyHandleIncreaseByThree}>Increase (count + 1) 3</button>
        <button onClick={handleIncreaseByThree}>Increase (prevCount + 1) 3</button>
    </>
  )
}
