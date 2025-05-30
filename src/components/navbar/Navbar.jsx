import React from 'react'

function Navbar() {
  return (
    <div className='p-6 bg-gray-100 shadow-md border-b'>
    <div className='flex items-center space-between space-x-10'>
        <h1 className='text-3xl font-bold text-gray-800 underline'>Logo</h1>
        <ul className='flex space-x-8 text-lg font-medium text-gray-700'>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
            <li>Cart</li>
        </ul>
    </div>
   </div> 
  )
}

export default Navbar