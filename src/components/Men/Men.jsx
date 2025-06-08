import React, {useState, useContext, use} from 'react'
import Accordion from '../Accordion/Accordion'
import UserContext from '../../utils/UserContext'

function Men() {

  const [open,setOpen] = useState(null)

  const user = useContext(UserContext)
  
  return (
    <div className='max-w-6xl mx-auto mt-10'>
      <input type="text" value={user.name} onChange={(e)=>{user.changeName(e.target.value)}} className='border border-black rounded-sm p-0.5' />
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