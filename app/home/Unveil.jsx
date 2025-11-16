import React from 'react'
import Container from './Container'
import Image from "next/image";
const Unveil = () => {
  return (
  <>
  <div className='py-10 relative'>
   

   <Container>
     <div className='grid-cols-2 flex gap-6'>
   
     <div className='h-[800px]'>
         <div >
             <Image src="/image/Unveil.png" alt='dream' width={600} height={700}/>
         </div>
     </div>
     <div className=''>
         <h2 className='ml-10 w-[600px] text-white font-bold text-[57px] ' >Unveil <span className='text-cyber'>the Secrets of the</span> Cybernetic Underworld.</h2>
         <p className='ml-10 text-[18px] text-white w-[500px] py-10'>
         A realm where advanced technology meets dystopian reality. Our website is your gateway to a universe of neon lights, gritty streets, and cybernetic enhancements. 
         </p>
         <div className="grid grid-cols-1">
  <div className="ml-[20px] w-[500px] border-2 border-amber-500 rounded-[20px] p-4">
    <div className="flex gap-4 items-center">
      <Image
        src="/image/helmet.png"
        alt="helmet"
        width={160}  
        height={160} 
        className="object-contain rounded-lg"
      />

      <div>
        <h4 className="text-[20px] text-white font-bold">
          Join the Revolution
        </h4>
        <h3 className="text-[18px] w-[300px] text-white">
          Explore the high-tech, low-life world where the lines between humanity and machinery blur.
        </h3>
      </div>
    </div>
  </div>
</div>

     </div>
     </div>
   </Container>
 
 </div>
  </>
  )
}

export default Unveil