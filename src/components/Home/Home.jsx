import React from 'react';

function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200">
      <div className="bg-white shadow-xl rounded-2xl p-10 text-center max-w-lg">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to the Home Page</h1>
        <p className="text-gray-600 text-lg mb-6">
          This is your starting point. Explore our features, products, and more!
        </p>
        <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 cursor-pointer transition duration-300 shadow-md">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Home;
