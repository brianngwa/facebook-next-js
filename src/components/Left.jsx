import React from 'react'
import { CiShop } from 'react-icons/ci';
import { FaBookmark, FaBusinessTime, FaRegBookmark, FaUserFriends } from 'react-icons/fa';
import { MdOndemandVideo, MdOutlineGroups, MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { RiMemoriesFill } from 'react-icons/ri';
import { RxAvatar } from 'react-icons/rx';
import Image from 'next/image'
import mypic from '/public/mypic.jpg'

function Left() {
  return (
    <div className = " flex flex-col p-3 [&>*]:flex-1 [&>div]:cursor-pointer  top-16 bottom-0 fixed overflow-y-auto overflow-x-hidden">
        <div className = "flex items-center hover:bg-slate-200 hover:rounded-lg px-2">
        <div className=' w-fit h-fit rounded-full'>
              <Image src={mypic} alt="profile picture" className=' w-7 rounded-full'/>

              </div>
         <p className='px-2'>Brian Chebegwen</p>
        </div>
        <div className = "flex items-center hover:bg-slate-200 hover:rounded-lg px-2">
            <div className=' text-blue-500 text-2xl'>
            <FaUserFriends />
            </div>
            <p className='px-2'>Friends</p>
        </div>
        <div className = "flex items-center hover:bg-slate-200 hover:rounded-lg px-2">
            <div className = "text-blue-500 text-2xl">

        <FaBusinessTime />
            </div>
            <p className='px-2'>Feeds</p>
        </div>
        <div className = "flex items-center hover:bg-slate-200 hover:rounded-lg px-2">
            <div  className = "text-blue-500 text-2xl">
            <MdOutlineGroups />
            </div>
            <p className = "px-2">Groups</p>
        </div>
        <div className = "flex items-center hover:bg-slate-200 hover:rounded-lg px-2">
            <div className = "text-blue-500 text-2xl">
            <CiShop />

            </div>
            <p className = " px-2">Marketplace</p>
        </div>
        <div className = "flex items-center hover:bg-slate-200 hover:rounded-lg px-2">
            <div className = "text-blue-500 text-2xl">
        <MdOndemandVideo  />
            </div>
            <p className = "px-2">Video</p>
        </div>
        <div className = "flex items-center hover:bg-slate-200 hover:rounded-lg px-2">
            <div className = "flex text-blue-500 text-2xl">
         <RiMemoriesFill />
            </div>
            <p className = "px-2">Memories</p>
        </div>
        <div className = "flex items-center hover:bg-slate-200 hover:rounded-lg px-2">
            <div className = " text-purple-900 text-2xl">
            <FaBookmark />

            </div>
            <p className = "px-2">Saved</p>
        </div>
        <div className = "flex items-center hover:bg-slate-200 hover:rounded-lg px-2">
            <div>
            <MdOutlineKeyboardArrowDown />
            </div>
            <p>See more</p>
        </div>

       </div>

  )
}

export default Left