import React from 'react'

function AboutPart2() {
  return (
    <div className='border-t-1 py-4 flex justify-between px-12'>
      <div className='w-1/2'>
        <h2 className='text-5xl mb-4'>How we can help:</h2>
        <button className='bg-[#222] px-6 py-4 text-white rounded-full flex gap-5 items-center'>
          <h2 className='uppercase text-sm'>read more</h2>
          <div className='w-2 h-2 rounded-full bg-white'></div>
        </button>
      </div>
      <div className='w-1/2 rounded-xl overflow-hidden'>
        <img src="./src/assets/About-Photo.jpg" alt="" />
      </div>
    </div>
  )
}

export default AboutPart2
