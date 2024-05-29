"use client"

import { useFormState } from "react-dom"
import React from 'react'
import ImagePicker from '@/app/components/share/ImagePicker'
import InputShareForm from '@/app/components/share/InputShareForm'
import { shareMeal } from '../../../../lis/actions'
import FormSubmit from '@/app/components/share/FormSubmit'

export default function ShareMealPage() {
   const [state, formAction] = useFormState(shareMeal, { nessage: null })

   return (
      <>
         <header className='gap-12 mt-12 mx-auto mb-20 w-[90%] colot-text text-2xl'>
            <h1 className='text-5xl font-bold uppercase font-mono'>
               Share your <span>favorite meal</span>
            </h1>
            <p className='bg-orange text-transparent text-2xl font-bold bg-clip-text' >
               Or any other meal you feel needs sharing!
            </p>
         </header>
         <main className='w-[90%] max-w-[75rem] my-12 mx-auto color-white'>
            <form className='max-w-[50rem]' action={formAction}>
               <div className='flex gap-3'>
                  <InputShareForm className="w-full" type="text" name="name">Your name</InputShareForm>
                  <InputShareForm className="w-full" type="email" name="email">Your email</InputShareForm>
               </div>
               <InputShareForm type="text" name="title">Title</InputShareForm>
               <InputShareForm type="text" name="summary">Short summary</InputShareForm>
               <InputShareForm area={true} rows="10" name="instructions">Instructions</InputShareForm>
               <ImagePicker lable="Your image" name="image" />
               {state.message &&
                  <p className="text-red-500 text-2xl font-bold ">
                     {state.message}
                  </p>}
               <p className='text-right'>
                  <FormSubmit />
               </p>
            </form>
         </main>
      </>
   )
}
