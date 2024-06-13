'use client'

import React, { useEffect, useState } from 'react'
import { toast } from './ui/use-toast';

import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'

const LeftRight = (props) => {
    const {item} = props;
    useEffect( () => {
        const token = localStorage.getItem("id");
        if(token=="" || token==null){
            toast({
                title: "Oops !",
                description: "Log in.",
            });
            console.log(token)
            router.push("/auth");
        }
        setuser(token);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const [user, setuser] = useState(null)
  return (
    <>
        {
        item.sender==user?
        <div className='flex gap-3 flex-row-reverse'>
        <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@profile pic" />
        <AvatarFallback>CN</AvatarFallback>
    </Avatar>

   <div className="bg-slate-200 flex flex-col w-full lg:w-96 leading-1.5 p-4 border-gray-200  rounded-s-xl rounded-ee-xl dark:bg-gray-900">
      <div className="flex items-center space-x-3 rtl:space-x-reverse">
         <span className="text-sm font-semibold text-gray-800 dark:text-white">{item.username}</span>
         <span className="text-sm font-normal text-gray-700 dark:text-gray-400">{item.date.slice(11,16)}</span>
      </div>
      <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">{item.message}</p>
      <span className="text-sm font-normal text-gray-600 dark:text-gray-400">Delivered</span>
   </div>
       </div>
       :
       

<div className='flex gap-3'>
<Avatar>
    <AvatarImage src="https://github.com/shadcn.png" alt="@profile pic" />
<AvatarFallback>CN</AvatarFallback>
</Avatar>

<div className="bg-slate-300 flex flex-col w-full lg:w-96 leading-1.5 p-4 border-gray-200  rounded-e-xl rounded-es-xl dark:bg-gray-900">
<div className="flex items-center space-x-3 rtl:space-x-reverse">
 <span className="text-sm font-semibold text-gray-800 dark:text-white">{item.username}</span>
 <span className="text-sm font-normal text-gray-700 dark:text-gray-400">{item.date.slice(11,16)}</span>
</div>
<p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">{item.message}.</p>
<span className="text-sm font-normal text-gray-600 dark:text-gray-400">Delivered</span>
</div>
</div>
}

    </>
  )
}

export default LeftRight