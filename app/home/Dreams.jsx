import React from 'react';
import Container from './Container';
import Image from "next/image";

const Dreams = () => {
  return (
    <div className='py-10 relative'>
   

      <Container>
        <div className='grid-cols-2 flex'>
        <div>
            <h2 className='w-[600px] text-white font-bold text-[57px]' >Where <span className='text-cyber'>Neon Dreams & Digital</span> Nightmares Converge.</h2>
            <p className='text-[18px] text-white w-[500px] py-10'>
            A realm where advanced technology meets dystopian reality. Our website is your gateway to a universe of neon lights, gritty streets, and cybernetic enhancements. Explore the high-tech, low-life world where the lines between humanity and machinery blur.
            </p>
          <div className='grid-cols-3 flex gap-10'>
            <div className=''>
                <h2 className='text-[47px] font-bold text-cyber'>89,2K+</h2>
                <p className='text-[17px] text-white'>Discover the Future</p>
            </div>
            <div className=''>
            <h2 className='text-[47px] font-bold text-cyber'>7001+</h2>
            <p className='text-[17px] text-white'>Stories and Lore</p>
            </div>
            <div className=''>
            <h2 className='text-[47px] font-bold text-cyber'>3,124+</h2>
            <p className='text-[17px] text-white'>Art and Design</p>
            </div>
          </div>
        </div>
        <div className='text-white'>
            <div>
                <Image src="/image/Dreams.png" alt='dream' width={600} height={700}/>
            </div>
        </div>
        </div>
      </Container>
      <div className='py-10 relative'>
     <div className=' left-right'></div>
      <div className="mt-[-30px] top-left-image"></div>
      <div className="mt-[-30px] top-right-image"></div>
      </div> 
    </div>
  )
}

export default Dreams;
