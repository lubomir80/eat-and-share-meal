import Link from "next/link";
import ImageSlide from "./components/images/ImageSlide";



export default function Home() {

   return (
      <>
         <header className="flex gap-12 my-12 mx-auto w-[90%] max-w-[75rem]">
            <div className="w-[40rem] h-[25rem]" >
               <ImageSlide />
            </div>
            <div>
               <div className="text-text text-2xl">
                  <h1 className={`text-4xl mb-2 font-bold font-mono tracking-wide uppercase bg-orange text-transparent bg-clip-text`}>
                     NextFood for everyone</h1>
                  <p>Taste & enjoy</p>
               </div>
               <div className="text-xl flex gap-4">
                  <Link href="/community" className="inline-block mt-4 py-2 px-4 rounded-md bg-orange hover:bg-lightOrange"
                  >Join the Community
                  </Link>
                  <Link href="/meals" className="inline-block mt-4 py-2 px-4 rounded-md bg-orange hover:bg-lightOrange">
                     Explore Meals
                  </Link>
               </div>
            </div>
         </header >
         <main>
            <section className="flex flex-col text-text text-2xl
            max-w-[50rem] w-[90%] my-12 mx-auto text-center">
               <h2 className="text-h2 mb-4">Section nr 1</h2>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, nostrum! Sint sunt quo quaerat quos provident cum laborum? Dolorum necessitatibus et, quisquam ratione pariatur dignissimos culpa numquam in ducimus sed!quaerat quos provident cum laborum? Dolorum necessitatibus et, quisquam ratione pariatur dignissimos culpa numquam in ducimus sed!
               </p>
               <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, debitis facilis quam mollitia distinctio perferendis aperiam eos, modi ipsam facere qui inventore nesciunt, veritatis cupiditate a molestiae. Omnis, sunt error!
               </p>
            </section>
            <section className="flex flex-col text-text text-2xl
            max-w-[50rem] w-[90%] my-12 mx-auto text-center">
               <h2 className="text-h2 mb-4">Section nr 2</h2>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, nostrum! Sint sunt quo quaerat quos provident cum laborum? Dolorum necessitatibus et, quisquam ratione pariatur dignissimos culpa numquam in ducimus sed! quaerat quos provident cum laborum? Dolorum necessitatibus et, quisquam ratione pariatur dignissimos culpa numquam in ducimus sed!
               </p>
               <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, debitis facilis quam mollitia distinctio perferendis aperiam eos, modi ipsam facere qui inventore nesciunt, veritatis cupiditate a molestiae. Omnis, sunt error!
               </p>
            </section>
         </main>
      </>
   );
}
