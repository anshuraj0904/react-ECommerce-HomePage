import React from "react";
// We'll use this for lazy loading, suspense and fallback using this(more about this in learnings.txt).

function Grocery() {
  return (
    <div className=" flex justify-center items-center">
      <div className="w-80 h-45 justify-center m-5 p-10 text-center bg-gray-100 rounded-xl shadow-md">
        <h1 className="text-2xl">This is a Grocery(Food Delivery) App in our clothing App</h1>
      </div>
    </div>
  );
}

export default Grocery;
