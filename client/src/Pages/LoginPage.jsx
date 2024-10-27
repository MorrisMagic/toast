import React, { useState } from "react";
import toastImage from "../assets/toast.png";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import bg1 from "../assets/bg1.png";
import axios from "axios";

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await axios.post("/auth/login", { username, password }).then(() => {
        window.location.reload();
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${bg1})`,
        backgroundSize: "contain",
      }}
      className="fixed inset-0 flex justify-center items-center bg-opacity-30"
    >
      <div className="p-8 w-[450px] bg-white rounded-lg shadow-lg">
        <div className="flex flex-col items-center gap-6">
          <img src={toastImage} width={60} alt="Toast" />
          <h1 className="text-black text-2xl font-semibold tracking-wide text-center">
            Welcome Back
          </h1>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="bg-gray-100 p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded-md w-full"
          />
          <div className="relative flex items-center w-full">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-gray-100 p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded-md pl-10 w-full"
            />
            {showPassword ? (
              <FaEye
                onClick={() => setShowPassword(!showPassword)}
                color="gray"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
              />
            ) : (
              <FaEyeSlash
                onClick={() => setShowPassword(!showPassword)}
                color="gray"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
              />
            )}
          </div>
          <button
            onClick={handleLogin}
            className="bg-cyan-500 py-2 shadow-md px-10 border border-cyan-500 rounded-lg text-white font-semibold tracking-wide hover:bg-cyan-600 transition"
          >
            Log In
          </button>
          <Link to="/signup">
            <p className="text-gray-600">
              Don’t have an account? <span className="underline">Sign Up</span>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
