import React from "react";
import Image from "next/image";
import facebook from "/public/facebook.png";
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
        <Image src={facebook} alt="logo" className=" w-14" />
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
        <div className=" hover:bg-slate-200 w-1/4 hover:cursor-pointer group-hover:bg-slate-200 p-2 px-10 hover:rounded-lg">
          <CiHome />
        </div>
        <div className=" hover:bg-slate-200 w-1/4 hover:cursor-pointer group-hover:bg-slate-200 p-2 px-10  hover:rounded-lg">
          <MdOndemandVideo />
        </div>
        <div className="hover:bg-slate-200 w-1/4 hover:cursor-pointer group-hover:bg-slate-200 p-2 px-10  hover:rounded-lg">
          <CiShop />
        </div>
        <div className="hover:bg-slate-200 w-1/4 hover:cursor-pointer group-hover:bg-slate-200 p-2 px-10  hover:rounded-lg">
          <RiGamepadLine />
        </div>
      </div>

      <div className="group flex text-2xl">
        <div className=" group-hover:cursor-pointer flex items-center justify-center mx-1 border rounded-full bg-slate-200 w-10 h-10">
          <CgMenuGridR />
        </div>
        <div className="group-hover:cursor-pointer flex items-center justify-center border rounded-full bg-slate-200 w-10 h-10 ">
          <FaFacebookMessenger />
        </div>
        <div className="group-hover:cursor-pointer flex items-center justify-center mx-1 border rounded-full bg-slate-200 w-10 h-10">
          <IoNotificationsSharp />
        </div>
        <div className=" group-hover:cursor-pointer flex items-center justify-center border rounded-full bg-slate-200 w-10 h-10 ">
          <RxAvatar />
        </div>
      </div>
    </div>
  );
}

export default Header;
