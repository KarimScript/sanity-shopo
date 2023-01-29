import {useState} from 'react'
import Link from 'next/link'
import MobileNav from './MobileNav';
import {CgMenuGridO} from 'react-icons/cg'
import {RiShoppingBasketLine} from 'react-icons/ri'
import { useRouter } from 'next/router';

const Navbar = () => {

  const [open, setOpen] = useState(false);
  const router = useRouter();
  const path = router.pathname ;

  return (
    
<nav className="bg-white px-4 sm:px-6 py-2.5 fixed w-full z-30 top-0 left-0 border-b border-gray-200">
  <MobileNav open={open} setOpen={()=>setOpen(false)} />
  <div className="container flex flex-wrap items-center justify-between mx-auto">
  
  <h1 className="text-xl sm:text-2xl logo">SHOPO</h1>
  
  <div className="items-center justify-center hidden md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
    <Link href="/" className={`${path=='/' ? 'font-bold' : 'font-light'} text-lg`} >Home</Link>
    <Link href="/shop" className={`${path=='/shop' ? 'font-bold' : 'font-light'} text-lg`} >Shop</Link>
    <Link href="/about" className={`${path=='/about' ? 'font-bold' : 'font-light'} text-lg`} >About</Link>
    <Link href="/contact" className={`${path=='/contact' ? 'font-bold' : 'font-light'} text-lg `} >Contact us</Link>
    </ul>
  </div>

  <div className="flex items-center gap-4 md:order-2">
      <button type="button" className="text-white bg-black hover:bg-neutral-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0  ">Login</button>
      <RiShoppingBasketLine size={35} className='cursor-pointer' />
      <CgMenuGridO className='md:hidden cursor-pointer' size={35} onClick={()=> setOpen(true)} />
  </div>
  </div>
</nav>

  )
}

export default Navbar