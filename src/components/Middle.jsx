import React from 'react'
import Image from 'next/image'
import mypic from '/public/mypic.jpg'
import vini from '/public/vini.jpg'
import kane from '/public/kane.jpg'
import harvey from '/public/harvey.jpg'
import { FaRegCommentDots, FaRegSmileBeam, FaVideo } from 'react-icons/fa'
import { MdOutlinePhotoLibrary } from 'react-icons/md'
import { FaCirclePlus } from 'react-icons/fa6'
import  livescore from '/public/livescore.png'
import { VscVerifiedFilled } from 'react-icons/vsc'
import postimg from '/public/postimg.jpg'
import { BiLike, BiSolidMessageRounded } from 'react-icons/bi'
import { FcLike } from 'react-icons/fc'
import { PiShareFat, PiShareFatFill } from 'react-icons/pi'
import { AiOutlineLike } from 'react-icons/ai'


function Middle() {
  return (
    <div className = "flex flex-col p-3  ">
        <div className = "flex [&>*]:mx-1 mb-2 overflow-hidden">
          <div className = "flex flex-col min-w-36  h-60 border rounded-lg bg-white hover:bg-slate-100 overflow-hidden">
              <div className = "relative w-full h-4/5 bg-cover bg-center border rounded-t-lg hover:bg-inherit hover:scale-105"
              style = {{backgroundImage: `url('/mypic.jpg')`}}>
              {/* <Image src={mypic} alt="profile picture" className=' h-full'/> */}
                  <div className=" flex absolute items-center justify-center text-blue-500 text-4xl -bottom-5 left-0 right-0 ml-auto mr-auto rounded-full bg-white h-11 w-11  ">
                  <FaCirclePlus />
                  </div>
              </div>
              <span className = "mt-5 text-sm flex self-center">Create story</span>
          </div>
          <div className = " min-w-36  h-60 border rounded-lg text-white hover:bg-slate-100 overflow-hidden">
              <div className="relative bg-center bg-cover h-full border rounded-lg text-white hover:bg-inherit hover:scale-105"
              style = {{backgroundImage: `url('/vini.jpg')`}}>
              <p className=' absolute bottom-0 left-0 right-0 text-center text-sm'>Vinicius Jr.</p>
              <div className='absolute flex h-8 w-8 bg-blue-500 rounded-full place-items-center justify-center top-4 left-3'>
                <div className='absolute h-6 w-6 bg-white rounded-full flex place-items-center justify-center'>
          
                <Image src={vini} alt="profile picture" className='w-full h-full rounded-full'/>

        
                </div>
              </div>

              </div>
          </div>
          <div className = " min-w-36  h-60 border rounded-lg text-white hover:bg-slate-100 overflow-hidden">
              <div className=" relative bg-center bg-cover h-full border rounded-lg text-white hover:bg-inherit hover:scale-105"
              style = {{backgroundImage: `url('/kane.jpg')`}}>
              <p className=' absolute bottom-0 left-0 right-0 text-center text-sm'>Fc Bayern Munich</p>
              <div className='absolute flex h-8 w-8 bg-blue-500 rounded-full place-items-center justify-center top-4 left-3'>
                <div className='absolute h-6 w-6 bg-white rounded-full flex place-items-center justify-center'>
                
                <Image src={kane} alt="profile picture" className=' w-full h-full rounded-full'/>

              
                </div>
              </div>
              </div>
          </div>
          <div className = " min-w-36  h-60 border rounded-lg text-white hover:bg-slate-100 overflow-hidden">
              <div className="relative bg-center bg-cover h-full border rounded-lg text-white hover:bg-inherit hover:scale-105"
              style = {{backgroundImage: `url('/harvey.jpg')`}}>
              <p className=' absolute bottom-0 left-0 right-0 text-center text-sm'>Steve Harvey</p>
              <div className='absolute flex h-8 w-8 bg-blue-500 rounded-full place-items-center justify-center top-4 left-3'>
                <div className='absolute h-6 w-6 bg-white rounded-full flex place-items-center justify-center'>
                
                <Image src={harvey} alt="profile picture" className='w-full h-full rounded-full'/>

              
                </div>
              </div>
              </div>
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

        <div className = "flex flex-col w-10/12 h-fit rounded-lg bg-white self-center">
            <div className='flex justify-between p-2'>
              <div className = "flex">
              <div className=' w-fit h-fit rounded-full px-2'>
              <Image src={livescore} alt="profile picture" className=' w-10 rounded-full'/>

              </div>
                <div className='flex flex-col'>
                  <div className='flex font-bold items-center'>
                  <h1 className='pr-2'>LiveScore</h1>
                  <div className = "text-blue-500">

                  <VscVerifiedFilled />
                  </div>
                  </div>
                  <a href="#" className=' hover:underline text-slate-400 text-sm '>11m</a>

                </div>
              </div>
              <div className='flex px-2 text-gray-400'>
                <p className = "px-2">...</p>
                <p>X</p>
              </div>
            </div>
            <p className = "px-3">The three winners so far of the UEFA Europa Conference League</p>
            <Image src={postimg} alt="post picture" className=''/>

            <div className = "flex justify-between p-3 [&:*]:items-center ">
              <div className="flex items-center">
                <div className="flex text-xl">

                <BiLike />
                <FcLike />
                </div>
                <a href="#" className=' hover:underline text-slate-400 text-sm px-2'>861</a>

              </div>
              <div className="flex [&>*]:items-center space-x-1">
                <div className="flex space-x-1">
                  <a href="#" className=' hover:underline'>861</a>
                  <BiSolidMessageRounded />
                </div>
                <div className="flex">
                <a href="#" className=' hover:underline'>146</a>

                  <PiShareFatFill />
                </div>
              </div>
            </div>
            <hr className = " border mx-2" />
            <div className="flex py-2 [&>*]:items-center [&>*]:hover:cursor-pointer ">
              <div className="flex p-2 mx-2  hover:bg-slate-200 hover:rounded w-1/3">
                <div className="text-2xl px-2">

              <AiOutlineLike />
                </div>
              <span>Like</span>
              </div>
              <div className="flex p-2 mx-2 hover:bg-slate-200 hover:rounded  w-1/3">
                <div className="text-2xl px-2">

              <FaRegCommentDots />
                </div>
              <span>Comment</span>
              </div>
              <div className="flex p-2 mx-2 hover:bg-slate-200 hover:rounded w-1/3">
                <div className="text-2xl px-2">

              <PiShareFat />
                </div>
              <span>Share</span>
              </div>
            </div>

            <div></div>
        </div>
      
        </div>
  )
}

export default Middle