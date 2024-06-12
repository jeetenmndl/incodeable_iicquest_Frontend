"use server"


const getAllIssues = async ()=>{


  
    const settings = {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
  };
  
    const query = await fetch(`${process.env.SERVER}/api/get-all-issue/`, settings)
    const response = await query.json()
  
    return response
  }

  export default getAllIssues;