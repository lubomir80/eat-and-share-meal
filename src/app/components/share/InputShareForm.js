import React from 'react'

function InputShareForm({ className, type, name, children, area, rows }) {
   if (area) {
      return (
         <p className={`${className}`}>
            <label
               className='block mb-2 text-xl font-mono uppercase font-bold'
               htmlFor={name}>{children}</label>
            <textarea
               className='block w-full py-2 px-4 rounded-md border border-stone-500 bg-[#1c2027] text-xl font-mono text-text
               focus:bg-[#1f252d] outline-[#f99f2a]'
               id={name}
               name={name}
               rows={rows}
               required>
            </textarea>
         </p>
      )
   }

   return (
      <p className={`${className}`}>
         <label
            className='block mb-2 text-xl font-mono uppercase font-bold'
            htmlFor={name}>{children}</label>
         <input type={type} id={name} name={name} required
            className='block w-full py-2 px-4 rounded-md border border-stone-500 bg-[#1c2027] text-xl font-mono text-text
            focus:bg-[#1f252d] outline-[#f99f2a]' />
      </p>
   )
}

export default InputShareForm