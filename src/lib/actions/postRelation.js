"use server"


const postRelation = async ( userID, reply_id)=>{

    let details = {
        issued_by: userID,
        suggested_by: reply_id
    }

    console.log(details)

  
    const settings = {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(details)
  };
  
    const query = await fetch(`${process.env.SERVER}/api/relation-update/`, settings)
    const response = await query.json()
  
    return response
  }

  export default postRelation;