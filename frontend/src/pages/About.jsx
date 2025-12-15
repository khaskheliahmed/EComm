import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'

const About = () => {
  return (

    <div>
    <div className='text-2xl text-center pt-8 border-t  '>

      <Title text1={'ABOUT'} text2={'US'}  />
      
    </div>

    <div className='my-10 flex flex-col md:flex-row gap-16'>
      <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />

      <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray600'>
         <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quod ratione id illo pariatur, maxime ullam, quam libero sapiente iusto veritatis doloribus nesciunt numquam consectetur quibusdam, recusandae quae tenetur quas!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore labore dolorum, sit placeat, voluptatum animi nihil quibusdam suscipit soluta, voluptates reprehenderit pariatur dolorem eos enim facere molestiae nam impedit unde?</p>
        <b>Our Mission</b>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum distinctio consequuntur repellendus repudiandae porro, voluptas veritatis harum vero velit, necessitatibus deserunt modi ut omnis voluptatem corrupti ducimus impedit eos ipsa!</p>
      </div>
    </div>  

    <div className='text-4xl py-4'>
   <Title  text1={'WHY'} text2={'CHOOSE US '} />
    </div>

    <div className='flex flex-col text-sm md:flex-row mb-20 '>
         <div className='border px-10 md:px-10 py-16 flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum eveniet iusto fugit fuga vero sequi ratione at magnam omnis dolorem dicta tenetur et repellat odio quis a, nemo dolore amet.</p>
          </div>  
           <div className='border px-10 md:px-10 py-16 flex-col gap-5'>
          <b>convenience:</b>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum eveniet iusto fugit fuga vero sequi ratione at magnam omnis dolorem dicta tenetur et repellat odio quis a, nemo dolore amet.</p>
          </div>  
           <div className='border px-10 md:px-10 py-16 flex-col gap-5'>
          <b>Exceptional Customer service:</b>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum eveniet iusto fugit fuga vero sequi ratione at magnam omnis dolorem dicta tenetur et repellat odio quis a, nemo dolore amet.</p>
          </div>   
    </div>
    </div>
  )
}

export default About
