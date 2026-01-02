import React, { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext.jsx";
import axiosInstance from "../utils/utils.js";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const { setToken, navigate } = useContext(ShopContext);

  const [mode, setMode] = useState("signup");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const isSignup = mode === "signup";

 const onsubmitHandler = async (e) => {
  e.preventDefault();

  try {
    const url = isSignup ? "/api/user/register" : "/api/user/login";
    const payload = isSignup
      ? { name, email, password }
      : { email, password };

    const response = await axiosInstance.post(url, payload);


    if (!response.data.success) {
      toast.error(response.data.message || "Invalid credentials");
      return;
    }

    
    const token = response.data.token;
    setToken(token);
    localStorage.setItem("token", token);

    toast.success("Login successfully ");
    navigate("/");

  } catch (error) {
  
    const errorMessage =
      error?.response?.data?.message ||
      error?.response?.data?.error ||
      "Invalid email or password";

    toast.error(errorMessage);
  }
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300 px-4 perspective-1000">
      
      {/* 3D Card */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 
        transform transition-all duration-500 
        hover:-translate-y-2 hover:rotate-x-3 hover:rotate-y-3 hover:scale-[1.02]">

        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-2">
          {isSignup ? "Create Account" : "Welcome Back"}
        </h2>
        <p className="text-center text-gray-500 mb-6">
          {isSignup ? "Sign up to continue" : "Login to your account"}
        </p>

        {/* Form */}
        <form onSubmit={onsubmitHandler} className="space-y-4">
          
          {isSignup && (
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-black outline-none"
              required
            />
          )}

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-black outline-none"
            required
          />

          {/* Password with Eye */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-black outline-none pr-10"
              required
            />

            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 hover:text-black"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg font-medium 
              hover:shadow-xl hover:translate-y-[-1px] transition-all duration-300"
          >
            {isSignup ? "Sign Up" : "Login"}
          </button>
        </form>

        {/* Switch */}
        <div className="text-center mt-5 text-sm">
          {isSignup ? (
            <p>
              Already have an account?{" "}
              <span
                onClick={() => setMode("login")}
                className="font-semibold cursor-pointer hover:underline"
              >
                Login
              </span>
            </p>
          ) : (
            <p>
              Don’t have an account?{" "}
              <span
                onClick={() => setMode("signup")}
                className="font-semibold cursor-pointer hover:underline"
              >
                Sign Up
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
