"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

function NavLink({ children, href }) {
   const path = usePathname()

   const activeStyle = `bg-orange bg-clip-text text-transparent text-text`
   const onActiveLink = (href) =>
      path.startsWith(href) ? activeStyle : ""


   return (
      <li>
         <Link
            className={`font-bold px-2 py-4 rounded-sm 
            hover:bg-orange hover:text-transparent hover:bg-clip-text
            ${onActiveLink(href)}`}
            href={href}>
            {children}
         </Link>
      </li>
   )
}

export default NavLink