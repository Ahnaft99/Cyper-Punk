import React from 'react'
import Image from "next/image";
import Container from './Container';

const Nav = () => {
    return (
        <>
        
       

        
<div className="bg-black py-10 ">

<div className="top-left-image"></div>
<div className="top-right-image"></div>
<Container className=" mx-auto ">
        <div className="lg:flex items-center justify-between">
            <div className="">
                <Image src="/Image/logo.png" alt="logo"  width={150} 
    height={50} />
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
    </Container>
<div className='left-right'></div>
  

</div>



        </>
       
    )
}

export default Nav