import React from 'react'
import { FaGift } from 'react-icons/fa';
import { IoIosSearch } from 'react-icons/io';
import { RxAvatar } from 'react-icons/rx';
import { TfiAnnouncement } from 'react-icons/tfi';



function Right() {
  return (
    <div className = " flex flex-col p-3 [&>*]:px-2 top-16 bottom-0 fixed overflow-y-auto overflow-x-hidden">
        <div className='flex justify-between text-gray-500 p-2'>
            <p>Your Pages and profiles</p>
            <p>...</p>
        </div>
        <div className="flex items-center p-2">
        <RxAvatar />

            <p className=' font-bold px-2'>Lorem Ipsum Lorem</p>
        </div>
        <div className="flex p-2 text-gray-500 text-sm">
        <RxAvatar />

            <p className='px-2'>Switch to Page</p>
        </div>
        <div className="flex p-2 text-gray-500 text-sm">
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
        <div className="flex p-2 items-center">
        <RxAvatar />

            <p className='px-2'>Cristiano Ronaldo</p>
        </div>
        <div className="flex p-2 items-center">
        <RxAvatar />
            <p className='px-2'>John Snow</p>
        </div>
        <div className="flex p-2 items-center">
        <RxAvatar />

            <p className='px-2'>Cristiano Ronaldo</p>
        </div>
        <div className="flex p-2 items-center">
        <RxAvatar />
            <p className='px-2'>John Snow</p>
        </div>
        <div className="flex p-2 items-center">
        <RxAvatar />

            <p className='px-2'>Cristiano Ronaldo</p>
        </div>
        <div className="flex p-2 items-center">
        <RxAvatar />
            <p className='px-2'>John Snow</p>
        </div>
        <div className="flex  p-2 items-center">
        <RxAvatar />

            <p className='px-2'>Cristiano Ronaldo</p>
        </div>
        <div className="flex  p-2 items-center">
        <RxAvatar />
            <p className='px-2'>John Snow</p>
        </div>
        <div className="flex p-2 items-center">
        <RxAvatar />

            <p className='px-2'>Cristiano Ronaldo</p>
        </div>
        <div className="flex  p-2 items-center">
        <RxAvatar />
            <p className='px-2'>John Snow</p>
        </div>
        <div className="flex  p-2 items-center">
        <RxAvatar />

            <p className='px-2'>Cristiano Ronaldo</p>
        </div>
        <div className="flex  p-2 items-center">
        <RxAvatar />
            <p className='px-2'>John Snow</p>
        </div>
        
        
    </div>
  )
}

export default Right