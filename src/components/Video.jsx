import React from 'react';
import photo from '../../public/background.jpg';

const Video = () => {
  return (
    <div className='h-80vh justify-center items-center text-center' style={{backgroundImage: `url(${photo})`, backgroundSize: '100% 60%', backgroundRepeat: 'no-repeat'}}>
      <div className='p-4'>
        <p className="text-4xl text-white m-2 p-3 font-bold text-sky-blue">VIDEO</p>
        <h2 className="text-2xl m-2 p-2 font-bold text-white  w-80 mx-auto">See what you can do with Routing Forms</h2>
      </div>
      <div className="w-4/4 h-1/2 mx-auto relative lg:w-2/4">
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: `url(${photo})`}}>
          <iframe
            className="mx-auto inset-0 w-4/5 h-4.5/5 relative mt-4"
            src="https://www.youtube.com/embed/B9Is7M-zh3Y?autoplay=0"
            frameBorder="0"
            allowFullScreen
            width="80%"
            height="90%"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Video;
