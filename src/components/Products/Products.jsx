import React from "react";
import Navbar from "../navbar/Navbar";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function Products({ name, price, rating, imgsrc, modeName, id}) {
  // or, we can use props and then use those like props.name, props.price, props.rating.
  // The thing which we have done above is called destructuring. 
  


  return (   
    <>
    <Link to={`/product/${id}`} key={id}>
      <div className="max-w-xs h-140 rounded-2xl shadow-md border m-4 p-4 hover:shadow-lg transition duration-300">
    
        <img
          src={imgsrc}
          alt="Polo T-shirt"
          className="w-80 h-64 object-cover rounded-xl transform transition-transform duration-300 hover:scale-110"/>
        <div className="mt-4 text-center">
          <h1 className={modeName === "Light" ? 'text-xl font-semibold text-gray-800' : 'text-xl font-semibold text-white'}>{name}</h1>
          <p className={modeName === "Light" ?  'text-gray-600 mt-1' : 'text-white mt-1'}>⭐ {rating} ratings</p>
          <p className={modeName === "Light" ? 'text-gray-800 font-medium mt-2':'text-white font-medium mt-2'}>Price: ${price}</p>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 cursor-pointer rounded-lg shadow-md hover:bg-blue-600 hover:shadow-xl transition duration-300">
            Show Details
          </button>
        </div>
      </div>
      </Link>
    </>
  );
}

export default Products;


export const isBestSeller = (WrappedComponent) => {
  return function EnhancedComponent(props) {
    return (
      <div className="relative">
        <span className="absolute rounded-sm bg-purple-700 text-white -left-2 -top-1 px-4 py-1">
          Best Seller
        </span>
        <WrappedComponent {...props} />
      </div>
    );
  };
};



export const isLowPrice = (WrappedComponent) => {
  return function EnhancedComponent(props) {
    return (
      <div className="relative">
        <span className="absolute rounded-sm bg-green-700 -top-0.5 -left-3 text-white px-4 py-1">
          Lowest Price
        </span>
        <WrappedComponent {...props} />
      </div>
    );
  };
};
