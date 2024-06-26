import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import Document from '../../Document/darshil-patel.pdf';
import Profile from '../../Images/profile.jpeg';
import { Link } from 'react-router-dom';

function Home() {
  return (
  <>
   <div className='flex flex-col items-center h-[100vh] md:h-[95vh] lg:h-[80vh] xl:h-[100vh] justify-center'>
    <div className='flex flex-col items-center  justify-center bg-[--bg-color] py-10 px-10 rounded-2xl' data-aos='fade'>
      <img className='w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[250px] md:h-[250px] lg:w-[280px] lg:h-[280px] 2xl:w-[300px] 2xl:h-[300px] rounded-3xl bg-slate-400 border-4 border-[--main-color] object-cover object-top shadow-white'src={Profile} />
      <h3 className='text-[--main-color] pt-5 pb-3 font-bold text-2xl'>Darshil Patel</h3>
      <p className='text-[--main-color]'>Full-Stack Blockchain Developer</p>
      <div className="flex space-x-3 pt-4">
  <Link to="https://www.instagram.com/darshil.infolanze/" target="_blank" rel="noopener noreferrer">
    <div className="w-10 h-10 bg-black shadow-sm p-2 rounded-xl hover:bg-white transition-all duration-300 ease-in-out cursor-pointer">
      <FaInstagram className="text-pink-400 text-2xl" />
    </div>
  </Link>
  <Link to="https://github.com/darshil7056" target="_blank" rel="noopener noreferrer">
    <div className="w-10 h-10 bg-black p-2 rounded-xl transition-all duration-300 ease-in-out cursor-pointer">
      <FaGithub className="text-white text-2xl" />
    </div>
  </Link>
  <Link to="https://www.linkedin.com/in/darshilpatel7056/" target="_blank" rel="noopener noreferrer">
    <div className="w-10 h-10 bg-black p-2 rounded-xl hover:bg-white transition-all duration-300 ease-in-out cursor-pointer">
      <CiLinkedin className="text-blue-500 text-2xl" />
    </div>
  </Link>
</div>
      <div className='pt-5'>
      <button className='bg-[--main-color] text-white px-8 py-2 rounded-full hover:text-[--main-color] hover:bg-white hover:border-2 hover:border-black  transition-all duration-500 ease-in-out' onClick={() => window.open(Document)} download={'kush-mevada.pdf'}>Download CV</button>
              </div>
      </div>
      </div>
    </>
  )
}
export default Home;
