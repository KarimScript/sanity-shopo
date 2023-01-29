import React from 'react'
import Link from 'next/link'
import {AiOutlineClose} from 'react-icons/ai'
import {FiArrowUpRight} from 'react-icons/fi'

const MobileNav = ({open , setOpen}) => {
  return (
<div className={`absolute top-0 right-0 h-screen w-9/12 text-white z-30 bg-black  transition-transform duration-300 ease-in-out ${open ? `translate-x-0` : `translate-x-full`} `}>
    
    <AiOutlineClose size={30} onClick={setOpen} className="absolute right-4 top-4" />

    <div className="flex flex-col mt-16 ">

        <Link className="flex items-center justify-between text-xl font-medium border-b border-neutral-900 my-4 py-2 px-4" href="/" >Home <FiArrowUpRight/></Link>
        <Link className="flex items-center justify-between text-xl font-medium border-b border-neutral-900 my-4 py-2 px-4" href="/shop" >Shop <FiArrowUpRight/></Link>
        <Link className="flex items-center justify-between text-xl font-medium border-b border-neutral-900 my-4 py-2 px-4" href="/about" >About <FiArrowUpRight/></Link>
        <Link className="flex items-center justify-between text-xl font-medium border-b border-neutral-900 my-4 py-2 px-4" href="/contact" >Contact us <FiArrowUpRight/></Link>
           
    </div>  
</div>
  )
}

export default MobileNav