import React from 'react';

const MoreBusiness = () => {
  return (
    <div className="flex items-center justify-center bg-blue-900 h-40vh rounded-lg">
      <div className="text-center text-white w-4/5 xl:w-2/5">
        <h1 className="text-2xl sm:text-3xl">Win more business with less work.</h1>
        <p className="mt-4 text-lg sm:text-xl px-4 py-2">Routing Forms help you screen and qualify website visitors, automate scheduling, and offer a seamless experience.</p>
        <div className="mt-4 flex justify-center space-x-4">
          <button className="px-4 py-2 rounded-full bg-green-500 hover:bg-green-600">Start for free</button>
          <button className="px-4 py-2 rounded-full border border-white">Talk To Sales</button>
        </div>
      </div>
    </div>
  );
}

export default MoreBusiness;
