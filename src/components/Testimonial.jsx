import React, { useState } from 'react';

const data = [
    {
        img: '',
        testimonial: "rf1",
        name: "chinmaya1",
        position: "developer1"
    },
    {
        img: '',
        testimonial: "rf2",
        name: "chinmaya2",
        position: "developer2"
    },
    {
        img: '',
        testimonial: "rf3",
        name: "chinmaya3",
        position: "developer3"
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
        <div>
            {/* Display current testimonial */}
            <div>
                <img src={data[currentIndex].img} alt={`Image ${currentIndex}`} />
                <div>
                    <p>{data[currentIndex].testimonial}</p>
                    <p>{data[currentIndex].name}</p>
                    <p>{data[currentIndex].position}</p>
                </div>
            </div>

            {/* Buttons for navigation */}
            <div>
                <button onClick={handlePrevious}>Previous</button>
                <button onClick={handleNext}>Next</button>
            </div>
        </div>
    );
};

export default Testimonial;
