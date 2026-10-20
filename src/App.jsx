import React from 'react'

const App = () => {
  return (
    <div className='h-screen  bg-black text-white'>
      <form className='flex justify-between items-start p-10'>
        <div className='flex gap-4 w-1/2 items-start flex-col '>
          <input type="text"
            placeholder='Enter Notes Heading'
            className='px-5 w-full font-medium py-2 border-2 outline-none rounded' />
          <textarea type='text'
            placeholder='Enter Details'
            className='px-5 w-full font-medium h-32 py-2 flex items-start border-2 outline-none rounded' />
          <button className='bg-white font-medium text-black px-5 py-2 rounded'>Add Notes</button>
        </div>
      </form>
    </div>
  )
}

export default App
