"use server"


const getChat = async (id)=>{

    let details = {
        relation_id: id,
    }
    // console.log(details)

  
    const settings = {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-store',
      },
      body: JSON.stringify(details)
  };


  
    const query = await fetch(`${process.env.SERVER}/api/get-chat/`, settings,{cache: "no-store"})
    const response = await query.json()

   return response;
    
  }

  export default getChat;