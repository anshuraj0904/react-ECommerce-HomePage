import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../utils/UserContext";
import { useSelector } from "react-redux";

// We'll now add a light/dark mode here.
function Navbar({ modeName, changeModeName }) {
  const user = useContext(UserContext);

  // Getting the store here usling the useSelector.
  const cartItems = useSelector((store) => store.cart.cartItems);
  const wishlistItems = useSelector((store)=> store.wishlist.itemsInWishList)
  console.log('Wishlist: ',wishlistItems);
  
  const changeMode = () => {
    if (modeName === "Light") {
      changeModeName("Dark");
      document.body.classList.add("dark");
    } else {
      changeModeName("Light");
      document.body.classList.remove("dark");
    }
  };
  return (
    <div className="p-6 shadow-md border-b flex justify-between">
      <div className="flex items-center space-between space-x-10">
        <h1
          className={
            modeName === "Light"
              ? "text-3xl font-bold text-gray-800 underline cursor-pointer"
              : "text-3xl font-bold text-white underline cursor-pointer"
          }
        >
          <Link to={"/"}>Logo</Link>
        </h1>
        <ul className="flex space-x-8 text-lg font-medium text-gray-700">
          <li
            className={
              modeName === "Light"
                ? "cursor-pointer hover:underline"
                : "cursor-pointer hover:underline text-white"
            }
          >
            <Link to={"/products"}>Home</Link>
          </li>
          <li
            className={
              modeName === "Light"
                ? "cursor-pointer hover:underline"
                : "cursor-pointer hover:underline text-white"
            }
          >
            <Link to={"/men"}>Men</Link>
          </li>
          <li
            className={
              modeName === "Light"
                ? "cursor-pointer hover:underline"
                : "cursor-pointer hover:underline text-white"
            }
          >
            <Link to={"/grocery"}>Grocery</Link>
          </li>
          <li
            className={
              modeName === "Light"
                ? "cursor-pointer hover:underline"
                : "cursor-pointer hover:underline text-white"
            }
          >
            <Link to={"/kids"}>Kids</Link>
          </li>
          <li
            className={
              modeName === "Light"
                ? "relative cursor-pointer hover:underline"
                : "relative cursor-pointer hover:underline text-white"
            }
          >
            <span className="absolute -top-2 left-1/2 -translate-x-1/2 text-xs bg-red-400 text-white px-2 py-0.5 rounded-full shadow-md">
              {cartItems.length}
            </span>
            <Link to={"/cart"}>Cart</Link>
          </li>
          <li
            className={
              modeName === "Light"
                ? "relative cursor-pointer hover:underline"
                : "relative cursor-pointer hover:underline text-white"
            }
          >
            <span className="absolute -top-2 left-1/2 -translate-x-1/2 text-xs bg-red-400 text-white px-2 py-0.5 rounded-full shadow-md">
              {wishlistItems.length}  
            </span>
            <Link to={"/wishlist"}>Wishlist</Link>
          </li>
          <li
            className={
              modeName === "Light"
                ? "cursor-pointer hover:underline"
                : "cursor-pointer hover:underline text-white"
            }
          >
            {user.name}
          </li>
        </ul>
      </div>
      <button
        className="bg-blue-500 text-white px-4 py-2 cursor-pointer rounded-lg shadow-md hover:bg-blue-600 hover:shadow-xl transition duration-300"
        onClick={() => {
          console.log("Something Changed!");
          changeMode();
        }}
      >
        {modeName === "Light" ? "Dark" : "Light"}
      </button>
    </div>
  );
}

export default Navbar;
