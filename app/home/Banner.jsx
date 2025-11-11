import React from 'react'

const Banner = () => {
  return (
    <>
    <div className='bg-black mx-auto'>
    <div className='relative'>
      <h1 className='text-white text-center text-[150px] font-bold font-orbitron'>Cyber Punk</h1>
    </div>
    <div className='  bg-black  w-full h-[600px]'>
      <img className='w-[500px] h-[501px] absolute top-[230px] left-[360px]' src="/Image/banOne.png" alt="" />
      <div className='ml-[130px] mt-5'>
        <h3 className='text-white'>Stories & Lore</h3>
        <div className='flex items-center'>
        <p className='text-white'>Dive into compelling narratives <br /> set in a dystopian future.</p>
        <div className='w-[70px] h-[1px] bg-white '>
        <div className='w-[1px] h-[160px] bg-white ml-[70px]'></div>
        <div className='w-[10px] h-[2px] rounded-[50%] text-white '></div>
        </div>
       
        </div>
        
      
      </div>
    </div>
    
    </div>
    </>
  )
}

export default Banner