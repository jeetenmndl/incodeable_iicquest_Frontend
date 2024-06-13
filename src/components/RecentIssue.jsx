'use client'

import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { useRouter } from 'next/navigation'
import { useToast } from './ui/use-toast'
import getIssueReplies from '@/lib/actions/getIssueReplies'
import { Button } from './ui/button'
import postRelation from '@/lib/actions/postRelation'

const RecentIssue = () => {

    const {toast} = useToast();
    const router = useRouter();
    const [userID, setuserID] = useState(null)

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
        setuserID(id);
        getReplies(id);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    const getReplies = async (id) => {
        const response = await getIssueReplies(id);
        setdata(response.payload)
    }

    const [data, setdata] = useState(null);

    const createRelation = async (reply_by) =>{
        const response = await postRelation(userID, reply_by);
        if(response.posted){
            toast({
                title: "Congratulations",
                description: "Relation created successfully"
            })
            router.push("/relation")
        }
        else{
            toast({
                title: "Oops",
                description: response.message,
                variant: "destructive"
            })
        }
    }
    
    
  return (
    <article className='grid grid-cols-1 lg:grid-cols-3 gap-6'>


    {
        data && <>
        {
 data.length==0?<p className='text-center text-2xl'>No Replies to show</p>:
 data.map((item)=>{
     return(
         <Card key={item.id}>
            <CardHeader>
                <CardTitle>
                    {item.replied_by.username}
                </CardTitle>
                <CardDescription>
                    {item.created_at.slice(0,10)}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <p className='leading-8'>{item.message}</p>
            </CardContent>
            <CardFooter>
                <Button onClick={()=>{createRelation( item.replied_by.id)}} className="w-full bg-main">Relate</Button>
            </CardFooter>
         </Card>
     )
 })
        }
        </>
        
       
    }

    </article>
  )
}

export default RecentIssue