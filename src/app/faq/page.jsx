
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

  export const metadata = {
    title: "FAQ's",
    description: "See the frequently asked questions on Hamrodera and brief answers to them.",
  };
  

const page = () => {
  return (
    <main className='px-4 md:px-20 py-4 md:py-8'>
    <h1 className='text-3xl lg:text-5xl font-bold mb-4 md:mt-4 md:mb-12 text-center'>FAQ</h1>

    <hr />
    <article className='grid grid-cols-1 md:grid-cols-2 gap-x-12 py-2 md:py-12'>

        <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
            <AccordionTrigger className="mb-2 text-left">How do I signup?</AccordionTrigger>
            <AccordionContent>
            <p>Signing up at pariwar is easier. . You can follow these simple steps in order to complete the procedure.</p>
                <ul className='disc space-y-4 mt-4 md:mt-8'>
                    <li><span className='font-semibold'>Step 1: </span>Go to upper right corner and click log in button.</li>
                    <li><span className='font-semibold'>Step 2: </span>Enter username, email, age, character, and set you password and hit submit button.</li>
                    <li><span className='font-semibold'>Step 3: </span>Enter the otp that you received in your email </li>
                    <li><span className='font-semibold'>Step 4: </span>Confirm the otp and you will be redirected to home page.</li>
                </ul>
            </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
            <AccordionTrigger className="mb-2 text-left">How do I say my issues and view my issues?</AccordionTrigger>
            <AccordionContent>
            <p> You can follow these simple steps in order to complete the procedure.</p>
                <ul className='disc space-y-4 mt-4 md:mt-8'>
                    <li><span className='font-semibold'>Step 1: </span>Enter the issues title, description and preferred character to get the response or suggestion form. Hit submit after entering the values.</li>
                    <li><span className='font-semibold'>Step 2: </span>You will receive a confirmation notification and your issues will be posted.</li>
                    <li><span className='font-semibold'>Step 3: </span>To view your issues go to my issues button on the navbar.</li>
                </ul>
            </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
            <AccordionTrigger className="mb-2 text-left">What are the content on my feed?</AccordionTrigger>
            <AccordionContent>
           <p>The matching character of yours that will help the person who are seeking for the suggestion.</p>
            </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
            <AccordionTrigger className="mb-2 text-left">How to integrate with us?</AccordionTrigger>
            <AccordionContent>
            <p>You can highlight your NGOs programs and events at our platform to meet with the students you want and convey your message. Also promote your organizations workforce by integrating with us.</p>
                <ul className='list-disc pl-4 space-y-4 mt-4 md:mt-8'>
                    <li>Promote your events and programs</li>
                    <li>Integrate within our website.</li>
                    <li>Easier to solve the problems for needed. </li>
                    <li className='font-medium'>Contact: 98XXXXXXXX</li>
                </ul>
            </AccordionContent>
        </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
            <AccordionTrigger className="mb-2 text-left">Are there any fees associated with using your website?</AccordionTrigger>
            <AccordionContent>
            <p className='leading-8'>At our platform, we prioritize transparency and fairness. That is why we are proud to say that we do not charge any commission fees. Whether you are listing a room or booking a stay, you can rest assured that you will not encounter any hidden costs or surprise charges. We believe in providing a straightforward and hassle-free experience for our users, allowing you to focus on finding the perfect room or welcoming guests into your space without worrying about additional expenses. Join our community today and enjoy the benefits of commission-free transactions every step of the way..</p>
            </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
            <AccordionTrigger className="mb-2 text-left">How do I talk with suggested people / build relation?</AccordionTrigger>
            <AccordionContent>
            <p className='leading-8'>Click the suggested link and see all the messages that you got form the characters that you are seeking</p>
            <p>
                Click to the relate button to create a relation between the character and yourself to share your issues.
            </p>
            </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
            <AccordionTrigger className="mb-2 text-left">How to send message to the suggestion that you got from characcter?
        </AccordionTrigger>
            <AccordionContent>
            <p className='leading-8'>Go to the relations tab from the navbar and select the particular character that you have made the relation with.</p>
            </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
            <AccordionTrigger className="mb-2 text-left">Is my data safe?
        </AccordionTrigger>
            <AccordionContent>
            <p className='leading-8'>Yes your data is absolutely safe. We use a portion of your data to give personalized feeds.</p>
            </AccordionContent>
        </AccordionItem>
        </Accordion>
        </article>
    </main>
  )
}

export default page