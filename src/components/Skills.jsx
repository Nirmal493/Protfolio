import React from 'react';
import HTML from '../assets/html.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import FireBase from '../assets/firebase.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';
import Node from '../assets/node.png';
import Express from '../assets/express.png';
import Unix from '../assets/unix.png';
import CPP from '../assets/c++.png';
import Python from '../assets/python.png'

const Skills = () => {
  return (
    <div name='skills' className='relative w-full min-h-screen text-gray-300 overflow-hidden'>

    <div className="relative min-h-screen w-full bg-black"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div><div class="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>

    {/* Background Floating Blobs
    <div className="absolute top-[10%] left-[10%] w-[40vw] h-[40vw] bg-purple-700 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float-slow"></div>
    <div className="absolute top-[10%] right-[10%] w-[35vw] h-[35vw] bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float-fast"></div>
    <div className="absolute bottom-[10%] left-[5%] w-[30vw] h-[30vw] bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-float-slow"></div>
    <div className="absolute top-[20%] right-[15%] w-[25vw] h-[25vw] bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-float-fast"></div>
    <div className="absolute bottom-[5%] left-[20%] w-[20vw] h-[20vw] bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-float-slow"></div> */}

    {/* Content Container */}
    <div className='relative max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full z-10'>
      <div>
        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
        <p className='py-4'>The technologies I've worked with are:</p>
      </div>

      {/* Skills Grid */}
      <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <img className='w-10 mx-auto' src={HTML} alt="HTML icon" />
          <p className='my-4'>HTML</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <img className='w-10 mx-auto' src={JavaScript} alt="JavaScript icon" />
          <p className='my-4'>JAVASCRIPT</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <img className='w-10 mx-auto' src={CPP} alt="CPP icon" />
          <p className='my-4'>C++</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <img className='w-10 mx-auto' src={Python} alt="CSS icon" />
          <p className='my-4'>Python</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <img className='w-10 mx-auto' src={ReactImg} alt="React icon" />
          <p className='my-4'>REACT JS</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <img className='w-10 mx-auto' src={Node} alt="Node icon" />
          <p className='my-4'>NODE JS</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <img className='w-10 mx-auto' src={Mongo} alt="MongoDB icon" />
          <p className='my-4'>MONGO DB</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <img className='w-10 mx-auto' src={Express} alt="Express icon" />
          <p className='my-4'>EXPRESS JS</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <img className='w-10 mx-auto' src={Tailwind} alt="Tailwind icon" />
          <p className='my-4'>TAILWIND</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <img className='w-10 mx-auto' src={FireBase} alt="FireBase icon" />
          <p className='my-4'>FIREBASE</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <img className='w-10 mx-auto' src={GitHub} alt="GitHub icon" />
          <p className='my-4'>GITHUB</p>
        </div>
        {/* <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <img className='w-10 mx-auto' src={Unix} alt="Unix icon" />
          <p className='my-4'>UNIX</p>
        </div> */}
      </div>
    </div>
    </div>
    </div>
)
}

export default Skills;

