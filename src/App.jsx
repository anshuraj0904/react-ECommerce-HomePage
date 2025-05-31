import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar.jsx'
import Productcard from './components/Product-Card/Productcard.jsx'
import Footer from './components/footer/Footer.jsx'

function App() {

  return (
    <>
      <div>
          <Navbar/>
          <Productcard/>
          <Footer/>
      </div>
    </>
  )
}

export default App
