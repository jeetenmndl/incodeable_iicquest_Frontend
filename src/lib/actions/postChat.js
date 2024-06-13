"use server"

import { revalidatePath } from "next/cache";


const postChat = async (sender_id, message, relation_id)=>{

    let details = {
        sender_id: sender_id,
        message: message,
        relation_id: relation_id,
    }

    console.log(details)

  
    const settings = {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(details)
  };
  
    const query = await fetch(`${process.env.SERVER}/api/post-chat/`, settings)
    const response = await query.json()

    revalidatePath(`/relation/${relation_id}`)
  
    return response
  }

  export default postChat;