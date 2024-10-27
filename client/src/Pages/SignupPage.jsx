import React, { useState } from "react";
import toastImage from "../assets/toast.png";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import bg2 from "../assets/bg2.png";
import axios from "axios";

function SignupPage() {
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const signup = async () => {
    try {
      await axios.post("/auth/signup", { fullname, username, email, password });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${bg2})`,

        backgroundSize: "contain",
      }}
      className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-30"
    >
      <div className="p-8 w-[470px] bg-white rounded-lg shadow-lg">
        <div className="flex flex-col items-center gap-6">
          <img src={toastImage} width={60} alt="Toast" />
          <h1 className="text-black text-2xl font-semibold tracking-wide text-center">
            Welcome to Toast
          </h1>

          <input
            type="text"
            placeholder="Fullname"
            value={fullname} // Bind to fullname state
            onChange={(e) => setFullname(e.target.value)} // Update fullname state
            className="bg-gray-100 p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded-md w-full"
          />
          <input
            type="text"
            placeholder="Username"
            value={username} // Bind to username state
            onChange={(e) => setUsername(e.target.value)} // Update username state
            className="bg-gray-100 p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded-md w-full"
          />
          <input
            type="email" // Email type
            placeholder="Email"
            value={email} // Bind to email state
            onChange={(e) => setEmail(e.target.value)} // Update email state
            className="bg-gray-100 p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded-md w-full"
          />
          <div className="relative flex items-center w-full">
            <input
              type={showPassword ? "text" : "password"} // Toggle password visibility
              placeholder="Password"
              value={password} // Bind to password state
              onChange={(e) => setPassword(e.target.value)} // Update password state
              className="bg-gray-100 p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded-md pl-10 w-full"
            />
            {showPassword ? (
              <FaEye
                onClick={() => setShowPassword(!showPassword)} // Toggle password visibility
                color="gray"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
              />
            ) : (
              <FaEyeSlash
                onClick={() => setShowPassword(!showPassword)} // Toggle password visibility
                color="gray"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
              />
            )}
          </div>
          <button
            onClick={signup}
            className="bg-cyan-500 py-2 shadow-md px-10 border border-cyan-500 rounded-lg text-white font-semibold tracking-wide hover:bg-cyan-600 transition"
          >
            Sign Up
          </button>
          <Link to={"/login"}>
            <p className="text-gray-600">
              Do you have an account? <span className="underline">Login</span>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
