import React from 'react'
import Image from "next/image";

const Nav = () => {
    return (
        <>
        
  
<div className="bg-black py-10 relative">

    <div className="w-10/12 mx-auto">
        <div className="lg:flex items-center justify-between">
            <div className="">
                <img src="/image/logo.png" alt="logo" />
            </div>
            <div className="">
                <ul className='gap-x-9 lg:flex items-center'>
                    <li>
                        <a className='text-[16px] text-white font-medium'>Home</a>
                    </li>
                    <li>
                        <a className='text-[16px] text-white font-medium'>Pages</a>
                    </li>
                    <li>
                        <a className='text-[16px] text-white font-medium'>Support</a>
                    </li>
                    <li>
                        <a className='text-[16px] text-white font-medium'>Contact</a>
                    </li>
                </ul>
            </div>
            <div className="">
                <a className='text-[17px] font-bold text-white py-3 px-5 bg-linear-to-r from-[#F0B71F] to-[#E03609] cursor-pointer rounded-lg'>Get started free</a>
            </div>
        </div>
    </div>
    <div className='py-[1px] bg-gradient-to-r from-[#F0B71F] to-[#E03609] mt-8'>

</div>
</div>
<div className='h-[500px] w-[1px] bg-gradient-to-r from-[#F0B71F] to-[#E03609] absolute top-0 left-[60px] '>

        </div>
        <div className='h-[500px] w-[1px] bg-gradient-to-r from-[#F0B71F] to-[#E03609] absolute top-0 right-[60px]'>

        </div>
        <div className='absolute top-[67px] left-[30px] w-[61px] h-[61px]'>
            <img src="/image/Union.png" alt="" />
        </div>
        <div className='absolute top-[67px] right-[30px] w-[61px] h-[61px]'>
            <img src="/image/Union2.png" alt="" />
        </div>

        </>
       
    )
}

export default Nav