import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AboutSkeleton from "../skeleton/AboutSkeleton";
import { useOutletContext } from "react-router-dom";
import useGetSingleProduct from "../../hook/useGetSingleProduct";

function ProductDetail() {
  const { id } = useParams();
  const { modeName } = useOutletContext();

  const product = useGetSingleProduct(id);

  if (product === null) {
    return <AboutSkeleton />;
  }

  const { title, image, price, category } = product;

  return (
    <div className=" flex justify-center items-center">
      <div className="max-w-xs rounded-2xl shadow-md border m-4 p-4 hover:shadow-lg transition duration-300">
        <img
          src={image}
          alt="Polo T-shirt"
          className="w-100 h-70 object-cover rounded-xl transform transition-transform duration-300 hover:scale-110"
        />
        <div className="mt-4 flex flex-col justify-center items-center">
          <h1
            className={
              modeName === "Light"
                ? "text-xl font-semibold text-gray-800"
                : "text-xl font-semibold text-white"
            }
          >
            {title}
          </h1>
          <p
            className={
              modeName === "Light"
                ? "text-xl font-semibold text-gray-800"
                : "text-xl font-semibold text-white"
            }
          >
            Category: {category}
          </p>
          <p
            className={
              modeName === "Light"
                ? "text-gray-600 text-center mt-1"
                : "text-white text-center mt-1"
            }
          >
            ⭐ {product.rating.rate} ratings
          </p>
          <p
            className={
              modeName === "Light"
                ? "text-gray-800 text-center font-medium mt-2"
                : "text-white text-center font-medium mt-2"
            }
          >
            Price: ${price}
          </p>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 cursor-pointer rounded-lg shadow-md hover:bg-blue-600 hover:shadow-xl transition duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
