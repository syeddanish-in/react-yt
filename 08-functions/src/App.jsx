import React from 'react'

function inputchanging(val) {
  console.log(val)
}

const App = () => {
  return (
    <div>
      <button className='btn' onClick={() => {
        console.log('Button clicked')
      }}>Click me</button>
      <input className='inputBox' onChange={function(e) {
        inputchanging(e.target.value)
      }} type='text' placeholder='Enter name' />
    </div>
  )
}

export default App
