import { useState } from "react";

export default function ControlledInput() {
  const [email, setEmail] = useState("");
  console.log(email);

  function handleSubmit(e) {
    e.preventDefault();
    alert(email);
  }

  //every char typed trigger onChange calls setEmail changes the state and triggers a component re-render -> updates the value props in the DOM
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
        <button type="submit">Submit</button>
      </form>

      <h2>{email}</h2>
    </>
  );
}
