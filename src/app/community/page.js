import Image from 'next/image'
import React from 'react'

function CommunityPage() {
   return (
      <>
         <header className="gap-3 mt-12 mb-20 mx-auto w-[90%] max-w-[75rem] text-text text-3xl text-center font-mono ">
            <h1 className='mb-2 text-5xl font-bold'>
               One shared passion: <span>Food</span>
            </h1>
            <p className="bg-orange text-transparent text-2xl font-bold bg-clip-text">
               Join our community and share your favorite recipes!
            </p>
         </header>
         <main className="w-[90%] max-w-[40rem] my-0 mx-auto text-center">
            <h2 className='text-h2 font-mono mb-12  text-text'>
               Community Perks
            </h2>

            <ul className=" my-12 mx-0 p-0">
               <li className='flex flex-col items-center gap-8'>
                  <Image
                     src="/icons/meal.png"
                     alt="A delicious meal"
                     className='object-contain'
                     width={128} height={128} />
                  <p className='font-mono text-2xl font-bold m-0 text-text'>
                     Share & discover recipes
                  </p>
               </li>
               <li className='flex flex-col items-center gap-8'>
                  <Image
                     src="/icons/community.png"
                     alt="A crowd of people, cooking"
                     className='object-contain'
                     width={128} height={128} />
                  <p className='font-mono text-2xl font-bold m-0 text-text'>
                     Find new friends & like-minded people
                  </p>
               </li>
               <li className='flex flex-col items-center gap-8'>
                  <Image
                     src="/icons/events.png"
                     alt="A crowd of people at a cooking event"
                     className='object-contain'
                     width={128} height={128} />
                  <p className='font-mono text-2xl font-bold m-0 text-text'>
                     Participate in exclusive events
                  </p>
               </li>
            </ul>
         </main>
      </>
   )
}

export default CommunityPage