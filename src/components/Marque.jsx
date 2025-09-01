import React from "react";
import { motion } from "motion/react"

function Marque() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".2" className="w-full bg-[#004D43] rounded-t-3xl py-25">
      <div className="flex items-center overflow-hidden whitespace-nowrap border-t-2 border-b-2 border-zinc-400 -mb-6">
        <motion.h1 
          initial={{ x: '0%', }}
          animate={{ x: '-100%', }}
          transition={{ duration: 7, repeat: Infinity, ease: 'linear', }}
          className='text-[25vw] text-white font-["Founders"] uppercase font-extrabold leading-[0.8] -mt-8 pr-22'>
          we are ochi
        </motion.h1>
        <motion.h1 
          initial={{ x: 0, }}
          animate={{ x: '-100%', }}
          transition={{ duration: 7, repeat: Infinity, ease: 'linear'}}
          className='text-[25vw] text-white font-["Founders"] uppercase font-extrabold leading-[0.8] -mt-8 pr-22'>
          we are ochi
        </motion.h1>
      </div>
    </div>
  );
}

export default Marque;
