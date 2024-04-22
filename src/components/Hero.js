/*import HeroImg from '../assets/hero.png'
import { AiOutlineGithub, AiOutlineYoutube, AiOutlineLinkedin, AiOutlineMedium } from "react-icons/ai";

export default function Hero(){
    return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center' id='hero'>
        <div className='md:w-1/2'>
            <h1 className=' text-white text-6xl md:text-5xl font-hero-font'>Hi,<br />
            I am <span className='text-black '>Kovarthan Mahendram</span> 
            <p className='text-2xl'>I am a Full-stack developer</p> 
            </h1>
            <div className='flex py-10 '>
                <a className='hover:text-white pr-5' href="#"><AiOutlineLinkedin size={40} /></a>
                <a className='pr-5 hover:text-white' href="#"><AiOutlineGithub size={40} /></a>
                {/* <a className='pr-5 hover:text-white' href="#"><AiOutlineMedium size={40} /></a> *//*}
                <a className='hover:text-white' href="#"><AiOutlineYoutube size={40} /></a>
            </div>
        </div>
            <img className='md:w-1/3' src={HeroImg} />
        
    </section>
}*/

import HeroImg from '../assets/hero.png';
import { AiOutlineGithub, AiOutlineYoutube, AiOutlineLinkedin, AiOutlineMedium } from "react-icons/ai";

export default function Hero() {
  return (
    <section className="container mx-auto px-5 py-32 flex flex-col md:flex-row justify-center bg-primary" id="hero">
      <div className="md:w-1/2">
        <h1 className="text-white text-6xl md:text-5xl font-hero-font">
          Hi,<br />
          I am <span className="text-black">Kovarthan Mahendram</span>
          <p className="text-2xl">I am a Full-stack developer</p>
        </h1>
        <div className="flex py-10 space-x-4">
          <a className="hover:text-white" href="#"><AiOutlineLinkedin size={40} /></a>
          <a className="hover:text-white" href="#"><AiOutlineGithub size={40} /></a>
          {/* Optional: Uncomment if you want to include Medium link */}
          {/* <a className="pr-5 hover:text-white" href="#"><AiOutlineMedium size={40} /></a> */}
          <a className="hover:text-white" href="#"><AiOutlineYoutube size={40} /></a>
        </div>
      </div>
      <img className="md:w-1/3 object-cover" src={HeroImg} alt="Hero Image" />
    </section>
  );
}
