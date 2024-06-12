"use server"


const checkOtp = async (id, otp)=>{

    let details = {
        id: id,
        email_token: otp,
    }

  
    const settings = {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(details)
  };
  
    const query = await fetch(`${process.env.SERVER}/api/email-verify/`, settings)
    const response = await query.json()
  
    return response
  }

  export default checkOtp;