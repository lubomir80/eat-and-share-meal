import React from 'react'
import MealsItem from './MealsItem'

export default function MealsGrid({ meals }) {
   return (
      <ul className='w-[90%] max-w-[90rem] grid grid-cols-meal
      gap-20 my-8 mx-auto'>
         {meals.map(meal => <li key={meal.id}>
            <MealsItem {...meal} />
         </li>)}
      </ul>
   )
}

