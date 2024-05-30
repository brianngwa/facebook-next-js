import React from "react";
import Image from "next/image";
import facebook from "/public/facebook.png";
import mypic from '/public/mypic.jpg'
import { CiHome, CiShop } from "react-icons/ci";
import { MdOndemandVideo } from "react-icons/md";
import { RiGamepadLine } from "react-icons/ri";
import { CgMenuGridR } from "react-icons/cg";
import { FaFacebookMessenger } from "react-icons/fa";
import { IoNotificationsSharp } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";

function Header() {
  return (
    <div className=" sticky top-0 h-16 w-full z-50 bg-white flex place-items-center justify-items-center justify-between">
      <div className="flex place-items-center justify-items-center">
        <Image src={facebook} alt="logo" className=" w-14 cursor-pointer" />
        <div className=" h-10 flex place-items-center border  bg-slate-200 rounded-full overflow-hidden p-2">
          <IoIosSearch />
          <input
            type="text"
            placeholder="Search Facebook"
            className="focus:outline-none bg-inherit w-full mx-1"
          />
        </div>
      </div>

      <div className="flex text-3xl">
        <div className=" hover:bg-slate-200 w-1/4 hover:cursor-pointer  p-2 px-10 hover:rounded-lg">
          <CiHome />
        </div>
        <div className=" hover:bg-slate-200 w-1/4 hover:cursor-pointer  p-2 px-10  hover:rounded-lg">
          <MdOndemandVideo />
        </div>
        <div className="hover:bg-slate-200 w-1/4 hover:cursor-pointer  p-2 px-10  hover:rounded-lg">
          <CiShop />
        </div>
        <div className="hover:bg-slate-200 w-1/4 hover:cursor-pointer p-2 px-10  hover:rounded-lg">
          <RiGamepadLine />
        </div>
      </div>

      <div className="group flex text-2xl">
        <div className=" group-hover:cursor-pointer hover:bg-slate-300 flex items-center justify-center mx-1 border rounded-full bg-slate-200 w-10 h-10">
          <CgMenuGridR />
        </div>
        <div className="relative group-hover:cursor-pointer hover:bg-slate-300 flex items-center justify-center border rounded-full bg-slate-200 w-10 h-10 ">
          <FaFacebookMessenger />
          <div className="absolute -top-3 -right-2 w-5 h-5 rounded-full bg-red-500 text-white flex place-items-center justify-center text-xs font-bold">1</div>
        </div>
        <div className="relative group-hover:cursor-pointer hover:bg-slate-300 flex items-center justify-center mx-1 border rounded-full bg-slate-200 w-10 h-10">
          <IoNotificationsSharp />
          <div className="absolute -top-3 -right-2 w-5 h-5 rounded-full bg-red-500 text-white flex place-items-center justify-center text-xs font-bold">2</div>

        </div>
        <div className=" group-hover:cursor-pointer hover:bg-slate-300 flex items-center justify-center border rounded-full w-10 h-10 ">
        <Image src={mypic} alt="profile picture" className=' rounded-full'/>

        </div>
      </div>
    </div>
  );
}

export default Header;
