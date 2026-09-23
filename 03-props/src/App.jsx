import React from 'react'
import Card from './components/Card.jsx'


const App = () => {
  return (
    <div className="parent">
      <Card user="Syed Danish" age={25} description="Software Engineer" src="https://plus.unsplash.com/premium_photo-1787742235469-86fc784b8981?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8Q0R3dXdYSkFiRXd8fGVufDB8fHx8fA%3D%3D" />
      <Card user="John Doe" age={30} description="Product Manager" src="https://images.unsplash.com/photo-1654110455429-cf322b40a906?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBpY3xlbnwwfHwwfHx8MA%3D%3D" />
      <Card user="Jane Smith" age={28} description="Designer" src="https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3xlbnwwfHwwfHx8MA%3D%3D" />
      <Card user="Bob Johnson" age={35} description="Sales Associate" src="https://images.unsplash.com/photo-1581391528803-54be77ce23e3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZSUyMHBpY3xlbnwwfHwwfHx8MA%3D%3D" />
    </div>
  )
}

export default App
