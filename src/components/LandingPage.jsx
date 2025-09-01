import { motion } from 'motion/react';
import React from 'react'
import { MdArrowOutward } from "react-icons/md";


function LandingPage() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3"  className='w-full h-screen pt-1 bg-zinc-100'>
      <div className='mt-32 w-full h-[70%]'>

        <div className='font-["Founders"] px-12 mb-36'>
          <h1 className='text-9xl leading-[0.7] tracking-tight uppercase font-regular'>We create</h1>
          <div className='flex items-center'>
            <motion.div
            initial={{width: 0,}}
            animate={{width: "120px",}}
            transition={{ease: [0.76, 0, 0.24, 1], duration: 1,}}
            className='h-[80px] w-[120px] rounded-[6px] mt-3 mr-2 bg-[url("./src/assets/image01.jpg")] bg-cover'>
            </motion.div>
            <h1 className='text-9xl leading-[0.8] tracking-tight uppercase font-regular'>eye-opening</h1>
          </div>
          <h1 className='text-9xl leading-[0.7] tracking-tight uppercase font-regular'>presentations</h1>
        </div>

        <div className='px-12 py-2 flex justify-between items-center border-t-1 border-gray-400 font-["NeueMontreal"]'> 
            <h4 className='text-base'>Presentation and storytelling agency</h4>
            <h4 className='text-base ml-40'>For innovation teams and global brands</h4>
            <div className='flex gap-2'>
              <button className='uppercase px-2 py-1 rounded-full border-1 text-sm hover:bg-[#222] transition-linear hover:text-white'>start the project</button>
              <i className='w-7 h-7 rounded-full border-1 text-lg flex items-center justify-center hover:bg-[#222] transition-transform hover:text-white'><MdArrowOutward /></i>
            </div>
        </div>

      </div>
    </div>
  )
}

export default LandingPage
