import React from 'react'
import photo from '../../public/conversion.jpg'
import style from '../styles/better.module.css'
const BetterConversions = () => {
  return (
    <div className="flex flex-col items-center sm:flex-row sm:h-80vh sm:mr-2 sm:ml-2 sm:mt-4 sm:mb-4">
    <div className="w-full sm:w-1/2 sm:mr-6">
      <div className={style.better}>
        <h4 className="mb-4 text-base text-blue-500 uppercase font-semibold">BETTER CONVERSIONS</h4>
        <h1 className="text-gray-600 mb-4 text-3xl font-bold mt-2">Screen and qualify website visitors or invitees</h1>
        <p className="text-gray-600 mt-4 text-lg">Prioritize scheduling with high-level leads based on industry, company size, and other requirements. Send people who aren't a fit to a referral page or other resource.</p>
      </div>
    </div>
    <div className="w-full sm:w-1/2 mt-6 sm:mt-0 flex justify-center items-center">
  <img src={photo} alt="" className="h-4/5 w-4/5 sm:h-auto sm:w-auto m-8 p-4" />
</div>

  </div>
  
  )
}

export default BetterConversions