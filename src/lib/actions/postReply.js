"use server"


const postReply = async (formData, issue_id, id)=>{

    let details = {
        issued_id: issue_id,
        reply_user_id: id,
        message: formData.message
    }

    console.log(details)

  
    const settings = {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(details)
  };
  
    const query = await fetch(`${process.env.SERVER}/api/post-reply/`, settings)
    const response = await query.json()
  
    return response
  }

  export default postReply;