"use client"
import Image from 'next/image';
import React, { useRef, useState } from 'react'

export default function ImagePicker({ lable, name }) {
   const [pickedImage, setPickedImage] = useState()
   const colorInputRef = useRef()

   function handleImageChange(e) {
      const file = e.target.files[0];

      if (!file) {
         setPickedImage(null);
         return;
      }

      const fileReader = new FileReader();
      fileReader.onload = () => {
         setPickedImage(fileReader.result)
      }
      fileReader.readAsDataURL(file)
   }

   function handlePickClick() {
      colorInputRef.current.click()
   }


   return (
      <div>
         <label htmlFor={name}>{lable}</label>
         <div className='flex items-start gap-6 my-4'>
            <div className='w-40 h-40 border-2 border-[#a4abb9] flex justify-center items-center text-center color-[#a4abb9] relative'>
               {!pickedImage && <p className='p-4'>No image picked yet</p>}
               {pickedImage && <Image src={pickedImage} alt="selected image" fill />}
            </div>
            <input
               onChange={handleImageChange}
               ref={colorInputRef}
               className='hidden'
               type="file"
               id={name}
               name={name}
               accept='image/png, image/jpeg'
               required />
            <button
               onClick={handlePickClick}
               className='py-2 px-6 bg-[#a4abb9] rounded-sm cursor-pointer hover:bg-[#b3b9c6] focus:bg-[#b3b9c6]'
               type="button">
               Pick an Image
            </button>
         </div>
      </div>
   )
}
