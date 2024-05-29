"use client"
import Link from 'next/link'
import React from 'react'

function error() {
   return (
      <div className='mt-12 mb-20 mx-auto w-[90%] max-w-[75rem] text-center'>
         <h1 className='bg-orange text-transparent bg-clip-text mb-2 text-5xl font-bold leading-tight'>
            An error
         </h1>
         <p className='text-2xl font-bold '>
            Faild to create meal
         </p>
         <Link href="/" className='mt-8 text-xl inline-block py-2 px-4 rounded-md bg-orange hover:bg-lightOrange'>
            Go home
         </Link>
      </div>
   )
}

export default error