
import React, { Fragment } from 'react'
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
  } from "@/components/ui/resizable"
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from '@/components/ui/separator'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { SendHorizontal } from 'lucide-react'
import { Input } from '@/components/ui/input'
import MessageBox from '@/components/MessageBox'
import getChat from '@/lib/actions/getChat'
import LeftRight from '@/components/LeftRight'
import Support from "@/../public/support.jpg"
import Image from 'next/image'
import Relations from '@/components/Relations'


const page = async ({params}) => {
  console.log(params)
  const response = await getChat(params.id);
  let data = response.payload;

  return (
    <main className=' h-dvh lg:h-[600px] md:px-6 lg:px-12 xl:px-28 '>

    <section
      
      className="h-full w-full border-x border-b flex"
    >
      <article className='hidden lg:block lg:w-1/4'>
        <div className="h-full w-full p-6 space-y-4 [&>div]:cursor-pointer">
          {/* <Card className="w-full hover:bg-slate-200">
            <div className="flex justify-center gap-4 p-4">
            <Image className='h-30 w-30 rounded-full' src={Support} alt="pp" />
            </div>
          </Card>
          <p className="text-2xl font-semibold">Support Relation</p>
          <p className='text-gray-700'>Participants: 2</p> */}

          <Relations />
          
        </div>
      </article>

      <Separator orientation="vertical" />

      <article className='w-full lg:w-3/4 lg:relative'>
      <div className=' h-full overflow-y-scroll overflow-hidden lg:pb-12'>
{
  data.map((item, index) => {
    return(

      <div key={index*37} className=" p-2">
          {/* chat bubble left */}
       <LeftRight item={item} />
          </div>




    )
  })
}
</div>
        
    <MessageBox relation_id={params.id} />

      </article>
    </section>

    </main>
  )
}

export default page
    