import React from 'react'

const App = () => {

    const submit = (e) => {
        e.preventDefault()
        console.log("Form submitted");
    }

    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault()
            }}>
                <input type='text' placeholder='Enter Name' />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default App
