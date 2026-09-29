import React, { useState } from 'react'

const App = () => {

  var [counter, setCounter] = useState(0);

  console.log(counter);

  function incNumber() {
    setCounter(counter + 1)
    console.log(counter++)
  }

  function decNumber() {
    setCounter(counter - 1)
    console.log(counter--)
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
