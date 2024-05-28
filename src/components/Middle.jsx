import React from 'react'
import Image from 'next/image'
import mypic from '/public/mypic.jpg'
import { FaRegSmileBeam, FaVideo } from 'react-icons/fa'
import { MdOutlinePhotoLibrary } from 'react-icons/md'


function Middle() {
  return (
    <div className = "flex flex-col p-3  ">
        <div className = "flex [&>*]:mx-1 mb-2 overflow-hidden">
          <div className = " min-w-36  h-60 border rounded-lg bg-white">

          </div>
          <div className = " min-w-36  h-60 border rounded-lg bg-white">

          </div>
          <div className = " min-w-36  h-60 border rounded-lg bg-white">

          </div>
          <div className = " min-w-36  h-60 border rounded-lg bg-white">

          </div>
          <div className = " min-w-36  h-60 border rounded-lg bg-white">

          </div>
        </div>

        <div className = "flex flex-col w-10/12 h-32 mb-2 border rounded-lg bg-white self-center">
            <div className="flex items-center p-2">
              <div className=' w-fit h-fit rounded-full mx-3'>
              <Image src={mypic} alt="profile picture" className=' w-10 rounded-full'/>

              </div>
              <div className='border w-3/4 p-3 rounded-full bg-slate-200'>
                <input type="text" placeholder="What's on your mind, Brian?" className = "focus:outline-none bg-inherit" />
                  
              </div>
            </div>
            <hr className=" self-center h-px my-2 w-10/12 bg-gray-200 border-0 0"></hr>
            <div className='flex justify-evenly items-center '>
              <div className="flex items-center px-2">
                <div className=' text-red-500 text-2xl'>
              <FaVideo />
                </div>
                <span className = "px-2">Live video</span>
              </div>
              <div className="flex items-center">
                <div className = "text-green-500 text-2xl">

              <MdOutlinePhotoLibrary />
                </div>
                <span className = "px-2">Photo/video</span>
              </div>
              <div className="flex items-center px-2">
                <div className=" text-yellow-500 text-2xl">

              <FaRegSmileBeam />
                </div>
                <span className = "px-2">Feeling/activity</span>
              </div>

            </div>

        </div>

        <div className = "flex flex-col w-10/12 h-52 rounded-lg bg-white self-center">

        </div>
      
        </div>
  )
}

export default Middle