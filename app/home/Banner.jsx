import React from 'react'
import Container from './Container'
import Image from "next/image";

const Banner = () => {
  return (
    <>
    <div>

    </div>
            
      <Container>
        <div className="w-full py-[100px] relative">
<p className="text-[160px] font-bold font-orbitron text-center text-white mt-[-50px] relative">
            Cyber Punk
          </p>

          <div className="absolute top-[180px] left-1/2 -translate-x-1/2">
            <Image
              src="/Image/banOne.png"
              alt="banner"
              height={450}
              width={500}
            />
          </div>

          <div className="pt-[100px] grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-white text-[24px] font-bold ml-5">
                . Stories & Lore
              </h3>

              <div className="flex items-start py-[40px]">
                <span className="text-white text-[18px] font-medium w-[280px] mt-[-20px] ml-5">
                  Dive into compelling narratives set in a dystopian future.
                </span>

                <div className="ml-[-80px] flex flex-col items-end relative">
                  <div className="w-[150px] h-0.5 bg-[#E03609] mt-[-60px]"></div>
                  <div className="w-[2px] h-[150px] bg-gradient-to-t from-[#F0B71F] to-[#E03609]"></div>

                  <div className="z-10">
                    <Image
                      src="/image/Ecllipse.png"
                      alt="ecllipse"
                      width={87}
                      height={87}
                      className="absolute bottom-[-40px] left-[105px]"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="text-right">
              <h3 className="text-[36px] text-white">
                Events and Updates
              </h3>

              <p className="w-[300px] ml-auto text-white mt-4">
                Explore the high-tech, low-life world where the lines between
                humanity and machinery blur.
              </p>

              <button className="w-[153px] h-[46px] bg-gradient-to-l from-[#F0B71F] to-[#E03609] mt-4 ml-auto">
                Read More
              </button>
            </div>

          </div>
        </div>
        <div className='w-12/12 flex gap-15'>
        <div className="w-5/12 ">
  <div className="relative bg-black/60 w-[500px] h-[280px] -translate-y-20  border-2 border-amber-500 rounded-[20px]">
    <div className="h-[200px] w-[300px] ml-[10px] py-[10px] flex gap-4 mt-8 ">
      <Image src="/Image/banTwo.png" alt="bantwo" width={300} height={100} />

      <div className=''>
        <h4 className="text-[57px] text-cyber font-bold">76,285K+</h4>
        <h3 className="text-[28px] w-[327px] text-white">Experience the Future</h3>
        <p className="text-[18px] text-white">
          Explore the high-tech, low-life world where the lines between
        </p>
      </div>
    </div>
  </div>
</div>

          <div className='w-4/12 w-[400px] '>
      <div className=''>
        <h3 className='text-[36px] font-bold w-[190px] text-white text-start'>Art and Design</h3>
        <p className='text-white w-[260px] text-start'>Feast your eyes on stunning visuals and concept art that bring the cyberpunk</p>
      </div>
</div>
<div className='w-3/12 w-[300px]  h-[251px] border-2 border-amber-500 rounded-[20px]'>
<div>
  <h2 className='text-[83px] font-bold text-cyber ml-5'>17+</h2>
  <p className='text-[27px] text-white ml-5'>Years of Experiences</p>
</div>
</div>
        </div>
      </Container>
     <div className='py-10 relative'>
     <div className=' left-right'></div>
      <div className="mt-[-30px] top-left-image"></div>
      <div className="mt-[-30px] top-right-image"></div>
      </div> 
    
    </>
  );
};

export default Banner;
