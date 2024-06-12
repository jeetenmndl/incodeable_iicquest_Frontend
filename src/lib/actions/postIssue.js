"use server"


const postIssue = async (formData, id)=>{

    let details = {
        title: formData.title,
        description: formData.description,
        preferred_char: formData.preferred_char,
        id: id
    }

    console.log(details)

  
    const settings = {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(details)
  };
  
    const query = await fetch(`${process.env.SERVER}/api/post-issue/`, settings)
    const response = await query.json()
  
    return response
  }

  export default postIssue;