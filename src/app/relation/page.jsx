import React from 'react'
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
  } from "@/components/ui/resizable"
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import Link from 'next/link'
import Relations from '@/components/Relations'

const page = () => {
  return (
    <main className=' h-[600px] px-2 md:px-6 lg:px-12 xl:px-28 '>

    <ResizablePanelGroup
      direction="horizontal"
      className="h-full w-full border-x border-b"
    >
      <ResizablePanel defaultSize={25}>
        <div className="h-full w-full p-6">
          <Relations />
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