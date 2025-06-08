import { createContext } from "react";


const UserContext = createContext({ // As, here we're creating the context, so we're using createContext here, the palce where we'll be using it, we'll be using useContext there.  
    name:"Anshu",
    email:"anshu@gmail.com"
})

export default UserContext