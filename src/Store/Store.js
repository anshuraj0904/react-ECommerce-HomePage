// We'll be creating the store here

import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice"
import WishlistSlice from './WishlistSlice'

const AppStore = configureStore({
    reducer:{ // Reducer is the layer between the store and the slice.
        cart:CartSlice,
        // We can have more than one slice here.
        wishlist:WishlistSlice
    }
})


export default AppStore