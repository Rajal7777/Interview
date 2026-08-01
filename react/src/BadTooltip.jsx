import { useState, useRef, useEffect } from "react";

export default function BadTooltip() {
  const [position, setPosition] = useState(0);
  const boxRef = useRef(null);


  //useEffect will run after component get mounted, so it will cause a little bit of flicker because the tooltip will be rendered at 0px first and then it will be updated to the correct position after the effect runs.
  useEffect(() => {
    //measure the real height of the element
    //getBoundingClientRect() returns  an object describing the size and position of an element.
    const height = boxRef.current.getBoundingClientRect().height;
    console.log("height", height);
    console.log("bpoounding", boxRef.current.getBoundingClientRect());

    //update position based on measurement
    setPosition(height + 10);
  }, []);

  return(
    <div>
        <div ref={boxRef} style={{ height: '80px'}}>Target box</div>
        <div style={{ top: `${position}px`, position: 'absolute'}}>tooltip</div>
    </div>
  )
}
