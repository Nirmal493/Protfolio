

import React from 'react'

const About = () => {
  return (
     <div name='about' className='relative w-full min-h-screen text-gray-300 overflow-hidden'>
     <div className="relative h-screen w-full bg-black"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div><div class="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>


      {/* Content Container */}
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4 z-10'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
          </div>
          <div></div>
        </div>

        <div className='max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8 z-10'>
          <div className='sm:text-right text-3xl font-bold'>
            <p>
            "Hi, I'm Nirmal. Take a look around, and feel free to connect!"
            </p>
          </div>
          <div>
            <p>
            As a passionate full-stack web developer specializing in MERN, I bring a blend of creativity and precision to every project. With expertise in AI-ML, chatbot development, and scalable web solutions, I craft intuitive and high-performance applications. From seamless backend logic to engaging frontend experiences, I thrive on building innovative solutions that enhance user interactions. Let’s collaborate to bring your vision to life with cutting-edge technology and intelligent design.
            </p>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default About
