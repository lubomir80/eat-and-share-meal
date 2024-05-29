"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react'


const images = [
   { image: "/burger.jpg", alt: 'A delicious, juicy burger' },
   { image: "/curry.jpg", alt: 'A delicious, spicy curry' },
   { image: "/dumplings.jpg", alt: 'Steamed dumplings' },
   { image: "/macncheese.jpg", alt: 'Mac and cheese' },
   { image: "/pizza.jpg", alt: 'A delicious pizza' },
   { image: "/schnitzel.jpg", alt: 'A delicious schnitzel' },
   { image: "/tomato-salad.jpg", alt: 'A delicious tomato salad' },
];



function ImageSlide() {
   const [currentImageIndex, setCurrentImageIndex] = useState(0)

   useEffect(() => {
      const interval = setInterval(() => {
         setCurrentImageIndex((prevIndex) =>
            prevIndex < images.length - 1 ? prevIndex + 1 : 0
         );
      }, 5000);

      return () => clearInterval(interval);
   }, []);



   return (
      <div className='relative w-full h-full overflow-hidden rounded-md
         shadow-md shadow-stone-700'>
         {images.map((img, index) =>
            <Image
               key={index}
               className={`absolute w-full h-full top-0 left-0 object-cover transition 
                  ${index === currentImageIndex ? "opacity-1 animate-slide" : "opacity-0 "}
                  `}
               src={img.image} alt={img.alt} fill
               style={{ objectFit: "cover" }} />)}
      </div>
   )
}

export default ImageSlide