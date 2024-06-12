import getSpecificIssue from '@/lib/actions/getSpecificIssue';
import React from 'react'
import { Card, CardHeader, CardDescription, CardContent, CardTitle, CardFooter} from "@/components/ui/card"
import { Label } from '@/components/ui/label';
import ReplyForm from '@/components/ReplyForm';

const page = async ({params}) => {

    let id = params.id;
    console.log("id is", id)
    const result = await getSpecificIssue(id);
    const issue = result.payload;

  return (
    <main className=' px-2 md:px-6 lg:px-12 xl:px-28 py-4 md:py-8'>
        <h1 className='font-semibold text-2xl lg:text-4xl'>Replying to Issue</h1>
        <article className=' grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8'>

        <section className='mt-8'>
        <Card >
            <CardHeader>
                <CardTitle>{issue.title}</CardTitle>
                <CardDescription>Preferred Character: <span className='font-medium'>{issue.preferred_char}</span></CardDescription>
            </CardHeader>
            <CardContent>
                <p className='leading-8'>{issue.description}</p>
            </CardContent>
            
        </Card>
        </section>

        <section className='mt-8'>
            <ReplyForm issue_id={id}/>

        </section>

        </article>
    </main>
  )
}

export default page