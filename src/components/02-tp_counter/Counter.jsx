import React, { useState } from 'react'

// rafce
const Counter = () => {

  const [counter, setCounter] = useState(0)
  const [idInterval, setIdInterval] = useState(null)

  const start = () => {
    const id = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1)
    }, 2000)
    setIdInterval(id)
  }

  const stop = () => {
    clearInterval(idInterval)
  }

  const reset = () => {
    setCounter(0)
    clearInterval(idInterval)
  }

  return (
    <>
      <div>counter : {counter}</div>
      <button onClick={() => start()} >Start</button>
      <button onClick={() => stop()} >Stop</button>
      <button onClick={() => reset()} >Reset</button>

    </>
  )
}

export default Counter