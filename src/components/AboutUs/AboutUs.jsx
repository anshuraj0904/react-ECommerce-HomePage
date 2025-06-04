import React from 'react'
import { useOutletContext } from 'react-router-dom'

function AboutUs({name, email, address }) {
    const {modeName} = useOutletContext();
  return (
<div className={`max-w-md mx-auto m-10 shadow-lg rounded-2xl p-8 border 
  border-gray-200 ${modeName === 'Light' ? 'bg-white' : 'bg-black'}`}>
  <h1 className={`text-2xl font-bold text-center  mb-6 ${modeName === 'Light' ? 'text-gray-800' : 'text-white'}`}>About</h1>
  
  <div className={`space-y-3 text-lg  ${modeName === 'Light' ? 'text-gray-700' : 'text-white'}`}>
    <h3><span className="font-semibold">Name:</span> {name}</h3>
    <h3><span className="font-semibold">Address:</span> {address}</h3>
    <h3><span className="font-semibold">Email:</span> {email}</h3>
  </div>
</div>

  )
}

export default AboutUs