import React, { useEffect, useState } from "react";
import Products from "../Products/Products.jsx";
import Skeleton from "../skeleton/Skeleton.jsx";
import { useOutletContext } from "react-router-dom";

function Productcard() {
  const [isFiltered, setIsFiltered] = useState(false);
  const [productList, setProductList] = useState([]); // full data
  const [listofProduct, setlistofProduct] = useState([]); // filtered data
  const [searchText, setSearchText] = useState("");

  const { modeName } = useOutletContext(); // Get modeName from context

  const fetchData = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const resData = await data.json();
    return resData;
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetchData();
        // console.log("Response Data: ", res);
        setProductList(res);
        setlistofProduct(res);
      } catch (error) {
        console.log("Error fetching data: ", error);
      }
    };
    getData();
  }, []);

  return listofProduct.length === 0 ? (
    <Skeleton />
  ) : (
    <>
      <div className="flex justify-between items-center p-6 shadow-md rounded-lg mb-6">
        <input
          type="text"
          placeholder="Search"
          className={modeName === "Light" ? 'w-56 mr-5 p-2 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' : 'w-56 mr-5 p-2 text-gray-400 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'}
          onChange={(e)=>{
            const searchTerm = e.target.value.toLowerCase();
            setSearchText(searchTerm);
            const filteredProducts = productList.filter((product)=>(
              product.title.toLowerCase().includes(searchText)))
            setlistofProduct(filteredProducts);  
          }}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 cursor-pointer rounded-lg shadow-md hover:bg-blue-600 hover:shadow-xl transition duration-300"
          onClick={() => {
            if (isFiltered) {
              setlistofProduct(productList);
              setIsFiltered(false);
            } else {
              const filteredProducts = listofProduct.filter(
                (product) => product.rating.rate >= 4
              );
              setlistofProduct(filteredProducts);
              setIsFiltered(true);
              return;
            }
          }}
        >
          {isFiltered ? "Remove Filter" : "Top Rated Products"}
        </button>
      </div>
      <div className="flex flex-wrap justify-between backdrop-blur-sm p-6 rounded-xl shadow-inner">
        {listofProduct?.map((product, index) => (
          <Products
            key={product.id}
            price={product.price}
            name={product.title}
            rating={product.rating["rate"]}
            imgsrc={product.image}
            modeName={modeName}
            id={product.id}
            />
        ))}
      </div>
    </>
  );
}

export default Productcard
