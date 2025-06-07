import React, {useState} from 'react'
import Accordion from '../Home/Accordion/Accordion'

function Men() {

  const [open,setOpen] = useState(null)
  const [isShown, setIsShown] = useState(false)

  return (
    <div className='max-w-6xl mx-auto mt-10'>
      <h1 className='text-3xl font-bold text-gray-800'>Filter Options</h1>
     {

       ["Brand", "Gender", "Price", "Pattern"].map((title, index) => 
         <Accordion title={title} key={index} 
         open = {index === open ? true:false} // Here, we're using the index provided at the parent level for controlling the things at the child level.
         setOpen = {()=> setOpen(index)} // This one's setting the open to that index value whichever button I am clicking.
         /> 
        )
      }

    </div>
  )
}

export default Men