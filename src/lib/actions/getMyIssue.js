"use server"


const getMyIssue = async (id)=>{

    let details = {
        id: id,
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
  
    const query = await fetch(`${process.env.SERVER}/api/get-issue/`, settings)
    const response = await query.json()
  
    return response
  }

  export default getMyIssue;