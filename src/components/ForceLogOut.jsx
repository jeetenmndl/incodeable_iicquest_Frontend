'use client'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const ForceLogOut = () => {
    const router = useRouter();

    useEffect(() => {
        localStorage.removeItem("username");
        localStorage.removeItem("id");
        router.push("/");
        router.refresh()
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
  return (
    <div>logging out</div>
  )
}

export default ForceLogOut