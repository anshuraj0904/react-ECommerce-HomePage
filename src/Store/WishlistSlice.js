import { createSlice } from "@reduxjs/toolkit";


const WishlistSlice = createSlice({
    name:"wishlist",
    initialState:{
        itemsInWishList : []
    },
    reducers:{
        addToWishlist:((state, action)=>{
            state.itemsInWishList.push(action.payload)
        }),
        removeFromWishlist:((state, action)=>{
            state.itemsInWishList.pop(action.payload)
        }),
        emptyWishlist:((state,action)=>{
            state.itemsInWishList = []
        })
    }
})


export const {addToWishlist, removeFromWishlist, emptyWishlist} = WishlistSlice.actions
export default WishlistSlice.reducer