import axios from "axios";
import React, { useEffect, useState } from "react";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";

const List = ({token}) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/product/list");

      if (response.data.success) {
        setList(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Failed to fetch products");
    }
  };

  const removePorduct = async (id)=>{
           
    try {

      const response = await axios.post(backendUrl + '/api/product/remove', {id}, {headers:{token}})
      if(response.data.success){
              
        toast.success(response.data.message)
        await fetchList()
      }else{
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error);
      
      toast.error(error.message);
    }
  }

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="p-4 md:p-6">
      <h2 className="text-xl font-semibold mb-4">All Products</h2>

      {/* Desktop Table Header */}
      <div className="hidden md:grid grid-cols-[80px_1fr_1fr_120px_100px] items-center bg-gray-100 border rounded-md px-4 py-2 text-sm font-semibold">
        <span>Image</span>
        <span className="ml-10">Name</span>
        <span>Category</span>
        <span>Price</span>
        <span className="text-center">Action</span>
      </div>

      {/* Product List */}
      <div className="space-y-4 md:space-y-0">
        {list.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:grid md:grid-cols-[80px_1fr_1fr_120px_100px] items-start md:items-center gap-3 md:gap-0 border rounded-lg px-4 py-3 hover:shadow-sm transition"
          >
            {/* Image */}
            <img
              src={item.image?.[0]}
              alt={item.name}
              className="w-20 h-20 object-cover rounded-md border "
            />

            {/* Name */}
            <p className="font-medium text-gray-800 ml-10">{item.name}</p>

            {/* Category */}
            <p className="text-gray-500">{item.category}</p>

            {/* Price */}
            <p className="font-semibold text-gray-700">
              {currency}
              {item.price}
            </p>

            {/* Action */}
            <button  onClick={() => removePorduct(item._id)}  className="self-start md:self-center text-red-600 hover:text-red-800 font-semibold">
              ✕
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
