import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewletterBox from '../components/NewletterBox'

const Content = () => {
  return (
    <div>
      {/* Heading */}
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      {/* Main Section */}
      <div className='my-16 flex flex-col md:flex-row items-start justify-center gap-16 max-w-6xl mx-auto px-4'>
        
        {/* Left Image */}
        <img
          src={assets.contact_img}
          alt="Contact"
          className='w-full md:w-[450px] object-cover'
        />

        {/* Right Content */}
        <div className='flex flex-col gap-6 text-gray-600'>
          <p className='font-semibold text-xl'>OUR STORE</p>

          <p>
            77860 Johar Karachi <br />
            <b>Suite 350, Lahore, Pakistan</b>
          </p>

          <p>Tel: (415) 555-0132</p>
          <p>Email: yousifali@gmail.com</p>

          <p className='font-semibold text-xl mt-6'>CAREERS AT FOREVER</p>
          <p>Learn more about our teams and job openings.</p>

          <button className='border border-gray-40 px-6 py-2 w-fit hover:bg-black transition'>
            Explore Jobs
          </button>
        </div>
      </div>
    <NewletterBox/>
      
    </div>
  )
}

export default Content
