export const metadata = {
    title: "Guide",
    description: "See the process and steps that you should follow to do your tasks like register, finding rooms, searching rooms, and posting rooms so that you do not face any problems.",
  };
  

const page = () => {
  return (
    <main className='px-4 md:px-20 py-4 md:py-8'>
        <h1 className='text-3xl lg:text-5xl font-bold mb-4 md:mt-4 md:mb-12 text-center'>Guide</h1>

        <hr />

        <section className='py-8 lg:py-12 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12'>
            <div>
                <h2 className='text-2xl font-semibold sticky top-8'>Steps for posting issue</h2>
            </div>
            <article>
                <p>Posting your issue is easy in Pariwar. You can follow these simple steps in order to complete the procedure.</p>
                <ul className='disc space-y-4 mt-4 md:mt-8'>
                    <li><span className='font-semibold'>Step 1: </span>Log in or register at first.</li>
                    <li><span className='font-semibold'>Step 2: </span>Type the message at first.</li>
                    <li><span className='font-semibold'>Step 3: </span>After setting the title and the type of character needed for help you can press the submit button. </li>
                    <li><span className='font-semibold'>Step 4: </span>People will reply to your issue and you can select the liked family member.</li>
                </ul>
            </article>
        </section>

        <hr />

        <section className='py-8 lg:py-12 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12'>
            <div>
                <h2 className='text-2xl font-semibold sticky top-8'>Steps for replying to issue</h2>
            </div>
            <article>
                <p>Replying to issue is easy in pariwar. You can follow these simple steps in order to complete the procedure.</p>
                <ul className='disc space-y-4 mt-4 md:mt-8'>
                    <li><span className='font-semibold'>Step 1: </span>Choose the issue you want to reply.</li>
                    <li><span className='font-semibold'>Step 2: </span>Enter the message that you want to send to the preson.</li>
                    <li><span className='font-semibold'>Step 3: </span>Press the enter button and the reply will be sent. </li>
                </ul>
            </article>
        </section>
        
        <hr />

        <section className='py-8 lg:py-12 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12'>
            <div>
                <h2 className='text-2xl font-semibold sticky top-8'>Steps for relation chat</h2>
            </div>
            <article>
                <p>Chattig with your web family is interesting. You can follow these simple steps in order to complete the procedure.</p>
                <ul className='disc space-y-4 mt-4 md:mt-8'>
                    <li><span className='font-semibold'>Step 1: </span>As soon as user chooses the reply that you sent a relation will be created.</li>
                    <li><span className='font-semibold'>Step 2: </span>the relation will be displayed at the relation section and you can select the required section.</li>
                    <li><span className='font-semibold'>Step 3: </span>Type the message and send it. </li>
                </ul>
            </article>
        </section>


    </main>
  )
}

export default page