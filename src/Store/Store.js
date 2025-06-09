// We'll be creating the store here

import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice"

const AppStore = configureStore({
    reducer:{ // Reducer is the layer between the store and the slice.
        cart:CartSlice
        // We can have more than one slice here.
    }
})


export default AppStore