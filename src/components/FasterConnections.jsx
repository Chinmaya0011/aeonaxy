import React from 'react';
import photo from '../../public/faster.png';

const FasterConnection = () => {
  return (
    <div className="flex flex-col justify-center items-center md:flex-row md:justify-between md:px-10 md:py-5 m-6 h-80vh">
      <div className="md:w-1/2 md:mr-5">
        <img src={photo} alt="" className="w-full rounded-lg" />
      </div>
      <div className="md:w-1/2 md:ml-5 ">
        <div className="md:w-3/4 mx-auto ">
        <p className="text-xl font-semibold text-blue-500 mt-2 mb-2">FASTER CONNECTION</p>
        <h2 className="text-4xl mb-5 font-bold text-gray-900 ">No more missed opportunities</h2>
        <p className="text-lg text-gray-700">Embed Routing Forms to your website and eliminate the booking delays and customer drop off typically caused by manual follow up.</p>
      </div></div>
    </div>
  );
};

export default FasterConnection;
