import { useRef } from "react";

console.log("RefCount component rendered");
export default function RefCount() {
    const countRef = useRef(0);

    console.log("RefCount component rendered inside function");

    function handleClick() {
        countRef.current += 1;
        console.log("Count after click:", countRef.current);
    }
    return (
        <>
            <button onClick={handleClick}>click</button>
        </>
    )

}