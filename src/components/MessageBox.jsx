'use client'

import React, { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'
import { SendHorizontal } from 'lucide-react'
import { Input } from '@/components/ui/input'
import postChat from '@/lib/actions/postChat'
import { revalidatePath } from 'next/cache'

const MessageBox = (props) => {
    const {relation_id} = props;

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

    const sendChat = async ()=>{
        let message = document.getElementById("message").value;
        if(message!=""){
            console.log(message, user)
            const response = await postChat(user, message, relation_id )
            console.log(response)
            if(response.success){
                document.getElementById("message").value="";
            }
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