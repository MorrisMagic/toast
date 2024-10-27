import React, { useContext } from "react";
import Posts from "../components/Posts";
import { modelContext } from "../Context/ModelContext";
import ModelLogin from "../components/ModelLogin";

function Home() {
  const { show, setShow } = useContext(modelContext);

  return (
    <div
      onClick={() => setShow(false)}
      className="flex z-50 flex-col bg-gray- pt-5 lg:flex-row px-40"
    >
      <div className="flex-2 lg:flex-3 w-full h-screen lg:w-3/4 p-4">
        <h1 className="text-black font-semibold text-[43px]">Your feed</h1>
        <div>
          <Posts />
          <Posts />
          <Posts />
          <Posts />
          <Posts />
        </div>
      </div>
      <div className="flex-1 lg:flex-1 bg-blue-600 w-full lg:w-1/4 p-4">
        <h1 className="text-white">Community</h1>
      </div>
      {show && <ModelLogin />}{" "}
    </div>
  );
}

export default Home;
