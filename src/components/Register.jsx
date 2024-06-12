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
import postUser from '@/lib/actions/postUser'
import checkOtp from '@/lib/actions/checkOtp'
import Link from 'next/link'
import { Switch } from './ui/switch'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
  


const formSchema = z.object({
    username: z.string().min(3, {
      message : "At least 5 characters.",
    }),
    email: z.string().min(10, {
        message : "Enter correct email.",
    }),
    password: z.string().min(8, {
      message : "Minimum 8 characters.",
    }),
    age: z.string().min(1, {
      message : "Required.",
    }),
    character: z.string().min(1, {
      message : "Required.",
    }),
    
  })

const Register = () => {

    const router = useRouter()
    const {toast}= useToast();
    const [loading, setLoading] = useState(false);
    const [step, setstep] = useState(1);
    

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username:"",
            email:"",
            password:"",
            age:"",
            character:"",
    },
    })

    // 2. submit handler for submit
    async function onSubmit(values) {
        console.log(values);
        try {
            setLoading(true);
            const response = await postUser(values);
            console.log("in register page", response);

            if(response.posted==true){
                toast({
                    title: "Congratulations !",
                    description: "Details uploaded sucessfully.",
                })
        
            localStorage.setItem("id", response.id)
                
                setstep(2)
            }
            else{
                toast({
                    title: "Oops !",
                    description: response.message,
                    variant: "destructive",
                })
            }
        } catch (error) {
            // console.log(error)
            toast({
                title: "Oops !",
                description: "Some error occured.",
                variant: "destructive",
            })
            
        }finally{
            setLoading(false);
        }
    }

    async function otpClick() {
        let otp = document.getElementById("otp").value;
        // console.log(otp);
        try {
            setLoading(true);
            let id = localStorage.getItem("id");
            console.log(id)
            const response = await checkOtp(id,otp);
            console.log("in otp function", response);
            if(response.verified==true){
                toast({
                    title: "Congratulations !",
                    description: "OTP verified successfully.",
                })

                localStorage.setItem("username", response.username)

                
                setTimeout(() => {
                    router.push("/")
                }, 2000);
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
    <section className='flex justify-center'>    
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full md:w-[400px]">

    <Card className={step==2?"hidden":""}>
        <CardHeader>
            <CardTitle>Register to Pariwar</CardTitle>
            <CardDescription>Fill the details to proceed the registration </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
            {/* team name */}
            <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
                <FormItem>
                <FormLabel className="pt-1">Userame</FormLabel>
                <FormControl>
                   <Input className="placeholder:text-gray-400 font-light" placeholder="Enter username" {...field} />
                </FormControl>
                {/* <FormDescription>
                    This is your public display name.
                </FormDescription> */}
                <FormMessage />
                </FormItem>
            )}
            />
            

            <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
                <FormItem>
                    <FormLabel>Email</FormLabel>
                <FormControl>
                   <Input className="placeholder:text-gray-400 font-light" placeholder="abx@gmail.com" {...field} />
                </FormControl>
                {/* <FormDescription>
                    This is your public display name.
                </FormDescription> */}
                <FormMessage />
                </FormItem>
            )}
            />

            {/* age */}
            <FormField
            control={form.control}
            name="age"
            render={({ field }) => (
                <FormItem>
                <FormLabel className="pt-1">Age</FormLabel>
                <FormControl>
                   <Input className="placeholder:text-gray-400 font-light" placeholder="1" {...field} />
                </FormControl>
                {/* <FormDescription>
                    This is your public display name.
                </FormDescription> */}
                <FormMessage />
                </FormItem>
            )}
            /> 

            <FormField
            control={form.control}
            name="character"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Character</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose One" className="placeholder:text-gray-400 font-light" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="father">Father</SelectItem>
                  <SelectItem value="mother">Mother</SelectItem>
                  <SelectItem value="son">Son</SelectItem>
                  <SelectItem value="daughter">Daughter</SelectItem>
                  <SelectItem value="grandfather">Grandfather</SelectItem>
                  <SelectItem value="grandmother">Grandmother</SelectItem>
                  <SelectItem value="uncle">Uncle</SelectItem>
                </SelectContent>
              </Select>
                {/* <FormDescription>
                    This is your public display name.
                </FormDescription> */}
                <FormMessage />
                </FormItem>
            )}
            />

            <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
                <FormItem>
                    <FormLabel>Password</FormLabel>
                <FormControl>
                   <Input type="password" className="placeholder:text-gray-400 font-light" placeholder="********" {...field} />
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

    <Card className={step==2?"":"hidden"}>
    <CardHeader>
            <CardTitle>Confirmation</CardTitle>
            <CardDescription>Enter the confirmation code sent to your email</CardDescription>
        </CardHeader>
        <CardContent>
        
                   <Input id="otp" className="placeholder:text-gray-400 font-light" placeholder="XXXXXX"/>
               
            
        </CardContent>
        <CardFooter>
            { 
                !loading
                ?
                <div className='w-full space-y-3'>
                <Button type="button" className="w-full bg-main" onClick={otpClick}>Confirm</Button>
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

export default Register;