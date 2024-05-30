import React from 'react'
import { FaGift } from 'react-icons/fa';
import { IoIosSearch } from 'react-icons/io';
import { RxAvatar } from 'react-icons/rx';
import { TfiAnnouncement } from 'react-icons/tfi';
import Image from 'next/image'
import mypic from '/public/mypic.jpg'
import amg from '/public/amg.jpg'
import kate from '/public/kate.jpg'
import nq from '/public/nq.jpg'
import travis from '/public/travis.jpg'



function Right() {
  return (
    <div className = " flex flex-col p-3 [&>*]:px-2 top-16 bottom-0 fixed overflow-y-auto overflow-x-hidden">
        <div className='flex justify-between text-gray-500 p-2'>
            <p>Your Pages and profiles</p>
            <p>...</p>
        </div>
        <div className="flex items-center p-2 hover:bg-slate-200 hover:rounded cursor-pointer">
        <RxAvatar />

            <p className=' font-bold px-2'>Lorem Ipsum Lorem</p>
        </div>
        <div className="flex p-2 text-gray-500 text-sm hover:bg-slate-200 hover:rounded cursor-pointer">
        <RxAvatar />

            <p className='px-2'>Switch to Page</p>
        </div>
        <div className="flex p-2 text-gray-500 text-sm hover:bg-slate-200 hover:rounded cursor-pointer">
        <TfiAnnouncement />
            <p className='px-2'>Create promotion</p>
        </div>
        <hr className = " border" />
        <h1 className='text-gray-500 font-bold p-2'>Birthdays</h1>
        <div className='flex'>
            <div className='text-2xl text-purple-600'>

        <FaGift />
            </div>
        <p className = "px-2"> <span className='font-bold'> Lorem Ipsum</span> and <span className='font-bold'>Loretta Ipsumia</span> have their birthdays today.</p>

        </div>
        <hr className = " border" />
        <div className=' flex justify-between text-gray-500 p-2'>
            <p className = "">Contacts</p>
            <div className = "flex">
            <IoIosSearch />
                <p>...</p>
            </div>
        </div>
        <div className="flex p-2 items-center hover:bg-slate-200 hover:rounded hover:cursor-pointer ">
        <div className='relative w-fit h-fit rounded-full'>
              <Image src={mypic} alt="profile picture" className=' w-7 rounded-full'/>
                <div className="absolute w-[6px] h-[6px] bg-green-500 rounded-full bottom-0 right-[2px]  "></div>
              </div>

            <p className='px-2'>Brian Chebegwen</p>
        </div>
        
        <div className="flex p-2 items-center hover:bg-slate-200 hover:rounded hover:cursor-pointer">
        <div className=' relative w-fit h-fit rounded-full'>
              <Image src={amg} alt="profile picture" className=' w-7 h-7 rounded-full'/>
              <div className="absolute w-[6px] h-[6px] bg-green-500 rounded-full bottom-0 right-[2px]  "></div>

              </div>

            <p className='px-2'>Mercedes AMG</p>
        </div>
        
        <div className="flex p-2 items-center hover:bg-slate-200 hover:rounded hover:cursor-pointer">
        <div className='relative w-fit h-fit rounded-full'>
              <Image src={kate} alt="profile picture" className=' w-7 h-7 rounded-full'/>
              <div className="absolute w-[6px] h-[6px] bg-green-500 rounded-full bottom-0 right-[2px]  "></div>

              </div>

            <p className='px-2'>Kate Abdo</p>
        </div>
        
        <div className="flex p-2 items-center hover:bg-slate-200 hover:rounded hover:cursor-pointer">
        <div className='relative w-fit h-fit rounded-full'>
              <Image src={nq} alt="profile picture" className=' w-7 h-7 rounded-full'/>
              <div className="absolute w-[6px] h-[6px] bg-green-500 rounded-full bottom-0 right-[2px]  "></div>

              </div>

            <p className='px-2'>Nqubeko Mbatha</p>
        </div>
        
        <div className="flex p-2 items-center hover:bg-slate-200 hover:rounded hover:cursor-pointer">
        <div className=' relative w-fit h-fit rounded-full'>
              <Image src={travis} alt="profile picture" className=' w-7 h-7 rounded-full'/>
              <div className="absolute w-[6px] h-[6px] bg-green-500 rounded-full bottom-0 right-[2px]  "></div>

              </div>

            <p className='px-2'>Travis Greene</p>
        </div>
        
        
        
       
        
        
        
        
        
        
        
        
        
    </div>
  )
}

export default Right