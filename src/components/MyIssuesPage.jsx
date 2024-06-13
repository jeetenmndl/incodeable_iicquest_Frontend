'use client'

import getMyIssue from '@/lib/actions/getMyIssue'
import React, { useEffect, useState } from 'react'
import { Card, CardHeader, CardDescription, CardContent, CardTitle, CardFooter} from "./ui/card"
import { Button } from './ui/button'
import { Link } from 'lucide-react'
import { toast } from './ui/use-toast'
import { useRouter } from 'next/navigation'

const MyIssuesPage =   (props) => {

    const {allIssues} = props;

    const [mustLog, setMustLog] = useState(false);
    const [userID, setuserID] = useState(null)
    const router = useRouter()
    
    
    useEffect(() => {
        isLogged();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])
  
      const isLogged = ()=>{
        let check = localStorage.getItem("id")
        setuserID(check)
        if(check == null || check == ""){
          setMustLog(true);
          toast({
            title: "Alert !",
            description: "You must log .",
        })
          router.push("/auth");
        }
  
      }

      console.log(userID)

  return (
    <>
    <article className={mustLog?"hidden":"grid grid-cols-2 gap-8 mt-8"}>
        {
           userID && allIssues.map((issue)=>{
                return(
                    <Card key={issue.id} className={issue.issued_by==userID?"":"hidden"}>
                        <CardHeader>
                            <CardTitle>{issue.title}</CardTitle>
                            <CardDescription>Preferred Character: <span className='font-medium'>{issue.preferred_char}</span></CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>{issue.description}</p>
                        </CardContent>
                    </Card>

                )

            })
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

export default MyIssuesPage