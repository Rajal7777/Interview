import { useReducer } from "react";

const handleReducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: Math.max(0, state.count - 1) }; // Ensure count doesn't go below 0
    default:
      return {count: 0};
  }
};

export default function Reducer() {
  const [state, dispatch] = useReducer(handleReducer, { count: 0 });

  console.log(state);

  return (
    <>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
    </>
  );
}
