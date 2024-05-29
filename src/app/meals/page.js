import Link from 'next/link'
import React, { Suspense } from 'react'
import MealsGrid from '../components/meal/MealsGrid'
import { getMeals } from '../../../lis/meals.'

async function Meals() {
   const meals = await getMeals()
   return <MealsGrid meals={meals} />
}

function Loading() {
   return (
      <p className='text-center transition animate-loading'>
         Fetching meals...
      </p>
   )
}


async function MealsPage() {
   return (
      <>
         <header className='gap-3 mt-12 mb-20 mx-auto w-[90%] max-w-[75rem] text-text text-left font-mono'>
            <h1 className='mb-2 text-5xl font-bold'>
               Delicious meals, created <span>by you</span>
            </h1>
            <p className='bg-orange text-transparent text-2xl font-bold bg-clip-text'>
               Choose your favorite recipe and cook it yourself
            </p>
            <Link href="/meals/share"
               className='text-xl inline-block mt-4 py-2 px-4 rounded-md bg-orange hover:bg-lightOrange'>
               Share Your Favorite Recipe
            </Link>
         </header>
         <main>
            <Suspense fallback={<Loading />}>
               <Meals />
            </Suspense>
         </main>
      </>
   )
}

export default MealsPage