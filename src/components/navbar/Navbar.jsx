import React from 'react'


function Navbar() {
  return (
    <div className='p-6 bg-gray-100 shadow-md border-b flex justify-between'>
    <div className='flex items-center space-between space-x-10'>
        <h1 className='text-3xl font-bold text-gray-800 underline'>Logo</h1>            
        <ul className='flex space-x-8 text-lg font-medium text-gray-700'>
            <li className='cursor-pointer hover:underline'>Men</li>
            <li className='cursor-pointer hover:underline'>Women</li>
            <li className='cursor-pointer hover:underline'>Kids</li>
            <li className='cursor-pointer hover:underline'>Cart</li>
        </ul>
    </div>
        <input type="text" placeholder='Search' className='w-56 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' />
   </div> 
  )
}

export default Navbar