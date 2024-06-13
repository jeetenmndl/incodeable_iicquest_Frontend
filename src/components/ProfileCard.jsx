'use client'

import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import getUserProfile from '@/lib/actions/getUserProfile'
import { useRouter } from 'next/navigation'
import { useToast } from './ui/use-toast'
import { BadgeCheck } from 'lucide-react'

const ProfileCard = () => {

    const {toast} = useToast();
    const router = useRouter()

    useEffect( () => {
        const token = localStorage.getItem("id");
        if(token=="" || token==null){
            toast({
                title: "Oops !",
                description: "Log in to view Profile.",
            });
            console.log(token)
            router.push("/auth");
        }
        else{
            toast({
                title: "Good !",
                description: "Good.",
            });
        }
        getUser(token);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    const getUser = async (token) => {
        const response = await getUserProfile(token);
        console.log("response is", response)
        setuser(response.data)
        console.log(user)
    }

    const [user, setuser] = useState({id: "",
    username: "",
    email: "",
    is_verified: true,
    age: "",
    character: ""});
    
  return (
    
    <section className='md:w-2/4 md:mt-14'>
        <Card className="bg-slate-800 text-white sticky top-12">
            <CardHeader>
                <CardTitle>
                    User Details
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div>
                    <p className='font-semibold text-sm'>Username</p>
                    <p>{user && user.username} 
                        
                        {
                            user && user.is_verified?
                            <BadgeCheck className='text-green-800' />
                            :""
                        }</p>
                </div>
                <div>
                    <p className='font-semibold text-sm'>Age</p>
                    <p>{user.age}</p>
                </div>
                <div>
                    <p className='font-semibold text-sm'>Character</p>
                    <p>{user.character}</p>
                </div>
                <div>
                    <p className='font-semibold text-sm'>Email</p>
                    <p>{user.email}</p>
                </div>
            </CardContent>
        </Card>
    </section>
  )
}

export default ProfileCard