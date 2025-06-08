import React, { useState } from "react";
import ListItems from "../ListItems/ListItems";

function Accordion({title, open, setOpen}) {
    // Now, we want that when one accordion is opened, the rest need to be closed, and, for that we need to ensure that the data is passed from the correct plavce in the hierarchy.
    // And, keeping that in mind, we'll put the state variable in the parent class, and, it'll then become a controlled component.
    
    const changeOpen = ()=>{
            setOpen()
    }

  return (
    <div className="mt-5 w-64 shadow-md rounded-sm border border-gray-200 px-4 py-2 mb-5">
      <div className="flex justify-between ">
        <h1>{title}</h1>
        <button className="px-2 bg-black  text-white rounded-md cursor-pointer" onClick={changeOpen} >{open ? "hide" : "show"}</button>
      </div>

     {open && <ListItems /> }
    </div>
  );
}

export default Accordion;
