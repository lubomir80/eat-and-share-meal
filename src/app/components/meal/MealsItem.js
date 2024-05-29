import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function MealsItem({ title, slug, image, summary, creator }) {
   return (
      <article className="flex flex-col justify-between h-full rounded-md shadow-lg shadow-stone-800 overflow-hidden text-text bg-meal animate-loading">
         <header>
            <div className="relative h-60">
               <Image className='object-cover' src={image} alt={title} fill />
            </div>
            <div className="pt-2 px-4 pb-0">
               <h2 className="text-h2">{title}</h2>
               <p className='text-xs text-[#cfa69b] italic '>
                  by {creator}
               </p>
            </div>
         </header>
         <div className="flex flex-col justify-between h-full">
            <p className="pt-4 px-4 pb-0">{summary}</p>
            <div className="p-4 text-right">
               <Link className="inline-block mt-4 py-2 px-4 rounded-lg
                  bg-orange text-white font-bold
                  hover:bg-lightOrange hover:shadow-md hover:shadow-stone-900 action:bg-lightOrange 
                  action:shadow-md action:shadow-slate-800 
                  "
                  href={`/meals/${slug}`}>View Details</Link>
            </div>
         </div>
      </article>
   )
}
