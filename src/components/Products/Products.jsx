import React from "react";
import Navbar from "../navbar/Navbar";


function Products({ name, price, rating, imgsrc, modeName }) {
  // or, we can use props and then use those like props.name, props.price, props.rating.
  // The thing which we have done above is called destructuring. 

  
  return (   
    <>
      <div className="max-w-xs rounded-2xl shadow-md border m-4 p-4 hover:shadow-lg transition duration-300">
        <img
          src={imgsrc}
          alt="Polo T-shirt"
          className="w-80 h-64 object-cover rounded-xl transform transition-transform duration-300 hover:scale-110"
        />
        <div className="mt-4 text-center">
          <h1 className={modeName === "Light" ? 'text-xl font-semibold text-gray-800' : 'text-xl font-semibold text-white'}>{name}</h1>
          <p className={modeName === "Light" ?  'text-gray-600 mt-1' : 'text-white mt-1'}>⭐ {rating} ratings</p>
          <p className={modeName === "Light" ? 'text-gray-800 font-medium mt-2':'text-white font-medium mt-2'}>Price: ${price}</p>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 cursor-pointer rounded-lg shadow-md hover:bg-blue-600 hover:shadow-xl transition duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}

export default Products;
