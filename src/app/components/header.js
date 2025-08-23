import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div className='w-full h-[86vh] flex items-center px-[5%] max-[960px]:flex-col max-[960px]:gap-20  '>
      {/* text */}
      <div className='w-[50%] max-[960px]:w-full max-[960px]:items-center flex flex-col gap-[50px]'>
        <div className='w-full text-center'>
          <h1 className='font-bold text-[50px] w-full max-[960px]:text-center flex gap-3'>The <p className='text-[#FF7426]'> Smart</p></h1>
          <h1 className='font-bold text-[50px] w-full max-[960px]:text-center flex gap-3'>Choice  <p className='text-[#FF7426]'>For Future</p></h1>
          <p className='text-[#8A8A8A] w-[70%]'>Elearn is a global training provider based across the UK that specialises in accredited and bespoke training courses. We crush the...</p>
        </div>

        <div className='w-[80%] flex items-center justify-between bg-white p-2 rounded-full shadow-lg'>
          <div>
            {/* icon */}
            <input placeholder='Search' className='focus:outline-none' />
          </div>

          <div>
            <button className='w-[120px] py-3 bg-[#4D2C5E] rounded-full text-white'>Continue</button>
          </div>
        </div>
      </div>

      {/* img */}
      <div className='w-[50%] max-[960px]:w-full h-full flex items-center justify-center ' >
        <Image src='/img/OBJECTS.svg' width={600} height={600} alt='img' />
      </div>
    </div>
  )
}

export default Header
