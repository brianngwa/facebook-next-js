import React from "react";
import { BiCameraMovie, BiMoviePlay } from "react-icons/bi";
import { BsRocketTakeoff } from "react-icons/bs";
import { FaBookmark } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";
import { MdOndemandVideo } from "react-icons/md";
import { SiFacebooklive } from "react-icons/si";

function Video() {
  return (
    <div className="flex">
      <div className="bg-white w-1/3 min-h-screen flex flex-col">
        <div className="flex justify-between m-3">
          <span className=" font-bold text-2xl">Video</span>
          <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-2xl">
            <IoSettingsSharp />
          </div>
        </div>
        <div className=" h-10 flex place-items-center border  bg-slate-100 rounded-full overflow-hidden p-2 mx-3">
          <IoIosSearch />
          <input
            type="text"
            placeholder="Search Videos"
            className="focus:outline-none bg-inherit w-full "
          />
        </div>
        <div className="flex flex-col p-2 m-2">
          <div className="flex">
            <MdOndemandVideo />
            <span>Home</span>
          </div>
          <div className="flex">
            <SiFacebooklive />
            <span>Live</span>
          </div>
          <div className="flex">
            <BiMoviePlay />
            <span>Reels</span>
          </div>
          <div className="flex">
            <BiCameraMovie />
            <span>Shows</span>
          </div>
          <div className="flex">
            <BsRocketTakeoff />
            <span>Explore</span>
          </div>
          <div className="flex">
            <FaBookmark />
            <span>Saved Videos</span>
          </div>
        </div>
      </div>
      <div className="w-2/3 m-5 flex flex-col items-center">
        <div className="rounded-lg bg-white w-11/12 h-32 justify-self-center"></div>
      </div>
    </div>
  );
}

export default Video;
