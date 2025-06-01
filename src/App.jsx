import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar.jsx'
import Productcard from './components/Product-Card/Productcard.jsx'
import Footer from './components/footer/Footer.jsx'

function App() {

    const [modeName, changeModename] = useState('Light'); 


  return (
    <>
      <div>
          <Navbar modeName={modeName} changeModeName={changeModename}/>
          <Productcard modeName={modeName}/>
          <Footer modeName={modeName}/>
      </div>
    </>
  )
}

export default App
