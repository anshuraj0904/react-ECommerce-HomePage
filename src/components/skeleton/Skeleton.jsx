import React from 'react'

function Skeleton() {
  return (
    <div className="flex flex-wrap gap-6 p-6">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="w-72 h-96 bg-white rounded-xl shadow-md p-4 animate-pulse"
        >
          <div className="w-full h-48 bg-gray-300 rounded-xl mb-4"></div>
          <div className="space-y-3 items-center">
            <div className="h-4 bg-gray-300 rounded w-2/3"></div>
            <div className="h-4 bg-gray-300 rounded w-2/3"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2"></div>
            <div className="h-6 bg-gray-300 rounded w-28 mt-4"></div>
          </div>
        </div>
      ))}
    </div>
  );
}


export default Skeleton