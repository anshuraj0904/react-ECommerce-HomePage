import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar.jsx'
import Footer from './components/footer/Footer.jsx'
import { Outlet } from 'react-router-dom'
import UserContext from './utils/UserContext.jsx'

function App() {
  const [modeName, changeModeName] = useState('Light');
  const [name, changeName] = useState('Anshu Raj')

  return (
    // Here, we've wrapped the entire of our application with UserContext using USerCOntext.Provider .3
    // Also we've passed name :name, and, this means ki the value of name(in the UserContext variable) now is name(the useState).
    // And, passing the changeName here inside the value makes us legible to use this from anywhere in our application, using the useContext. 
    <UserContext.Provider value={{name:name, changeName}}>
    <div>
      <Navbar modeName={modeName} changeModeName={changeModeName} />
      
      {/* Only modeName passed in context, no need for changeModeName */}
      <Outlet context={{ modeName }} />
      
      <Footer modeName={modeName} />
    </div>
    </UserContext.Provider>
  )
}

export default App
