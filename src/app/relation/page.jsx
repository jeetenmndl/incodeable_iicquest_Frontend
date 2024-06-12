import React from 'react'
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
  } from "@/components/ui/resizable"
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import Link from 'next/link'

const page = () => {
  return (
    <main className=' h-[600px] px-2 md:px-6 lg:px-12 xl:px-28 '>

    <ResizablePanelGroup
      direction="horizontal"
      className="h-full w-full border-x border-b"
    >
      <ResizablePanel defaultSize={25}>
        <div className="h-full w-full p-6">
          <Link href="/relation/1" className='mb-4'><Card className="w-full hover:bg-slate-200">
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
          </Link>
          
          <Link href="/relation/1" className='mb-4'><Card className="w-full hover:bg-slate-200">
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
          </Link>

          <Link href="/relation/1" className='mb-4'><Card className="w-full hover:bg-slate-200">
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
          </Link>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={75}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold text-3xl text-main">Select relation to chat </span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>

    </main>
  )
}

export default page