import React from 'react'


function Footer() {
  return (
    <div className='p-8 shadow-md border-t flex justify-between'>
        <p className='text-lg font-medium text-gray-700'>© 2025 Anshu Raj | All rights reserved</p>
        <div>
         <ul className='flex space-x-8 text-lg font-medium text-gray-700'>
            <li className='cursor-pointer hover:underline'>Home</li>
            <li className='cursor-pointer hover:underline'>About Us</li>
            <li className='cursor-pointer hover:underline'>Contact Us</li>
            <li className='cursor-pointer hover:underline'>Privacy Policy</li>
         </ul>
        </div>
    </div>
  )
}

export default Footer