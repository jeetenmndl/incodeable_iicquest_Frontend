
import React from 'react'

import Card1 from "@/../public/card1.svg"
import Card2 from "@/../public/card2.svg"
import Card3 from "@/../public/card3.svg"
import Image from 'next/image';

export const metadata = {
    title: "About",
    description: "Introducing hamrodera, your go-to destination for seamless room hunting. Whether you're a student, a working professional, or someone in search of a cozy space to call your own, hamrodera has got you covered!",
  };
  

const page = () => {
  return (
    <>
    
    <main className='px-4 md:px-20 py-4 md:py-8'>
        <h1 className='text-3xl lg:text-5xl font-bold mb-4 md:mt-4 md:mb-12 text-center'>About</h1>

        <hr />

        <section className='py-8 lg:py-12 grid grid-cols-1 lg:grid-cols-2 gap-4'>
            <div>
                {/* <h2 className='text-2xl font-semibold sticky top-8'>About Pariwar</h2> */}
                <section className="grid grid-cols-1 lg:grid-cols-3 px-6 lg:px-0 gap-6 [&>div]:rounded-md">
        
        <div className="border lg:h-96 p-5 lg:p-3 bg-green-100">
          <h3 className="font-medium text-2xl">Build a virtual Family</h3>
        <p className="text-xs text-gray-600 pt-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum alias rem perspiciatis delectus earum dolorem iusto praesentium facere</p>
        <hr className="border-blue-200 mt-5" />
        <div className="w-full px-4 py-8">
          <Image src={Card1} className="w-full " alt="card1" />
        </div>
        </div>


        <div className="border lg:h-96 p-5 lg:p-3 bg-blue-100">
          <h3 className="font-medium text-2xl">Share Thoughts & Problems</h3>
        <p className="text-xs text-gray-600 pt-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum alias rem perspiciatis delectus earum dolorem iusto praesentium facere</p>
        <hr className="border-blue-200 mt-5" />
        <div className="w-full px-8 py-4">
          <Image src={Card2} className="w-full " alt="card1" />
        </div>
        </div>
        
        <div className="border lg:h-96 p-5 lg:p-3 bg-orange-100">
          <h3 className="font-medium text-2xl">Track Down the Resolution</h3>
        <p className="text-xs text-gray-600 pt-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum alias rem perspiciatis delectus earum dolorem iusto praesentium facere</p>
        <hr className="border-blue-200 mt-5" />
        <div className="w-full px-8 py-4">
          <Image src={Card3} className="w-full " alt="card1" />
        </div>
        </div>

      </section>
            </div>
            <article>
                <p>There are students who know they can solve their problems by discussing with their specific family members. Yet they can’t share their feelings and problems because of various reasons leading to mental health issues. Create and build a web relation that we are in need of.</p>
                <ul className='list-disc pl-4 space-y-4 mt-4 md:mt-8'>
                    <li>Build a web relation you require.</li>
                    <li>Get support and a companion.</li>
                    <li>Discuss problems and get solution like a family. </li>
                </ul>
            </article>
        </section>

        <hr />


    </main>

        
    </>
  )
}

export default page