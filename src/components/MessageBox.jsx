'use client'

import React, { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'
import { SendHorizontal } from 'lucide-react'
import { Input } from '@/components/ui/input'

const MessageBox = () => {

    useEffect( () => {
        const token = localStorage.getItem("id");
        if(token=="" || token==null){
            toast({
                title: "Oops !",
                description: "Log in to chat.",
            });
            console.log(token)
            router.push("/auth");
        }
        setuser(token);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    


    const [user, setuser] = useState(null)

    const sendChat = ()=>{
        let message = document.getElementById("message").value;
        if(message!=""){
            console.log(message, user)
        }
    }

  return (
    <div className="fixed lg:absolute bottom-0 w-full flex px-2 lg:px-8 py-2 shadow-lg gap-4">
          <Input autoFocus id="message" className="ring-1" />
          <Button onClick={sendChat} className="bg-main "><SendHorizontal className='text-white' /></Button>
        </div>
  )
}

export default MessageBox