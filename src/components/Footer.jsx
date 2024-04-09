import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faAndroid } from '@fortawesome/free-brands-svg-icons';
import { faTwitter, faFacebook, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (

<div className='flex justify-between h-auto p-8 w-full flex-col lg:flex-row ' >

<div className='section1'>
            <div className='w-3/4 '>
            <h1 className="text-4xl font-bold mb-6">
  Easy <span className="text-blue-500">ahead</span>
</h1>


                <p className='mb-10 w-3/4'>We take the work out of connecting with others
                    so you can accomplish more.
                </p>

                <select name="language" id="1" class="p-2 w-full mt-2 mb-10 border-b-2 border-black">
  <option value="English">English</option>
  <option value="Hindi">Hindi</option>
</select>


            </div>

            <div>
          
            <div className="flex  items-center w-3/4 h-full mb-8">
  <button className="flex items-center bg-blue-500 text-white px-2 py-1 rounded mr-2">
    <FontAwesomeIcon icon={faApple} size="lg" className="mr-1" />
    <div className='flex flex-col'>
        <h1 className="text-sm font-bold">Download on the</h1>
        <span className="text-xs">App Store</span>
    </div>
  </button>
  <button className="flex items-center bg-green-500 text-white px-2 py-1 rounded bg-black">
    <FontAwesomeIcon icon={faAndroid} size="lg" className="mr-1" />
    <div className='flex flex-col'>
      <h1 className="text-sm font-bold">Get it on</h1>
      <span className="text-xs">Google Play</span>
    </div>
  </button>
</div>



<div className="flex mt-6">
  <div className="flex items-center gap-4 p-2">
    <FontAwesomeIcon icon={faTwitter} className="text-blue-500 text-2xl" />
  </div>
  <div className="flex items-center gap-4 p-2">
    <FontAwesomeIcon icon={faFacebook} className="text-blue-500 text-2xl" />
  </div>
  <div className="flex items-center gap-4 p-2">
    <FontAwesomeIcon icon={faInstagram} className="text-purple-500 text-2xl" />
  </div>
  <div className="flex items-center gap-4 p-2">
    <FontAwesomeIcon icon={faLinkedin} className="text-blue-500 text-2xl" />
  </div>
  <div className="flex items-center gap-4 p-2">
    <FontAwesomeIcon icon={faYoutube} className="text-red-500 text-2xl" />
  </div>
</div>
</div>
  </div>
            


  <div className='section2'>
  <div className="mb-4">
    <h1 className="font-bold text-2xl mb-4">About</h1>
    <p className="mb-4">About Calendly</p>
    <p className="mb-4">Contact Sales</p>
    <p className="mb-4">Newsroom</p>
    <p className="mb-4">Careers</p>
    <p className="mb-4">Security</p>
  </div>
  <div>
    <h1 className='font-bold text-2xl mb-4'>Support</h1>
    <p className='mb-4'>Help Center</p>
    <p className='mb-4'>Video Tutorials</p>
    <p className='mb-4'>Cookies Settings</p>
  </div>
</div>

<div className='section-3 section2'>
  <div className="mb-4">
    <h1 className="font-bold text-2xl mb-4">Solutions</h1>
    <p className="mb-4">Customer Success</p>
    <p className="mb-4">Sales</p>
    <p className="mb-4">Recruiting</p>
    <p className="mb-4">Information Technology</p>
    <p className="mb-4">Marketing</p>
  </div>
  <div>
    <h1 className='font-bold text-2xl mb-4'>Add-ons</h1>
    <p className='mb-4'>Download for Chrome</p>
    <p className='mb-4'>Download for Firefox</p>
  </div>
</div>

<div className='section-4 section2'>
  <div className="mb-4">
    <h1 className="font-bold text-2xl mb-4">Popular Features</h1>
    <p className="mb-4">Embed Calendly</p>
    <p className="mb-4">Availability</p>
    <p className="mb-4">Sending Notifications</p>
    <p className="mb-4">Using Calendly Mobile</p>
  </div>
  <div>
    <h1 className='font-bold text-2xl mb-4'>Developers</h1>
    <p className='mb-4'>Developer Tools</p>
  </div>
</div>

    </div>
  )
}

export default Footer