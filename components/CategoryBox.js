import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const CategoryBox = ({text,img,link}) => {
  return (
    <div className='h-44 bg-neutral-900 rounded-xl py-8 px-7 relative text-left category-box overflow-hidden '>
      <h2 className='z-20 relative text-slate-100 tracking-wider text-xl'>{text}</h2>
      <Link href={link} className={`flex relative w-fit rounded-full px-6 py-2 mt-7 z-20 text-white border-2 border-slate-300 btn white-btn `}>
       <h3 className='font-medium text-sm md:text-sm'>Let's shop</h3>
      </Link>

      <Image src={img} width={240} height={150} alt='category' className='absolute right-2 z-10 top-0 opacity-75' />
    </div>
  )
}

export default CategoryBox