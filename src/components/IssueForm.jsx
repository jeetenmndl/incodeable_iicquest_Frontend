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
import Image from 'next/image'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Textarea } from './ui/textarea'
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
  } from "@/components/ui/input-otp"
import postIssue from '@/lib/actions/postIssue'
import { revalidatePath } from 'next/cache'
  


const formSchema = z.object({
    title: z.string().min(3, {
      message : "Enter proper title.",
    }),
    description: z.string().min(3, {
        message : "Enter proper description.",
    }),
    preferred_char: z.string().min(3, {
        message : "Enter proper email.",
    }),
    
  })

const IssueForm = () => {

    const router = useRouter()
    const {toast}= useToast();
    const [loading, setLoading] = useState(false);
    const [userID, setUserID] = useState(null);


    

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title:"",
            description:"",
            preferred_char:"",
    },
    })


    // 2. Define a submit handler.
    async function onSubmit(values) {
        console.log("values are:", values);
        try {
            setLoading(true);
            let id = localStorage.getItem("id");
            const response = await postIssue(values, id);

            console.log("in issue page", response);
            if(response.posted==true){
                toast({
                    title: "Congratulations !",
                    description: "Issue uploaded sucessfully.",
                })

                revalidatePath("/my-issues")
            }
            else{
                toast({
                    title: "Oops !",
                    description: response.message,
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
    
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="sticky top-8 pb-8">
    <Card>
        <CardHeader>
            <CardTitle>Share your Issue</CardTitle>
            <CardDescription>Fill the details to proceed </CardDescription>
        </CardHeader>
        <CardContent>
        <div className="space-y-2">
            {/* title */}
            <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
                <FormItem>
                <FormLabel className="pt-1">Title</FormLabel>
                <FormControl>
                   <Input className="placeholder:text-gray-400 font-light" placeholder="Enter Title" {...field} />
                </FormControl>
                {/* <FormDescription>
                    This is your public display name.
                </FormDescription> */}
                <FormMessage />
                </FormItem>
            )}
            />


            {/* description  */}
            <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
                <FormItem>
                    <FormLabel className="pt-1">Description</FormLabel>
                <FormControl>
                <Textarea
                  placeholder="Tell us more"
                  className="resize-none placeholder:text-gray-400 font-light"
                  {...field}
                />
                </FormControl>
                {/* <FormDescription>
                    This is your public display name.
                </FormDescription> */}
                <FormMessage />
                </FormItem>
            )}
            />
            

             {/* preferred_char */}
             <FormField
            control={form.control}
            name="preferred_char"
            render={({ field }) => (
                <FormItem>
                    <FormLabel>Preferred Character</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger  className="w-full" >
                    <SelectValue placeholder="Type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                <SelectGroup>
                <SelectItem value="father">Father</SelectItem>
                  <SelectItem value="mother">Mother</SelectItem>
                  <SelectItem value="son">Son</SelectItem>
                  <SelectItem value="daughter">Daughter</SelectItem>
                  <SelectItem value="grandfather">Grandfather</SelectItem>
                  <SelectItem value="grandmother">Grandmother</SelectItem>
                  <SelectItem value="uncle">Uncle</SelectItem>
                </SelectGroup>
                </SelectContent>
              </Select>
                <FormMessage />
                </FormItem>
            )}
            />


           
        </div>

             

        </CardContent>
        <CardFooter>
            {
              
                !loading
                ?
                <div className='w-full  space-y-3'>
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
  )
}

export default IssueForm