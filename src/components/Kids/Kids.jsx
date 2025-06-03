import React from "react";
import { useOutletContext } from "react-router-dom";

function Kids() {
    const { modeName } = useOutletContext(); 
  return (
    <div>
    <h1> Kids Page</h1>
    <p className={modeName === "Light" ? "text-gray-600 text-lg mb-6" : "text-white text-lg mb-6"}>
      This is the Kids section. Explore our fun and educational content for children!
    </p>
    <button className={modeName==="Light" ? "bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 cursor-pointer transition duration-300 shadow-md" : "bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 cursor-pointer transition duration-300 shadow-md"} >
      Explore Kids Content
    </button>
  </div>
)}

export default Kids;
