import { createSlice } from "@reduxjs/toolkit"; 
// Here, we'll be creating CartSlice.

const CartSlice = createSlice({
    name:'cart', // Note:- name is pre-provided.
    initialState:{
        cartItems:[]
    },
    reducers:  // Note:- These are the methods/functions/tasks that we're defing here, bascially the reducer function which will be called after dispatching an action.
    // So, these inside here are the actions. 
    {
        addItems:(state, action)=>{

        },
        removeItems:(state, action)=>{

        },
        clearItems:(state,action)>{
            
        }
    }
})