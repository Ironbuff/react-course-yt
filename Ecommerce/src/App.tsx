import Learn from "./Learn"
import { useState } from "react"
function App() {
//let counter=10
//here counter is variable and setCounter is an method or function
//inside the parenthsis of usestate it should have intial value for eg 2
const[counter,setCounter]=useState(0)
//to update the counter we use the function or method we used in the use state 
const Addvalue=()=>{
setCounter(counter+1)
}
//repeating the method doesnt yield multiple state changes due to batching
//so to update the state multiple times we use call back given in state
const removevalue=()=>{
  setCounter((prevCounter)=>prevCounter-1)
  setCounter((prevCounter)=>prevCounter-1)
  setCounter((prevCounter)=>prevCounter-1)
}
  return (
    <>
      <h1>He is our hero</h1>
      <Learn/>
      <h2> This is counter: {counter}</h2>
      <button onClick={Addvalue}>Add Value</button>{""}
      <button onClick={removevalue}>Remove Value</button>
    </>
  )
}

export default App
