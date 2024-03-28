import { useState } from "react";

function App() {

  const [value, setValue] = useState(0); //Hook

  const increment = () => {
    // value++;
    // console.log(value);
    setValue(value + 1)
  }

  const decrement = () => {
    setValue(value - 1)
  }

  return ( // rendring -> render -> re-render
    <>
      <h1>State</h1>
      <h1>count : {value}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>-</button>
    </>
  )
}

export default App