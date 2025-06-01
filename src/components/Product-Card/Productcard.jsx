import React, { useEffect, useState } from "react";
import Products from "../Products/Products.jsx";
import Skeleton from "../skeleton/Skeleton.jsx";

function Productcard() {
  const [isFiltered, setIsFiltered] = useState(false);
  const [productList, setProductList] = useState([]); // full data
  const [listofProduct, setlistofProduct] = useState([]); // filtered data

  const fetchData = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    console.log("Data: ", data);
    const resData = await data.json();
    return resData;
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetchData();
        console.log("Response Data: ", res);              
        setProductList(res);
        setlistofProduct(res)
      } catch (error) {
        console.log("Error fetching data: ", error);
      }
    };
    getData();
  }, []);



  if (productList.length === 0) {
    return <Skeleton />;
  }

  return (
    <>
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
      <div className="flex flex-wrap justify-between backdrop-blur-sm p-6 rounded-xl shadow-inner">
        {listofProduct?.map((product, index) => (
          <Products
            key={product.id}
            price={product.price}
            name={product.title}
            rating={product.rating["rate"]}
            imgsrc={product.image}
          />
        ))}
      </div>
    </>
  );
}

export default Productcard;
