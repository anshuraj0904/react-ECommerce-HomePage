import React, { useState } from "react"
import { useEffect } from "react"


// Here, we're following the single principle responsibilty, as this method here is used only for one thing.

const useGetSingleProduct = (id) =>{
    const [singleProduct, setSingleProduct] = useState(null)
   useEffect(()=>{
    fetchSingleProduct()
   },[])

   const fetchSingleProduct = async () =>{
    const data = await fetch(`https://fakestoreapi.com/products/${id}`)
    const jsonData = await data.json()
    setSingleProduct(jsonData)
   }

   return singleProduct

}

export default useGetSingleProduct