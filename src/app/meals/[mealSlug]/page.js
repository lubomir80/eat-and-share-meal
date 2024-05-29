import React from 'react'
import Image from 'next/image';
import { getMeal } from '../../../../lis/meals.'
import { notFound } from 'next/navigation';


function MealItemPage({ params }) {
   const meal = getMeal(params.mealSlug)

   if (!meal) {
      notFound()
   }

   let { title, image, summary, instructions, creator, creator_email } = meal;
   instructions = instructions.replace(/\n/g, '<br/>')

   return (
      <>
         <header className='flex  py-8 px-4 gap-3  m-auto max-w-[60rem]'>
            <div className='relative w-[30rem] h-80 '>
               <Image className='object-cover rounded-lg shadow-md shadow-stone-800 animate-slideLeft' src={image} alt={title} fill />
            </div>
            <div className='pt-2 px-4 text-text max-w-[40rem] animate-slideRight'>
               <h1 className='text-5xl font-bold uppercase font-mono'> {title}
               </h1>
               <p
                  className='text-2xl text-[#cfa69b] italic '
               >by <a
                  className='bg-orange font-bold text-transparent bg-clip-text
               hover:bg-lightOrange hover:text-shadow:_0_0_18px_rgba(248_190_42_/_80%)'
                  href={`mailto:${creator_email}`}>{creator}</a></p>
               <p className='text-2xl'>{summary}</p>
            </div>
         </header>
         <main className='text-xl leading-6 bg-[#6e6464] text-black            rounded-md shadow-md shadow-stone-800 p-8 max-w-[60rem] my-4 mx-auto
         animate-slideBottom
         '>
            <p dangerouslySetInnerHTML={{
               __html: instructions
            }}>
            </p>
         </main>
      </>
   )
}

export default MealItemPage