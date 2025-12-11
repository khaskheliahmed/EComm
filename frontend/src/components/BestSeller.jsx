import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { products } from '../assets/assets';
import Title from './Title';
import ProductItems from './ProductItems';

const BestSeller = () => {
    const {BestSeller} = useContext(ShopContext);
    const [bestSeller, setBestSeller] =useState([])

    useEffect(()=>{
        const bestSeller = products.filter((item)=>(item.bestseller))
        setBestSeller(bestSeller.slice(0,5))
    },[])

  return ( 
    <div className='my-10 '>
      <div className='text-center text-3xl py-8'>
        <Title text1={'BEST' } text2={'SELLER'} />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero magni assumenda architecto dicta perferendis deserunt doloribus nulla. Nostrum, tenetur eaque quo, ratione similique aspernatur natus facilis repudiandae ab culpa explicabo.
        </p>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {bestSeller.map((item,index)=>(
            <ProductItems
              key={index}
              id={item._id}
              image={item.image}
               price={item.price}
              name={item.name}
            
            />
        ))
        }
        
      </div>
    </div>
  )
}

export default BestSeller
