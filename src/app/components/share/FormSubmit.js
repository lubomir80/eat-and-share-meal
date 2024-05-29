"use client"
import { useFormStatus } from "react-dom"


export default function FormSubmit() {
   const { pending } = useFormStatus();

   return (
      <button
         disabled={pending}
         type='submit'
         className='py-3 border-0 px-8 bg-orange text-white rounded-md cursor-pointer text-xl shadow-sm shadow-stone-800
                     hover:bg-lightOrange focus:bg-lightOrange 
                     disabled:bg-disable disabled:text-600 disabled:cursor-not-allowed' >
         {pending ? 'Loading...' : 'Share Meal'}
      </button>
   )
}
