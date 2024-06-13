
import Feed from "@/components/Feed";
import IssueForm from "@/components/IssueForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Banner from "@/../public/banner.jpg"
import Image from "next/image";

export default function Home() {
  return (
    <>
    <main className=' px-2 md:px-6 lg:px-12 xl:px-28 md:pt-8 flex flex-col-reverse lg:flex-row gap-8 xl:gap-16 md:justify-between'>
      
      <section className="lg:w-2/3 ">
      

        <div className=" px-2 md:px-0 rounded-lg h-60 overflow-hidden grid place-content-center">
         <Image src={Banner} className="w-full brightness-75 " alt="banner" />
        </div>

        <hr className="border-gray-300" />

        <div className="my-8 px-2 md:px-0">
          <h2 className="text-3xl font-semibold">Feed
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
    <h2 className="text-3xl font-semibold">Lorem, ipsum.</h2>
    <article className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
      <Card>
        <CardHeader>
          <CardTitle>Feature 1</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="leading-7">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci cumque culpa commodi ipsa alias dolore aut aliquam, aliquid quam voluptate repudiandae sequi labore id impedit excepturi harum similique. Quis, suscipit!!</p>
        </CardContent>
        <CardFooter>
          <span className="text-sm font-medium text-blue-800 ">lorem lorem!</span>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Feature 2</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="leading-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem sit suscipit provident et accusamus excepturi dicta, ea rerum recusandae assumenda! Provident mollitia porro aperiam cupiditate? Similique enim earum consequatur perferendis..</p>
        </CardContent>
        <CardFooter>
          <span className="text-sm font-medium text-blue-800 ">lorem lorem!</span>
        </CardFooter>
      </Card>
    </article>
   </section>
   </>
  );
}

