import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';
import { assets } from '../assets/assets';
import CartTotal from '../components/CartTotal';

const Card = () => {

  const { products, currency, cardItems, updateQuantity } = useContext(ShopContext);
  const [cartData, setCartData,] = useState([]);
  const [showConfirm, setShowConfirm] = useState(false);
  const [deleteItem, setDeleteItem] = useState({ id: null, size: null });

  useEffect(() => {
    const temData = [];

    for (const items in cardItems) {
      for (const item in cardItems[items]) {
        if (cardItems[items][item] > 0) {
          temData.push({
            _id: items,
            size: item,
            quantity: cardItems[items][item]
          })
        }
      }
    }

    setCartData(temData);
  }, [cardItems])


  return (
    <div className='border-t pt-14'>
      <div className='text-2xl mb-3'>
        <Title text1={'YOUR'} text2={'CART'} />
      </div>

      <div>
        {
          cartData.map((item, index) => {
            const productData = products.find(p => p._id === item._id);

            return (
              <div
                key={index}
                className='py-4 border-t border-b grid grid-cols-[1fr_auto_auto] items-center gap-4'
              >

                {/* LEFT SIDE (Image + All Text) */}
                <div className='flex items-start gap-4'>
                  <img className='w-16 sm:w-20 rounded' src={productData.image[0]} alt="" />

                  <div className='flex flex-col'>
                    <p className='text-sm sm:text-lg font-medium'>{productData.name}</p>



                    <div className='flex items-center gap-5 mt-2 '>
                      <p>{currency}{productData.price} </p>
                      <p className='px-2 sm:px-3 sm:py-1 border bg-slate-50'> {item.size} </p>
                    </div>
                  </div>
                </div>

                <input onChange={(e) => e.target.value === '' || e.target.value === '0' ? null : updateQuantity(item._id, item.size, Number(e.target.value))} className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1' type="number"
                  min={1}
                  defaultValue={item.quantity}
                  id="" />

                <img
                  onClick={() => {
                    setDeleteItem({ id: item._id, size: item.size });
                    setShowConfirm(true);
                  }}
                  src={assets.bin_icon}
                  className='w-4 mr-4 sm:w-5 cursor-pointer'
                  alt=""
                />


              </div>
            )
          })
        }
      </div>




<div className='flex justify-between my-20'>
  <div className='w-full sm:w-[450]'>
<CartTotal/>
  </div>

</div>

      {showConfirm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn">
          <div className="bg-white rounded-xl shadow-2xl w-[90%] max-w-sm p-6 animate-scaleIn">

            <div className="flex flex-col items-center text-center">
              {/* <img 
          src="https://cdn-icons-png.flaticon.com/512/463/463612.png"
          alt="warning"
          className="w-14 mb-3 opacity-80"
        /> */}

              <h2 className="text-xl font-semibold text-gray-900">
                Remove Item?
              </h2>

              <p className="text-gray-500 text-sm mt-2">
                Are you sure you want to remove this item from your cart? This action cannot be undone.
              </p>

              {/* Buttons */}
              <div className="flex gap-3 mt-6 w-full">
                <button
                  className="w-1/2 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition"
                  onClick={() => setShowConfirm(false)}
                >
                  Cancel
                </button>

                <button
                  className="w-1/2 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                  onClick={() => {
                    updateQuantity(deleteItem.id, deleteItem.size, 0);
                    setShowConfirm(false);
                  }}
                >
                  Yes, Delete
                </button>
              </div>
            </div>

          </div>
        </div>
      )}



    </div>
  )
}

export default Card
