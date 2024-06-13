
import Feed from "@/components/Feed";
import IssueForm from "@/components/IssueForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Banner from "@/../public/banner.jpg"
import Banner2 from "@/../public/banner2.jpg"
import Welfare from "@/../public/welfare.jpg"
import Care from "@/../public/care.jpg"
import Bpkihs from "@/../public/bpkihs.jpg"
import Kopila from "@/../public/kopila.jpg"

import Logo from "@/../public/logo.png"


import Image from "next/image";

export default function Home() {
  return (
    <>
    <main className=' px-2 md:px-6 lg:px-12 xl:px-28 md:pt-8 flex flex-col-reverse lg:flex-row gap-8 xl:gap-16 md:justify-between'>
      
      <section className="lg:w-2/3 ">
      

        <div className="relative px-2 md:px-0 rounded-lg h-60 overflow-hidden grid place-content-center">
         <Image src={Banner} className="w-full brightness-50 " alt="banner" />
         <h1 className="text-2xl lg:text-4xl font-bold my-4 lg:my-8 absolute top-0 text-white left-8">परिवार : जोडौ न्यानो सम्बन्ध
        </h1>
        </div>
        
        <p className="mb-6 leading-8 hidden">There are students who know they can solve their problems by discussing with their specific family members. Yet they can’t share their feelings and problems because of various reasons leading to mental health issues. Create and build a web relation that we are in need of.</p>
        {/* <div className=" px-2 my-4 md:px-0 rounded-lg h-60 overflow-hidden grid place-content-center">
         <Image src={Banner2} className="w-full brightness-75 " alt="banner" />
        </div> */}

        <hr className="mt-12 border-gray-300" />

        <div className="my-8">
          <h2 className="text-3xl font-semibold">Your Relations<span className="text-xl text-gray-700">(chats)</span></h2>
          <article className="flex gap-8 mt-8">
            <Image src={Logo} className="h-28 w-28 rounded-full" alt="avatar" />
            <Image src={Logo} className="h-28 w-28 rounded-full" alt="avatar" />
            <Image src={Logo} className="h-28 w-28 rounded-full" alt="avatar" />
            <Image src={Logo} className="h-28 w-28 rounded-full" alt="avatar" />

          </article>


        </div>


        <hr className="mt-12 border-gray-300" />


        <div className="my-8 px-2 md:px-0">
          <h2 className="text-3xl font-semibold">Feeds matching your character
          </h2>
          
          <Feed />
        </div>

       
        <hr className="border-gray-300" />

        
      </section>

      <section className="lg:w-1/3 px-2 md:px-0 pt-4 lg:pt-0">
        <IssueForm />
      </section>
    
   </main>

   <hr className="border-gray-300 mx-28 my-8" />

   <section className="py-8  px-2 md:px-6 lg:px-12 xl:px-28 ">
    <h2 className="text-3xl font-semibold">NGO initiative highlights.</h2>
    <article className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
      <Card>
      <CardHeader className="relative">
          <div className="absolute top-2 right-4">
          <Image className="w-20 h-20 rounded-full" src={Care} alt="kopila" />
          </div>
          <CardTitle> Fitness and yoga sessions
          </CardTitle>
          <CardDescription> June 18, 2024
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="leading-7">Join Student Care on June 21, 2024, at the Yoga Room Center for rejuvenating fitness and yoga sessions. Enhance your physical and mental well-being in a supportive environment. All students are welcome!</p>
        </CardContent>
        <CardFooter>
          <span className="text-sm font-medium text-blue-800 ">Organized by: Student Care</span>
        </CardFooter>
      </Card>

      <Card>
      <CardHeader className="relative">
          <div className="absolute top-2 right-4">
          <Image className="w-20 h-20 rounded-full" src={Kopila} alt="kopila" />
          </div>
          <CardTitle>Book and School Supply Drives</CardTitle>
          <CardDescription> June 25, 2024
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="leading-7">Join Kopila - Nepal on June 25, 2024, at Library Connect for a book and school supply drive. Help support education by donating books and supplies to students in need. Your contributions can make a difference!</p>
        </CardContent>
        <CardFooter>
          <span className="text-sm font-medium text-blue-800 ">Organized by: Kopila Nepal</span>
        </CardFooter>
      </Card>
      
      <Card>
      <CardHeader className="relative">
          <div className="absolute top-2 right-4">
          <Image className="w-20 h-20 rounded-full" src={Bpkihs} alt="kopila" />
          </div>
          <CardTitle>Student Free Health Checkup
          </CardTitle>
          <CardDescription> June 25, 2024
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="leading-7">The Student Welfare Society is organizing a free health checkup for students on July 1, 2024, at Birat Nursing Home, Kamal Pokhari Marg, Biratnagar. Prioritize your health and join us for this beneficial event!</p>
        </CardContent>
        <CardFooter>
          <span className="text-sm font-medium text-blue-800 ">Organized by: B.P.K.I.H.S
          </span>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader className="relative">
          <div className="absolute top-2 right-4">
          <Image className="w-20 h-20 rounded-full" src={Welfare} alt="kopila" />
          </div>
          <CardTitle>Healthcare Sessions</CardTitle>
          <CardDescription> June 25, 2024
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="leading-7">Join us for fitness and yoga sessions organized by the Student Welfare Society on June 21, 2024, at Cultural Exchange Programs, Biratnagar-05 Kani Pani. Enhance your well-being in a culturally enriching environment!</p>
        </CardContent>
        <CardFooter>
          <span className="text-sm font-medium text-blue-800 ">Organized by: Student Welfare Society</span>
        </CardFooter>
      </Card>
    </article>
   </section>
   </>
  );
}

