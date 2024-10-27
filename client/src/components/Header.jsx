import React, { useContext } from "react";
import toastImage from "../assets/toast.png";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import { modelContext } from "../Context/ModelContext";
import { CiSquarePlus } from "react-icons/ci";
import { UserContext } from "../Context/AuthContext";
import axios from "axios";

function Header() {
  const { show, setShow } = useContext(modelContext);
  const { userAuth, setUserAuth } = useContext(UserContext);

  const checkPath = () => {
    if (
      window.location.pathname !== "/login" &&
      window.location.pathname !== "/signup"
    ) {
      setShow(!show);
    }
  };
  const logout = async () => {
    try {
      await axios.get("/auth/logout").then(() => {
        window.location.reload();
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="">
      <header className="fixed top-0 left-0 right-0 z-10 flex justify-around items-center px-10 shadow-md bg-mywhite h-[77px]">
        <div className="flex items-center gap-3">
          <Link to={"/"}>
            <img src={toastImage} alt="Toast" width={57} height={57} />
          </Link>
          <Link to={"/"}>
            <p className="text-2xl text-gray-600 font-medium tracking-wide">
              Toast
            </p>
          </Link>
        </div>
        <div className="flex bg-white gap-2 shadow-sm items-center rounded-lg p-3 w-[400px]">
          <IoIosSearch size={26} color="gray" />

          <input
            type="text"
            placeholder="Search communities"
            className="focus:outline-none placeholder:font-normal w-[400px] placeholder:text-lg"
          />
        </div>
        <div className="flex items-center gap-7">
          <button title="Create new a Feed">
            <CiSquarePlus size={38} color="gray" />
          </button>

          <button
            onClick={userAuth ? logout : checkPath}
            className="bg-myblack text-white font-medium shadow-md tracking-wide p-[11px] border px-8 rounded-xl"
          >
            {userAuth ? "Log out" : "log in"}
          </button>
        </div>
      </header>
    </div>
  );
}

export default Header;
