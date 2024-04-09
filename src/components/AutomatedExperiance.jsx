import React from 'react';
import photo from '../../public/schedule.png';

const AutomatedExperience = () => {
  return (
    <div className="flex flex-col justify-center items-center md:flex-row md:justify-between md:px-10 md:py-5 m-4 mb-4 h-80vh">
      <div className="md:w-1/2 md:mr-5">
        <img src={photo} alt="" className="w-full rounded-lg" />
      </div>
      <div className="md:w-1/2 md:ml-5 ">
        <div className="md:w-3/4 mx-auto ">
        <p className="text-xl font-semibold text-blue-500 mb-3">AUTOMATE EXPERIENCE</p>
        <h2 className="text-4xl mb-5 font-bold text-gray-900 ">Schedule efficiently and save everyone time</h2>
        <p className="text-lg text-gray-700">The faster you connect clients, students, or customers to the right people and resources, the more time everyone gets back.</p>
      </div></div>
    </div>
  );
};

export default AutomatedExperience;
