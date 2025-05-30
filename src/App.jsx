import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Productcard from './components/Product-Card/Productcard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
          <Navbar/>
          <Productcard/>
      </div>
    </>
  )
}

export default App
