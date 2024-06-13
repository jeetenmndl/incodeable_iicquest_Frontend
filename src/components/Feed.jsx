'use client'

import getMyIssue from '@/lib/actions/getMyIssue'
import React, { useEffect, useState } from 'react'
import { Card, CardHeader, CardDescription, CardContent, CardTitle, CardFooter} from "./ui/card"
import { Button } from './ui/button'
import getCharacterIssues from '@/lib/actions/getCharacterIssues'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { toast } from './ui/use-toast'

const Feed =   () => {

    const [mustLog, setMustLog] = useState(false);
    const [userID, setuserID] = useState(null)
    const [issues, setissues] = useState(null)
    const router = useRouter();
    
    
    useEffect(() => {
        isLogged();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])
  
      const isLogged = async ()=>{
        let check = localStorage.getItem("id")
        setuserID(check)
        if(check == null || check == ""){
          setMustLog(true);
          toast({
            title: "Alert !",
            description: "You must log .",
        })
        //   router.push("/auth");
        }

        const response = await getCharacterIssues(check);
        setissues(response.payload);

        
  
      }

    //   console.log(userID)

  return (
    <>
    <article className={mustLog?"hidden":"space-y-8 mt-8"}>
        {
           userID && issues && issues.map((issue)=>{
                return(
                    <Card key={issue.id} className="bg-blue-100">
                        <CardHeader>
                            <CardTitle>{issue.title}</CardTitle>
                            <CardDescription>Preferred Character: <span className='font-medium'>{issue.preferred_char}</span></CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className='leading-8'>{issue.description}</p>
                        </CardContent>
                        <CardFooter className=" flex justify-end items-center">
                            <Link href={"/reply/"+issue.id}><Button className="bg-main w-40 h-10">Reply</Button>
                            </Link>
                        </CardFooter>
                    </Card>

                )

            })
        }
        {
            userID && issues && <>
            {issues.length==0?<p className='text-2xl text-center'>No feed to show</p>:""}
            </>
        }
    </article>

    <section className={mustLog?'flex w-full justify-center px-4 md:px-32 py-32':'hidden'}>
        <Card>
            <CardHeader>
            <CardTitle>You must log in.</CardTitle>
            </CardHeader>
            <CardContent>
            <CardDescription>Log in or register to see your recent issures. So that you can keep track of the replies and create relation.</CardDescription>
            </CardContent>
            <CardFooter>
                <Link href="/auth">
                <Button className="w-32">
                    Log in
                </Button>
                </Link>
            </CardFooter>
        </Card>
    </section>
    </>
  )
}

export default Feed