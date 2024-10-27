import React, { useState } from "react";
import toastImage from "../assets/toast.png";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

function ModelLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      onClick={() => setShowPassword(false)}
      className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-30 z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="p-5 border border-mywhite shadow-md w-[470px] h-[400px] bg-white rounded-lg"
      >
        <div className="flex flex-col items-center gap-5">
          <img src={toastImage} width={60} alt="Toast" />
          <h1 className="text-black text-2xl font-semibold tracking-wider">
            Welcome back
          </h1>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="bg-gray-100 p-3 border border-gray-300 focus:outline-none w-[305px] h-[43px] rounded-md"
          />
          <div className="relative flex items-center w-[305px]">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-gray-100 p-3 border border-gray-300 w-[305px] focus:outline-none h-[43px] rounded-md pl-10"
            />
            {showPassword ? (
              <FaEye
                onClick={() => setShowPassword(false)}
                color="gray"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
              />
            ) : (
              <FaEyeSlash
                onClick={() => setShowPassword(true)}
                color="gray"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
              />
            )}
          </div>
          <button className="bg-cyan-500 py-2 shadow-md px-10 border border-cyan-500 rounded-lg text-white font-semibold tracking-wider">
            Go
          </button>
          <Link to="/signup">
            {" "}
            <p className="text-gray-600">
              Don’t have an account? <span className="underline">Signup</span>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ModelLogin;
