import React from 'react'

function Cards() {
  return (
    <div className='flex items-center justify-center gap-5 w-full h-screen px-12'>
      <div className="card-container w-1/2 h-1/2">
        <div className="card w-full h-full bg-[#004D43] rounded-xl flex items-center justify-center relative">
          <img className='w-38 h-15' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
          <button className="absolute left-5 bottom-7 px-3 py-1 border-2 rounded-full text-sm text-[#CDEA68] border-[#CDEA68]">&copy;2019-2025</button>
        </div>
        
      </div>
      <div className="card-container w-1/2 h-1/2 flex gap-5">
        <div className="card w-1/2 h-full bg-[#212121] rounded-xl flex items-center justify-center relative">
          <img className='w-38 h-19' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
            <button className="absolute left-5 bottom-7 px-3 py-1 border-2 rounded-full text-sm text-[#fff] border-[#fff] uppercase">rating 5.0 on clutch</button>
        </div>
        <div className="card w-1/2 h-full bg-[#212121] rounded-xl flex items-center justify-center relative">
          <img className='w-20 h-20' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
            <button className="absolute left-5 bottom-7 px-3 py-1 border-2 rounded-full text-sm text-[#fff] border-[#fff] uppercase">bussiness bootcamp alumini</button>
        </div>
      </div>
    </div>
  )
}

export default Cards
