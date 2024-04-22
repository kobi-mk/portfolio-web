/*import AboutImg from '../assets/about.png';

 export default function About () {
     return <section className='flex flex-col md:flex-row  bg-secondary px-5' id='about'>
         <div className='md:w-1/2 py-5'>
             <img src={AboutImg} />
         </div>
         <div className='md:w-1/2 flex justify-center'>
             <div className='flex flex-col justify-center  text-white'>
                 <h1 className='text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold '>About Me</h1>
                 <p className='pb-5'>Hi, I am Kovarthan Mahendram. Second year BIT student from UCSC with a strong foundation in programming, web development, 
                 and problem-solving.</p>
                 <p className='pb-5'>I am good at React.js, TailwindCSS, Bootstrap, Node.js, Express.js, MongoDB & Mongoose.</p>
                 <p >Seeking internship to apply classroom knowledge, gain hands-on experience, 
                 and contribute to a dynamic team environment. Committed to continuous learning and skill enhancement.</p>
             </div>
         </div>
     </section>
}*/
import AboutImg from '../assets/about.png';

export default function About() {
  return (
    <section className="container mx-auto px-5 " id="about">
      <div className="flex flex-col md:flex-row bg-secondary">
        <div className="md:w-1/2 py-5">
          <img src={AboutImg} alt='abt'/>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="flex flex-col justify-center text-white">
            <h1 className="text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold">
              About Me
            </h1>
            <p className="pb-5">
              Hi, I am Kovarthan Mahendram. Second year BIT student from UCSC
              with a strong foundation in programming, web development, and
              problem-solving.
            </p>
            <p className="pb-5">
              I am good at React.js, TailwindCSS, Bootstrap, Node.js, Express.js,
              MongoDB & Mongoose.
            </p>
            <p>
              Seeking internship to apply classroom knowledge, gain hands-on
              experience, and contribute to a dynamic team environment. Committed
              to continuous learning and skill enhancement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
