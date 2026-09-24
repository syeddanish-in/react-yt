import React from 'react'

const User = (prop) => {
    console.log(prop);
  return (
    <div>
      <h1 style={{ color: 'black ' }}>{prop.name}</h1>
    </div>
  )
}

export default User
