import { useState } from "react"

const Counter = () => {

  const [counter,setCounter] = useState(0);

  const incremente = () => {
    setCounter(counter + 1)
  }

  return(
    <>
      <h1>Counter</h1>
      <p>Counter : {counter}</p>
      <button onClick={incremente}>Incrémente</button>
    </>
  )
}
export default Counter