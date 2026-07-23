import { useState,useRef } from "react";

export default function Ref() {
    
  const [email, setEmail] = useState("");
  const emailRef = useRef();

  function handleChange(event){
    event.preventDefault();
    setEmail(emailRef.current.value);
    alert(emailRef.current.value)
   }

    console.log(emailRef.current.value)
  
 
    return (
    <>
      <form onSubmit={handleChange}>
        <label htmlFor="name">Name</label>
        <input ref={emailRef} name="name" />
        <button type="submit">submit</button>
      </form>
     
      <h2>{email}</h2>
    </>
  )
}

