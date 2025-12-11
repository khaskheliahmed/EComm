import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItems from '../components/ProductItems';

const Collection = () => {
  const {products , search , showSearch,} = useContext(ShopContext)
  const [showFilter ,setShowFilter] = useState(false);
 const[filterProduct , setFilterProduct] =useState([])
const [category, setCategory] = useState([]);
const [subCategory, setSubCategory] = useState([]);
const [sortType ,setSortType] = useState('redavent')

const toggleCategory = (e) => {
  if(category.includes(e.target.value)){
      setCategory(prev=> prev.filter(item => item !== e.target.value))
  }else{
    setCategory(prev => [...prev, e.target.value])
  }
}

const toggleSubCategory = (e)=>{
  if(subCategory.includes(e.target.value)){
    setSubCategory(prev=> prev.filter(item => item !== e.target.value))
  }else{
    setSubCategory(prev => [...prev, e.target.value])
  }
}

const applyFilter =()=>{
  let productsCopy = products.slice();
  
 if(showSearch && search){
   productsCopy = productsCopy.filter(item => item.name.tolowercase().includes(search.tolowercase))
 }


  if(category.length > 0){
        productsCopy = productsCopy.filter(item => category.includes(item.category))
  }

  if(subCategory.length >0 ){
         productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory))
  }

  setFilterProduct(productsCopy)
}

const sortProduct = () =>{
  let fyCopy = filterProduct.slice();


  switch(sortType){
    case 'low-high':
      setFilterProduct(fyCopy.sort((a,b)=>(a.price - b.price)));
      break;


      case 'high-low':
        setFilterProduct(fyCopy.sort((a,b) =>(b.price - a.price)));
         break;
        default:
          applyFilter();
          break;
  }
}


useEffect(()=>{
      applyFilter();
},[category,subCategory,search,showSearch])

useEffect(()=>{
   sortProduct();
},[sortType])
 
  return (
    <div className='flex flex-col sm:flex-row sm:gap-10 pt-10 border-t gap-1'>
      

{/* //filter options */}

<div className='min-w-60'>
  <p onClick={()=>setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS

    <img src={assets.dropdown_icon} className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''} `} alt="" />
  </p>
  
  {/* categroy filter */}
  <div className={`border border-gray-600 pl-5  py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
      <p className='mb-3 text-sm font-medium'>CATEGROIES</p>
      <div className='flex flex-col gap-2 font-light text-sm text-gray-700 '>
        
          <p className='flex gap-2'> 
             <input
            type="checkbox"
             className='w-3 '
             value={'Men'}
            onChange={toggleCategory}
             />Men
          </p>
           <p className='flex gap-2'>
             <input
            type="checkbox"
             className='w-3 '
             value={'Women'}
        onChange={toggleCategory}
             />Women
          </p>
           <p className='flex gap-2'> 
             <input
            type="checkbox"
             className='w-3 '
             value={'Kids'}
 onChange={toggleCategory}
             />Kids
          </p>

      </div>
  </div>
  {/* SubCategroyFilter */}
<div className={`border border-gray-600 pl-5  py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
      <p className='mb-3 text-sm font-medium'>TYPE</p>
      <div className='flex flex-col gap-2 font-light text-sm text-gray-700 '>
        
          <p className='flex gap-2'> 
             <input
            type="checkbox"
             className='w-3 '
             value={'Topwear'}
             onChange={toggleSubCategory}
             />Topwear
          </p>
           <p className='flex gap-2'>
             <input
            type="checkbox"
             className='w-3 '
             value={'Bottomwear'}
onChange={toggleSubCategory}
             />BottomWear
          </p>
           <p className='flex gap-2'> 
             <input
            type="checkbox"
             className='w-3 '
             value={'Winterwear'}
onChange={toggleSubCategory}
             />Winterwear
          </p>

      </div>
  </div>

</div> 
 {/* rightside */}
 <div className='flex-1'>
  <div className='flex justify-between text-base sm:text-2xl mb-4'>
    <Title text1={'ALL'} text2={'COLLECTION'} />
    {/* PRODUCT SORT */}
    <select onChange={(e)=>setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>

      <option  value="redavent">Sort by: Relavent</option>
      <option  value="low-high">Sort by: Low to High</option>
      <option value="high-low">Sort by: High to Low</option>

    </select>
  </div>
  {/* map products */}
  <div className='grid grid-cols-2 md:grid-col-3 lg:grid-cols-4 gap-4 gap-y-6'>
  {
    filterProduct.map((item,index )=>(
      <ProductItems
      key={index}
      name={item.name}
      id={item._id}
      price={item.price}
      image={item.image}
      />
    ))
  }
  </div>
 </div>
    </div>
  )
}

export default Collection
