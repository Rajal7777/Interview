import { useState, useRef, useLayoutEffect } from "react";
console.log("from out of tooltip");

export default function Tooltip() {
  const [position, setPosition] = useState(0);
  const boxRef = useRef(null);

  console.log("inside the tool tip");
  //Fires before the Dom get painted
  useLayoutEffect(() => {
    const height = boxRef.current.getBoundingClientRect().height;
    console.log("height", height);
    console.log("bpoounding", boxRef.current.getBoundingClientRect());

    //update position based on measurement
    setPosition(height + 10);
  }, []); //screen stays frozen for microsecond util this finishes.

  return (
    <div>
      <div ref={boxRef} style={{ height: "80px" }}>
        Target box
      </div>
      <div style={{ top: `${position}px`, position: "absolute" }}>tooltip</div>
    </div>
  );
}
