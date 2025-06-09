import React from "react";
import { Link } from "react-router-dom";

function EmptyCart() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-6 py-10">
      <img
        src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
        alt="Empty Cart"
        className="w-40 h-40 mb-6 opacity-80"
      />
      <h1 className="text-3xl font-bold text-gray-700 mb-2">Your Cart is Empty</h1>
      <p className="text-gray-500 mb-6">Looks like you haven’t added anything to your cart yet.</p>
      <Link
        to="/products"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
      >
        Continue Shopping
      </Link>
    </div>
  );
}

export default EmptyCart;
