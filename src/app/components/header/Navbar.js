
import React from 'react'
import NavLink from './NavLink'

const navbarLinks = [
   {
      href: "/meals",
      title: "Browse Meals"
   },
   {
      href: "/community",
      title: "Foodies Community"
   },
]

function Navbar() {

   return (
      <nav>
         <ul className='flex gap-6 text-xl font-mono flex-wrap '>
            {navbarLinks.map(({ href, title }) => (
               <NavLink key={title} href={href} >
                  {title}
               </NavLink>
            ))}
         </ul>
      </nav>
   )
}

export default Navbar