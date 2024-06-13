"use client"

import React, { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import { Input } from './ui/input'
import { useToast } from './ui/use-toast'
import { Loader2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Textarea } from './ui/textarea'
import postReply from '@/lib/actions/postReply'
  


const formSchema = z.object({
    message: z.string().min(10, {
      message : "At least 10 characters.",
    }).max(250, {message: "Limit exceed, 250 characters only"})
    
  })

const ReplyForm = (props) => {
    const {issue_id} = props;

    const router = useRouter()
    const {toast}= useToast();
    const [loading, setLoading] = useState(false);

    
    
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            message:"",
            },
            })
            
    // 2. submit handler for submit
    async function onSubmit(values) {
        let user_id = localStorage.getItem("id");
        console.log(user_id);
        console.log(values);
        try {
            setLoading(true);
            const response = await postReply(values, issue_id, user_id );
            console.log("in reply form page", response);
            if(response.posted==true){
                toast({
                    title: "Congratulations !",
                    description: "Replied sucessfully.",
                })
                

                router.push("/")
            }
            else{
                toast({
                    title: "Oops !",
                    description: "Some error occured",
                    variant: "destructive",
                })
            }
        } catch (error) {
            console.log(error)
            toast({
                title: "Oops !",
                description: "Some error occured.",
                variant: "destructive",
            })
            
        }finally{
            setLoading(false);
        }
    }



  return (
    <section className='flex justify-center'>    
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full md:w-[400px]">

    <Card>
        <CardHeader>
            <CardTitle>Type Message</CardTitle>
            {/* <CardDescription>Fill the details to Login </CardDescription> */}
        </CardHeader>
        <CardContent className="space-y-2">
            {/* message */}
            <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
                <FormItem>
                <FormLabel className="pt-1">Message</FormLabel>
                <FormControl>
                   <Textarea rows={8} autoFocus className="placeholder:text-gray-400 font-light" placeholder="Enter message" {...field} />
                </FormControl>
                {/* <FormDescription>
                    This is your public display name.
                </FormDescription> */}
                <FormMessage />
                </FormItem>
            )}
            />


         

        </CardContent>
        <CardFooter className="flex flex-col">
            { 
                !loading
                ?
                <div className='w-full space-y-3'>
                <Button type="submit" className="w-full bg-main">Submit</Button>
                </div>
                :
                <Button className="w-full bg-main" disabled>
                    <Loader2 className=" h-4 w-4 animate-spin" />
                </Button>
            }
            
        </CardFooter>
    </Card>


    </form>
    </Form>
    </section>

  )
}

export default ReplyForm
