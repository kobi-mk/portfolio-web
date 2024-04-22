/*import webImg1 from '../assets/ecommerce-websites.jpg'
import webImg2 from '../assets/food-ecommerce.jpg'
import webImg3 from '../assets/website-blog.jpg'

export default function Projects(){
    return <section className="flex flex-col p-5 py-20 justify-center bg-primary text-white" id='projects'>
        <div className="w-full ">
            <div className="flex flex-col px-12 py-5">
            <h1 className='text-4xl border-b-4 border-secondary mb-5 w-[135px] font-bold '>Projects</h1>
            <p className=''>These are some of my best projects. I have built these using MERN Stack, Angular, TailwindCSS, Bootstrap, PHP, MySQL. Check these out. </p>
            </div>
        </div>
        <div className="w-full">
            <div className='flex flex-col md:flex-row px-12 gap-8'>
                <div className='relative'>
                    <img className='h-[250px] w-[500px]' src={webImg1} />
                    <div className='proj-detail'>
                        <p className='text-center p-5'>A Ecom web kadljc djakcd  nalksjcd kajck dsd sdsad sd sadsad sd</p>
                    </div>
                </div>
                <div className='relative'>
                    <img className='h-[250px] w-[500px]' src={webImg2} />
                    <div className='proj-detail'>
                        <p className='text-center p-5'>A Ecom web kadljcdj akcdna lk sjcdk kadljc djakcd nalksjcd kajck dsd sdsad sd sadsad sd ajck</p>
                    </div>
                </div>
                <div className='relative'>
                    <img className='h-[250px] w-[500px]' src={webImg3} />
                    <div className='proj-detail'>
                        <p className='text-center p-5'>A Ecom web kadljcdjakcdnalksjcdkajck</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
}*/

import webImg1 from '../assets/ecommerce-websites.jpg';
import webImg2 from '../assets/food-ecommerce.jpg';
import webImg3 from '../assets/website-blog.jpg';

export default function Projects() {
  return (
    <section className="container mx-auto px-5y py-20 flex flex-col justify-center bg-primary text-white" id="projects">
      <div className="w-full ">
        <div className="flex flex-col px-12 py-5 ">
          <div className='flex flex-col items-center'>
          <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[135px] font-bold">Projects</h1>
          </div>
          <p className="flex flex-col items-center text-lg">
            These are some of my best projects. I have built these using MERN Stack, Angular, TailwindCSS, Bootstrap, PHP, MySQL. Check these out.
          </p>
        </div>
      </div>

      <div className="w-full ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-12 ">
          <div className="relative">
            <img className="h-[250px] w-full object-cover" src={webImg1} alt="Project 1" />
            <div className="proj-detail absolute bottom-0 p-5 bg-gray-900 opacity-75 text-white">
              <p className="text-center">A Ecom web kadljc djakcd nalksjcd kajck dsd sdsad sd sadsad sd</p>
            </div>
          </div>
          <div className="relative">
            <img className="h-[250px] w-full object-cover" src={webImg2} alt="Project 2" />
            <div className="proj-detail absolute bottom-0 p-5 bg-gray-900 opacity-75 text-white">
              <p className="text-center">A Ecom web kadljcdj akcdna lk sjcdk kadljc djakcd nalksjcd kajck dsd sdsad sd sadsad sd ajck</p>
            </div>
          </div>
          <div className="relative">
            <img className="h-[250px] w-full object-cover" src={webImg3} alt="Project 3" />
            <div className="proj-detail absolute bottom-0 p-5 bg-gray-900 opacity-75 text-white">
              <p className="text-center">A Ecom web kadljcdjakcdnalksjcdkajck</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
