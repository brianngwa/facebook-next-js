import React from "react";
import { IoSettingsSharp } from "react-icons/io5";

function Video() {
  return <div className = "flex">
    <div className="bg-white w-1/3 min-h-screen">
      <div className="flex justify-between m-3">
        <span className = " font-bold text-2xl">Video</span>
        <div className = "w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-2xl">
        <IoSettingsSharp />
        </div>
      </div>
    </div>
    <div className="w-2/3 m-5 flex flex-col items-center">
    <div className="rounded-lg bg-white w-11/12 h-32 justify-self-center"></div>
    </div>
    
    </div>;
}

export default Video;
