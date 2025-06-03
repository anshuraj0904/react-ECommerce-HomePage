import React, { useState } from 'react'
import { Link,  } from 'react-router-dom'

// We'll now add a light/dark mode here.
function Navbar({modeName, changeModeName })
{
  
    const changeMode = () => {
       if(modeName === "Light") {
        changeModeName("Dark")
        document.body.classList.add("dark")
       }
         else {
          changeModeName("Light")
          document.body.classList.remove("dark")
         }
    }
  return (
    <div className='p-6 shadow-md border-b flex justify-between'>
    <div className='flex items-center space-between space-x-10'>
        <h1 className={modeName === "Light" ? 'text-3xl font-bold text-gray-800 underline cursor-pointer' : 'text-3xl font-bold text-white underline cursor-pointer'}><Link to={"/"}>Logo</Link></h1>            
        <ul className='flex space-x-8 text-lg font-medium text-gray-700'>
            <li className={modeName === "Light" ? 'cursor-pointer hover:underline' : 'cursor-pointer hover:underline text-white'}><Link to={"/products"}>Home</Link></li>
            <li className={modeName === "Light" ? 'cursor-pointer hover:underline' : 'cursor-pointer hover:underline text-white'}><Link to={"/men"}>Men</Link></li>
            <li className={modeName === "Light" ? 'cursor-pointer hover:underline' : 'cursor-pointer hover:underline text-white'}>Women</li>
            <li className={modeName === "Light" ? 'cursor-pointer hover:underline' : 'cursor-pointer hover:underline text-white'}><Link to={"/kids"}>Kids</Link></li>
            <li className={modeName === "Light" ? 'cursor-pointer hover:underline' : 'cursor-pointer hover:underline text-white'}>Cart</li>
        </ul>
    </div>
       <button className='bg-blue-500 text-white px-4 py-2 cursor-pointer rounded-lg shadow-md hover:bg-blue-600 hover:shadow-xl transition duration-300'
        onClick={()=>{
          console.log('Something Changed!');          
          changeMode()}}
       >{modeName === "Light" ? "Dark" : "Light"}</button>
   </div> 
  )
}

export default Navbar