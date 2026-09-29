import React, { useState } from 'react'

const App = () => {

  const [counter, setCounter] = useState(0);

  function incNumber() {
    setCounter(counter + 1)
  }

  function decNumber() {
    setCounter(counter - 1)
  }

  return (

    <div>
      <div className='box'>{counter}</div>
      <button onClick={incNumber}>increase</button>
      <button onClick={decNumber}>decrease</button>
    </div>
  )
}

export default App
