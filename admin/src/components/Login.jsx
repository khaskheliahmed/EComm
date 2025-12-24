import React from "react";
import axios from 'axios'
import { useState } from "react";
import { backendUrl } from "../App";

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassord] = useState('');


    const onSubmitHandler = async(e) =>{
        try {

            e.preventDefault();
            const response = await axios.post(backendUrl + '/api/user/admin',{email,password})
            console.log(response);
            
        } catch (error) {
            
        }
    }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">
            Admin Panel
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Login to continue
          </p>
        </div>

        {/* Form */}
        <form  onSubmit={onSubmitHandler}   className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
            onChange={(e)=> setEmail(e.target.value)}
            value={email}
              type="email"
              placeholder="admin@example.com"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
             onChange={(e)=> setPassord(e.target.value)}
            value={password}
              type="password"
              placeholder="Enter your password"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-black text-white font-medium py-2.5 rounded-lg transition duration-200"
          >
            Login
          </button>
        </form>

      </div>
    </div>
  );
};

export default Login;
