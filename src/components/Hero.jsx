import React from 'react';

const Hero = () => {
  return (
    <div className="mx-auto mb-4 max-w-screen-sm justify-center items-center text-center mt-10 font-bold m-4 p-4">
      <p className="text-blue-400">ROUTING FROMS</p>
      <h1 className="text-4xl font-bold mt-5 mb-8">Make higher quality connections</h1>
      <p className="text-1xl text-blue-300 mb-6 font-sans">Request information from website visitors or invitees and based on their response, route them to the right person or resource. Available on Professional plans and up.</p>
      <div className="space-x-4 mt-10">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded border" style={{ borderRadius: '30px' }}>Start for free</button>
        <button className="border border-black border-solid bg-white-100 hover:border-none text-gray-800 font-bold py-3 px-6 rounded" style={{ borderRadius: '30px' }}>Talk with sales</button>
      </div>
    </div>
  );
}

export default Hero;
