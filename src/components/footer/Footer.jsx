import React from 'react'
import { Link } from 'react-router-dom'


function Footer({modeName}) {
  return (
    <div className={modeName === "Light" ? 'p-8 shadow-md border-t flex justify-between' : 'p-8 shadow-md border-t flex justify-between text-white'}>
        <p className={modeName ==="Light" ?'text-lg font-medium text-gray-700':'text-lg font-medium text-white'}>©{new Date().getFullYear()} Anshu Raj | All rights reserved</p>
        <div>
         <ul className={modeName === "Light" ?'flex space-x-8 text-lg font-medium text-gray-700':'flex space-x-8 text-lg font-medium text-white'}>
            <li className='cursor-pointer hover:underline'><Link to={'/products'}>Home</Link></li>
            <li className='cursor-pointer hover:underline'><Link to={'/about'}>About Us</Link></li>
            <li className='cursor-pointer hover:underline'>Contact Us</li>
            <li className='cursor-pointer hover:underline'>Privacy Policy</li>
         </ul>
        </div>
    </div>
  )
}

export default Footer