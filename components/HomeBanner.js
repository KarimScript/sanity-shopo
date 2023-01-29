import React from 'react'
import Image from 'next/image'
import Headset from '@/public/images/headset1.webp'
import Link from 'next/link'
import {FiArrowUpRight} from 'react-icons/fi'

const HomeBanner = () => {
  return (
    <div className='bg-neutral-900 w-11/12 mx-auto rounded-xl mt-24 p-8 sm:p-14 flex items-center '>

     <div className='xl:w-7/12 w-12/12 z-20 '>
      <h1 className='text-white text-4xl lg:text-8xl space-x-1'>Where All You Need</h1>
      <p className='text-neutral-300 md:text-neutral-400 lg:ml-4 mt-5 text-sm lg:text-2xl font-light w-10/12'>Shop computers , laptops ,  headphones , headsets , speakers  and all accessories in one place .. </p>
  
      <Link href={'/register'} className={`flex w-fit rounded-full  px-7 py-2 md:py-4 mt-7 text-white border-2 border-slate-300 btn white-btn `}>
       <h3 className='font-medium text-sm md:text-2xl'>Sign Up</h3>
       <FiArrowUpRight size={30} className='ml-3 md:ml-6' />
      </Link>

     </div>

     <Image src={Headset} width={530} height={300} alt='product' className='absolute right-36 z-10 banner-img' />
      

    </div>
  )
}

export default HomeBanner