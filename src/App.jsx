import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar.jsx'
import Footer from './components/footer/Footer.jsx'
import { Outlet } from 'react-router-dom'

function App() {
  const [modeName, changeModeName] = useState('Light');

  return (
    <div>
      <Navbar modeName={modeName} changeModeName={changeModeName} />
      
      {/* 👇 Only modeName passed in context, no need for changeModeName */}
      <Outlet context={{ modeName }} />
      
      <Footer modeName={modeName} />
    </div>
  )
}

export default App
