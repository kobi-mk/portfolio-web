/*import ResImg from '../assets/resume.jpg'

export default function Resume(){
    return <section className='flex flex-col md:flex-row  bg-secondary px-5' id='resume'>
        <div className='md:w-1/2 py-5 flex justify-center md:justify-end'>
            <img className='w-[350px]' src={ResImg}  />
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center  text-white'>
                <h1 className='text-4xl border-b-4 border-primary mb-5 w-[130px] font-bold '>Resume</h1>
                <p className='pb-5 '>You can view my resume <a className='btn px-2' href='#'>Download</a> </p>
            </div>
        </div>
    </section>
}*/

import ResImg from '../assets/resume.jpg';

export default function Resume() {
  return (
    <section className="container mx-auto px-5 py-20 flex flex-col md:flex-row bg-secondary text-white" id="resume">
      <div className="md:w-1/2 flex justify-center md:justify-end">
        <img className="w-[350px] rounded-lg object-cover" src={ResImg} alt="Resume" />
      </div>
      <div className="md:w-1/2 flex flex-col justify-center items-center">
        <h1 className="text-4xl border-b-4 border-primary mb-5 w-[130px] font-bold">Resume</h1>
        <p className="pb-5 text-center">You can view my resume. <a className="btn btn-primary px-2" href="/">Download</a></p>
      </div>
    </section>
  );
}
