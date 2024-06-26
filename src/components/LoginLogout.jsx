'use client'

import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'



const LoginLogout = () => {

    // const logged = useRef(false);
    const [logged, setlogged] = useState("")
    
    useEffect(() => {
        let check = localStorage.getItem("id")
        setlogged(check)
        console.log(logged);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    

        return(
            logged == null || logged == ""?
            <Link href="/auth" className="font-bold cursor-pointer hover:underline">LOG IN</Link>
            :
            <Link href="/force-logout" className="font-bold cursor-pointer hover:underline">LOG OUT</Link>
        )
}

export default LoginLogout