import MyIssuesPage from '@/components/MyIssuesPage'
import getAllIssues from '@/lib/actions/getAllIssues';
import getMyIssue from '@/lib/actions/getMyIssue'
import React from 'react'

const page = async () =>  {

 const response = await getAllIssues();
 console.log(response.payload.length, "issues")
    

  return (
    <main className='px-2 md:px-6 lg:px-12 xl:px-28 py-8'>
        <h1 className='text-2xl lg:text-4xl font-semibold'>Recent Issue</h1>
        <MyIssuesPage allIssues={response.payload}  />
    </main>
  )
}

export default page