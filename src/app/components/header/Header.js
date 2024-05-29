import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MainHeaderBackground from './Main-Header-Background'
import Navbar from './Navbar'


function Header() {
   return (
      <>
         <MainHeaderBackground />
         <header className='flex justify-between items-center px-8 py-[10%]
      tablet:py-4'>
            <Link href="/" className='flex items-center justify-center gap-8 text-text font-bold uppercase font-mono tracking-widest text-2xl'>
               <Image src="/logo.png" alt='logo'
                  priority width={80} height={80}
                  style={{ objectFit: "contain" }} className='drop-shadow-xl' />
               NextFood
            </Link>

            <Navbar />
         </header>
      </>
   )
}

export default Header