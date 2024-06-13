'use client'

import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { useRouter } from 'next/navigation'
import { useToast } from './ui/use-toast'
import { Button } from './ui/button'
import getMyRelation from '@/lib/actions/getMyRelations'

import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import Link from 'next/link'

const Relations = () => {

    const {toast} = useToast();
    const router = useRouter()

    useEffect( () => {
        const id = localStorage.getItem("id");
        if(id=="" || id==null){
            toast({
                title: "Oops !",
                description: "Log in.",
            });
            router.push("/auth");
            }
        console.log(id)
        getRelations(id);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    const getRelations = async (id) => {
        const response = await getMyRelation(id);
        setdata(response.payload)
    }

    const [data, setdata] = useState(null);

  return (
    <>
    {
        data && <>
        {
 data.length==0?<p className='text-center text-2xl'>No Relation to show</p>:
 data.map((item)=>{
     return(
        <Link href={"/relation/"+item.id} key={item.id}><Card className="w-full hover:bg-slate-200 mb-4">
        <div className="flex gap-4 p-4">
        <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@profile pic" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
            <h2 className='text-xl font-medium'>{item.relation_name}</h2>
            <span className='text-sm text-gray-500'>something in it</span>
        </div>

        </div>
      </Card>
      </Link>
     )
 })
        }
        </>
        
       
    }
    </>

  )
}

export default Relations