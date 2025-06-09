import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { removeFromWishlist, emptyWishlist } from '../../Store/WishlistSlice'
import EmptyWishlist from './EmptyWishlist'

function Wishlist() {
    const dispatch = useDispatch()

    const wishlistItems = useSelector((store) => store.wishlist.itemsInWishList) || []


  return wishlistItems.length === 0 ? <EmptyWishlist/> :  (
<div className="p-6 bg-gray-100 min-h-screen">
      <div className="p-3 mb-2 bg-gray-300 flex justify-between">
        <h1 className="text-3xl underline font-bold mb-6 text-center">
          Your Cart
        </h1>
        <button
          className="bg-orange-500 text-white px-4 py-1 cursor-pointer rounded-lg shadow-md hover:bg-orange-600 hover:shadow-xl transition duration-300"
          onClick={() => {
            alert('Clearing your wishlist!')
            dispatch(emptyWishlist());
          }}
        >
          Empty Wishlist
        </button>
      </div>

      <div className="flex flex-wrap gap-6 justify-left">
        {wishlistItems.map((item) => (
          <div
            key={item.id}
            className="bg-white p-6 w-80 rounded-xl shadow-md border hover:shadow-lg transition duration-300"
          >
            <img
              src={item.image}
              alt=""
              className="w-40 h-40 object-cover rounded-full"
            />
            <h2 className="text-xl font-semibold text-blue-700 mb-2">
              {item.title}
            </h2>
            <p className="text-gray-700 mb-1">
              <span className="font-semibold">Price:</span> ${item.price}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Category:</span> {item.category}
            </p>
            <button
              className="mt-4 bg-red-500 text-white px-4 py-2 cursor-pointer rounded-lg shadow-md hover:bg-red-600 hover:shadow-xl transition duration-300"
              onClick={() => {
                alert(`${item.title} Removed from wishlist!`);
                dispatch(removeFromWishlist(item));
              }}
            >
              Remove from Wishlist
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Wishlist