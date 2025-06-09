import { createSlice } from "@reduxjs/toolkit"; 
// Here, we'll be creating CartSlice.


// A slice has three part:- 1. name 2. initialState and reducres.
const CartSlice = createSlice({
    name:'cart', // Note:- name is pre-provided.
    initialState:{
        cartItems:[]
    },
    reducers:  // Note:- These are the methods/functions/tasks that we're defing here, bascially the reducer function which will be called after dispatching an action.
    // So, these inside here are the actions. 
    {
        addItems:(state, action)=>{
            state.cartItems.push(action.payload)
        },
        removeItems:(state, action)=>{
            state.cartItems.pop(action.payload)
           
        },
        clearItems:(state,action)=>{
              state.cartItems = []
        }
    }
})


// Note:- CartSlice has two items in it:- {actions, reducer}
export const {addItems, removeItems, clearItems} = CartSlice.actions
export default CartSlice.reducer; 
// Note:- It is important that we export the reducer and the actions differently from here and not the entire CartSlice at once.