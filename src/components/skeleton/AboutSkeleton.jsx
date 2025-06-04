import React from 'react'

function AboutSkeleton() {
  return (

      <div className={'max-w-md mx-auto m-10 shadow-lg rounded-2xl p-8 border border-gray-200 bg-white'}>
          <div className="space-y-3 items-center">
            <div className="h-4 bg-gray-300 rounded w-2/3"></div>
            <div className="h-4 bg-gray-300 rounded w-2/3"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2"></div>
            <div className="h-6 bg-gray-300 rounded w-28 mt-4"></div>
          </div>
        </div>
     
  );
}


export default AboutSkeleton