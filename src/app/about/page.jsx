
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
                <h2 className='text-2xl font-semibold sticky top-8'>About Pariwar</h2>
                
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