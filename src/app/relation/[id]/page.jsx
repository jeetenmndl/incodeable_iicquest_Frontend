
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


const page = () => {
  return (
    <main className=' h-dvh lg:h-[600px] md:px-6 lg:px-12 xl:px-28 '>

    <section
      
      className="h-full w-full border-x border-b flex"
    >
      <article className='hidden lg:block lg:w-1/4'>
        <div className="h-full w-full p-6 space-y-4 [&>div]:cursor-pointer">
          <Card className="w-full hover:bg-slate-200">
            <div className="flex gap-4 p-4">
            <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@profile pic" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
                <h2 className='text-xl font-medium'>Relation1</h2>
                <span className='text-sm text-gray-500'>something in it</span>
            </div>

            </div>
          </Card>
          <Card className="w-full hover:bg-slate-200">
            <div className="flex gap-4 p-4">
            <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@profile pic" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
                <h2 className='text-xl font-medium'>Relation1</h2>
                <span className='text-sm text-gray-500'>something in it</span>
            </div>

            </div>
          </Card>
          <Card className="w-full hover:bg-slate-200">
            <div className="flex gap-4 p-4">
            <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@profile pic" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
                <h2 className='text-xl font-medium'>Relation1</h2>
                <span className='text-sm text-gray-500'>something in it</span>
            </div>

            </div>
          </Card>
        </div>
      </article>

      <Separator orientation="vertical" />

      <article className='w-full lg:w-3/4 lg:relative'>
      <div className=' h-full overflow-y-scroll overflow-hidden lg:pb-12'>
{
  [1,2,3,4,5,6].map((item) => {
    return(
      <Fragment key={item}>
        {
          item%2==0?
          <div className=" p-2">
          {/* chat bubble left */}
        <div className='flex gap-3'>
        <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@profile pic" />
        <AvatarFallback>CN</AvatarFallback>
    </Avatar>

   <div className="bg-slate-300 flex flex-col w-full lg:w-96 leading-1.5 p-4 border-gray-200  rounded-e-xl rounded-es-xl dark:bg-gray-900">
      <div className="flex items-center space-x-3 rtl:space-x-reverse">
         <span className="text-sm font-semibold text-gray-800 dark:text-white">Bonnie Green</span>
         <span className="text-sm font-normal text-gray-700 dark:text-gray-400">11:46</span>
      </div>
      <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">Thats awesome. I think our users will really appreciate the improvements.</p>
      <span className="text-sm font-normal text-gray-600 dark:text-gray-400">Delivered</span>
   </div>
       </div>
          </div>
        :
        <div className=" p-2">
        {/* chat bubble left */}
          <div className='flex flex-row-reverse gap-3'>
          <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@profile pic" />
          <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        <div className="flex flex-col w-full lg:w-96 leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-s-xl rounded-ee-xl  dark:bg-gray-700">
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <span className="text-sm font-semibold text-gray-900 dark:text-white">Bonnie Green</span>
              <span className="text-sm font-normal text-gray-500 dark:text-gray-400">11:46</span>
            </div>
            <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">Thats awesome. I think our users will really appreciate the improvements.</p>
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">Delivered</span>
        </div>
        </div>
          </div>
        }
      </Fragment>


    )
  })
}
</div>
        
    <MessageBox />
    
      </article>
    </section>

    </main>
  )
}

export default page
    