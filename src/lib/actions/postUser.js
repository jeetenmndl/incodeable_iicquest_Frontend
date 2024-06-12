"use server"


const postUser = async (formData)=>{

    let details = {
        username: formData.username,
        email: formData.email,
        password: formData.password,
        age: parseInt(formData.age),
        character: formData.character,
    }
    // console.log(details)

  
    const settings = {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(details)
  };
  
    const query = await fetch(`${process.env.SERVER}/api/register/`, settings)
    const response = await query.json()
  
    return response
  }

  export default postUser;