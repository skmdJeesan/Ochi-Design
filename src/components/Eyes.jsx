import React, { useEffect, useState } from 'react'

function Eyes() {
  const [rotate, setRotate] = useState(0)
  useEffect(() => {
    window.addEventListener('mousemove', (e) => {
      let mouseX = e.clientX
      let mouseY = e.clientY

      let deltaX = mouseX - window.innerWidth/2
      let deltaY = mouseY - window.innerHeight/2

      var angle = Math.atan2(deltaY, deltaX) * (180/Math.PI)
      //angle = angle - 180
      setRotate(angle-180)
    })
  })
  
  return (
    <div className='w-full h-screen overflow-hidden'>
      <div data-scroll data-scroll-section data-scroll-speed="-.7" className='w-full h-full relative bg-[url("./src/assets/image02.jpg")] bg-cover bg-center'>
          <div className='absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] flex gap-6'>
            <div className='h-[14vw] w-[14vw] rounded-full bg-zinc-100 flex items-center justify-center'>
              <div className='h-2/3 w-2/3 rounded-full bg-zinc-900 relative'>
                <h2 className='uppercase text-white text-base font-["NeueMontreal"] absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%]'>play</h2>
                <div style={{transform: `rotate(${rotate}deg)`}} className="line w-full h-7 p-2 absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%]">
                  <div className='w-4 h-4 rounded-full bg-zinc-100'></div>
                </div>
              </div>
            </div>
            <div className='h-[14vw] w-[14vw] rounded-full bg-zinc-100 flex items-center justify-center'>
              <div className='h-2/3 w-2/3 rounded-full bg-zinc-900 relative'>
                <h2 className='uppercase text-white text-base font-["NeueMontreal"] absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%]'>play</h2>
                <div style={{transform: `rotate(${rotate}deg)`}} className="line w-full h-7 p-2 absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%]">
                  <div className='w-4 h-4 rounded-full bg-zinc-100'></div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Eyes
