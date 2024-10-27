import React from "react";
import { LuArrowBigDown } from "react-icons/lu";
import { FaRegCommentAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function Posts() {
  return (
    <div className="p-5">
      <div className="flex gap-5 p-5 mt-2 h-[140px] shadow-md bg-white">
        <div className="flex justify-start">
          <div className="flex flex-col gap-3 items-center">
            <LuArrowBigDown size={25} color="gray" className="rotate-180" />
            <p>0</p>
            <LuArrowBigDown size={25} color="gray" />
          </div>
        </div>
        <div>
          <div className="flex text-sm">
            <Link to={"r"}>
              <p className="underline text-gray-600">r/uno</p>
            </Link>
            <p className="text-gray-600">. Posted by youssef 3m ago</p>
          </div>
          <Link to={"r/post/1"}>
            <p className="mt-1">hello there</p>
            <p className="text-gray-700 text-base mt-2">descritpion</p>
          </Link>
        </div>
      </div>
      <div className="flex gap-3 items-center shadow bg-mywhite p-3 h-[50px]">
        <FaRegCommentAlt size={19} color="gray" />
        <p className="text-gray-700 font-medium">0</p>
        <p className="text-gray-700 font-normal">comments</p>
      </div>
    </div>
  );
}

export default Posts;
