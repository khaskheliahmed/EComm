import React, { useState } from "react";
import { assets } from "../assets/assets";
import axios from "axios";
import { backendUrl } from "../App";
const Add = ({token}) => {
  // Images
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [image4, setImage4] = useState(null);

  // Text fields
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Men");
  const [subCategory, setSubCategory] = useState("Topwear");
  const [price, setPrice] = useState("");

  // Sizes & bestseller
  const [sizes, setSizes] = useState([]);
  const [bestseller, setBestseller] = useState(false);

  // Size toggle handler
  const toggleSize = (size) => {
    setSizes((prev) =>
      prev.includes(size)
        ? prev.filter((s) => s !== size)
        : [...prev, size]
    );
  };

  // Submit
 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const formdata = new FormData();
    formdata.append("name", name);
    formdata.append("description", description);
    formdata.append("price", price);
    formdata.append("category", category);
formdata.append("subCategory", subCategory);
    formdata.append("bestseller", bestseller);
    formdata.append("sizes", JSON.stringify(sizes));

    image1 && formdata.append("image1", image1);
    image2 && formdata.append("image2", image2);
    image3 && formdata.append("image3", image3);
    image4 && formdata.append("image4", image4);

    const response = await axios.post(
      backendUrl + "/api/product/add",
      formdata,
     {
      headers:{token}
     }
    );

    console.log("SUCCESS", response.data);

  } catch (error) {
    console.error("ERROR 👉", error.response?.data || error.message);
  }
};


  return (
    <div className="w-full min-h-screen bg-gray-50 p-6">
      <form
        onSubmit={handleSubmit}
        className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6 space-y-6"
      >
        <h2 className="text-2xl font-semibold text-gray-800">
          Add New Product
        </h2>

        {/* Image Upload */}
        <div>
          <p className="text-sm font-medium text-gray-700 mb-2">
            Upload Images
          </p>

          <div className="flex gap-4 flex-wrap">
            {[
              { img: image1, setImg: setImage1, id: "image1" },
              { img: image2, setImg: setImage2, id: "image2" },
              { img: image3, setImg: setImage3, id: "image3" },
              { img: image4, setImg: setImage4, id: "image4" },
            ].map(({ img, setImg, id }) => (
              <label
                key={id}
                htmlFor={id}
                className="w-24 h-24 border-2 border-dashed rounded-lg flex items-center justify-center cursor-pointer hover:border-blue-500 transition"
              >
                <img
                  src={img ? URL.createObjectURL(img) : assets.upload_area}
                  alt="upload"
                  className="w-16 object-cover"
                />
                <input
                  type="file"
                  id={id}
                  hidden
                  onChange={(e) => setImg(e.target.files[0])}
                />
              </label>
            ))}
          </div>
        </div>

        {/* Product Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Product Name
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="w-full border rounded-lg px-4 py-2"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Product Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="4"
            className="w-full border rounded-lg px-4 py-2 resize-none"
            required
          />
        </div>

        {/* Category */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border rounded-lg px-3 py-2"
          >
            <option>Men</option>
            <option>Women</option>
            <option>Kids</option>
          </select>

          <select
            value={subCategory}
            onChange={(e) => setSubCategory(e.target.value)}
            className="border rounded-lg px-3 py-2"
          >
            <option>Topwear</option>
            <option>Bottomwear</option>
            <option>Winterwear</option>
          </select>

          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            type="number"
            placeholder="25"
            className="border rounded-lg px-4 py-2"
          />
        </div>

        {/* Sizes */}
        <div>
          <p className="mb-2">Product sizes</p>
         <div className="flex gap-3">
                <div onClick={()=> setSizes(prev => prev.includes("S")? prev.filter(item =>item !== "S") : [...prev,"S"])}>
                  <p className={` ${sizes.includes("S") ? "bg-pink-200" : "bg-gray-100-"} px-3 py-1 cursor-pointer`}>S</p>
                </div>

                 <div onClick={()=> setSizes(prev => prev.includes("M")? prev.filter(item =>item !== "M") : [...prev,"M"])}>
                  <p className={` ${sizes.includes("M") ? "bg-pink-200" : "bg-gray-100-200"} px-3 py-1 cursor-pointer`}>M</p>
                </div>
                 <div onClick={()=> setSizes(prev => prev.includes("L")? prev.filter(item =>item !== "L") : [...prev,"L"])}>
                  <p className={` ${sizes.includes("L") ? "bg-pink-200" : "bg-gray-100-200"} px-3 py-1 cursor-pointer`}>L</p>
                </div>
                 <div onClick={()=> setSizes(prev => prev.includes("XL")? prev.filter(item =>item !== "XL") : [...prev,"XL"])}>
                  <p className={` ${sizes.includes("XL") ? "bg-pink-200" : "bg-gray-100-200"} px-3 py-1 cursor-pointer`}>XL</p>
                </div>
                 <div onClick={()=> setSizes(prev => prev.includes("XXL")? prev.filter(item =>item !== "XXL") : [...prev,"XXL"])}>
                  <p className={` ${sizes.includes("XXL") ? "bg-pink-200" : "bg-gray-50-200"} px-3 py-1 cursor-pointer`}>XXL</p>
                </div>
               
         </div>
        </div>

        {/* Bestseller */}
        <div className="flex gap-2 items-center">
          <input
            type="checkbox"
            id="bestseller"
            checked={bestseller}
            onChange={(e) => setBestseller(e.target.checked)}
          />
          <label htmlFor="bestseller" className="cursor-pointer">
            Add to bestseller
          </label>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default Add;
