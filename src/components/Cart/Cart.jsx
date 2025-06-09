import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeItems, clearItems } from "../../Store/CartSlice"

function Cart() {
  const cartItems = useSelector((store) => store.cart.cartItems) || [];

  console.log('cartItems',cartItems[0]);

  const dispatch = useDispatch()
  
 
  


  return  cartItems.length == 0 ? <h1>Your Cart is Empty! Enjoy Shopping</h1> : (


<div className="p-6 bg-gray-100 min-h-screen">
  <h1 className="text-3xl font-bold mb-6 text-center">This is the Cart!</h1>

  <div className="flex flex-wrap gap-6 justify-left">
    {cartItems.map((item) => (
      <div key={item.id} className="bg-white p-6 w-80 rounded-xl shadow-md border hover:shadow-lg transition duration-300">
        <img src={item.image} alt="" className="w-40 h-40 object-cover rounded-full" />
        <h2 className="text-xl font-semibold text-blue-700 mb-2">{item.title}</h2>
        <p className="text-gray-700 mb-1"><span className="font-semibold">Price:</span> ${item.price}</p>
        <p className="text-gray-600"><span className="font-semibold">Category:</span> {item.category}</p>
        <button className="mt-4 bg-red-500 text-white px-4 py-2 cursor-pointer rounded-lg shadow-md hover:bg-red-600 hover:shadow-xl transition duration-300"
        onClick={()=>{
            alert(`${item.title} Removed from Cart!`)
            dispatch(removeItems(item))
        }}
        >Remove from Cart</button>
      </div>
    ))}
  </div>
</div>


  );
}

export default Cart;
