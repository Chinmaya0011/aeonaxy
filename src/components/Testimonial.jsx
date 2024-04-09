import React, { useState } from 'react';
import photo1 from '../../public/user1.jpg'
import photo2 from '../../public/user2.jpg'
import photo3 from '../../public/user3.jpg'

const data = [
    {
        img: photo1,
        testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut quam id lacus consequat aliquam.",
        name: "Chinmaya Patel",
        position: "Software Engineer"
      },
      {
        img: photo2,
        testimonial: "Suspendisse potenti. Morbi vitae sem ut lorem dignissim consectetur.",
        name: "John Doe",
        position: "Web Developer"
      },
      {
        img: photo3,
        testimonial: "Nam at sapien bibendum, convallis purus a, vehicula metus.",
        name: "Emily Smith",
        position: "UI/UX Designer"
      }
];

const Testimonial = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
    };

    return (
        <div className=' flex flex-col sm:flex-row w-full justify-center items-center text-justify mt-4 h-50vh bg-blue-50'>

  {/* Display current testimonial */}
  <div className='flex items-center justify-center text-center sm:w-1/2 h-70 mb-4 rounded-lg'>
  <img className='w-200px h-200px object-cover border-r-2 rounded-full' src={data[currentIndex].img} alt={`Image ${currentIndex}`} />
</div>



  <div className='flex flex-col justify-start  sm:w-1/2'>
  <div className='w-80'>

    <p className='text-lg font-semibold sm:text-2xl mb-5'>{data[currentIndex].testimonial}</p>

    <p className='text-sm text-gray-600 sm:text-base mb-2'>{data[currentIndex].name}</p>

    <p className='text-xs text-gray-600 mb-2'>{data[currentIndex].position}</p>
    
    
    {/* Buttons for navigation */}
    <div className='mt-2'>
      <button className='px-4 py-2 mr-2 bg-gray-400 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-gray-600' onClick={handlePrevious}>{'<'}</button>
      <button className='px-4 py-2 bg-gray-400 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600' onClick={handleNext}>{'>'}</button>
    </div></div>
  </div>
</div>


    );
};

export default Testimonial;
