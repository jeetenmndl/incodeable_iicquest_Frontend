

export const metadata = {
    title: "Contact",
    description: "Contact to hamrodera for any advertisements, partnerships or affilitiation. Contact the number given in this page.",
  };
  

const page = () => {
  return (
    <main className='px-4 md:px-20 py-4 md:py-8'>
        <h1 className='text-3xl lg:text-5xl font-bold mb-4 md:mt-4 md:mb-12 text-center'>Contact</h1>

        <hr />

        

        <section className='py-8 lg:py-12 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12'>
            <div>
                <h2 className='text-2xl font-semibold sticky top-8'>Integrations for NGOs</h2>
            </div>
            <article>
                <p>You can highlight your NGOs programs and events at our platform to meet with the students you want and convey your message. Also promote your organizations workforce by integrating with us.</p>
                <ul className='list-disc pl-4 space-y-4 mt-4 md:mt-8'>
                    <li>Promote your events and programs</li>
                    <li>Integrate within our website.</li>
                    <li>Easier to solve the problems for needed. </li>
                    <li className='font-medium'>Contact: 98XXXXXXXX</li>
                </ul>
            </article>
        </section>


    </main>
  )
}

export default page