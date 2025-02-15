import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { motion } from 'framer-motion'

const Home = () => {
  const [text] = useTypewriter({
    words: [
      'Full-Stack Web Developer',
      'Final-Year IT Undergrad @ CUSAT'
    ],
    loop: true,
    typeSpeed: 40,
    deleteSpeed: 50,
  })

  return (
    <div name='home' className='relative w-full min-h-screen text-gray-300 overflow-hidden'>
    <div className="relative h-screen w-full bg-black"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div><div class="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
 
      {/* Background Floating Blobs
    <div className="absolute top-[10%] left-[10%] w-[40vw] h-[40vw] bg-purple-700 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float-fast z-0"></div>
    <div className="absolute top-[10%] right-[10%] w-[35vw] h-[35vw] bg-violet-800 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-float-fast z-0"></div>
    <div className="absolute bottom-[10%] left-[5%] w-[30vw] h-[30vw] bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-float-fast z-0"></div>
    <div className="absolute top-[20%] right-[15%] w-[25vw] h-[25vw] bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-float-fast z-0"></div>
    <div className="absolute bottom-[5%] left-[20%] w-[20vw] h-[20vw] bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-float-fast z-0"></div> */}
    {/* Content Container */}
    <div className='max-w-[1000px] md:mx-10 lg:mx-auto px-8 flex flex-col justify-center h-full relative z-10'>
    <motion.p
      className='text-pink-600'
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      Hi, my name is
    </motion.p>
    <motion.h1
      className='text-4xl sm:text-5xl lg:text-7xl font-bold text-[#c6c4c5]'
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      Nirmal Kumar Nirmal
    </motion.h1>
    <motion.h2
      className='text-2xl sm:text-3xl lg:text-5xl font-semibold text-[#8892b0]'
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 1 }}
    >
      I'm a <span>{text}</span><Cursor />
    </motion.h2>
    <motion.p
      className='py-4 max-w-[700px] text-[#87678d]'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1.5 }}
    >
   "I specialize in building exceptional digital experiences, leveraging my expertise in full-stack development and machine learning. Passionate about crafting high-performance, scalable web applications, I focus on delivering seamless, user-centric solutions that drive efficiency and innovation."
    </motion.p>
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 2 }}
    >
      <Link to="work" smooth={true} duration={500}>
        <button className='text-white group border-y-2 px-3 py-2 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 hover:scale-95 duration-500 rounded-xl'>
          View Work
          <span className='group-hover:rotate-90 duration-300'>
            <HiArrowNarrowRight className='ml-3' />
          </span>
        </button>
      </Link>
    </motion.div>
      </div>
      </div>
    </div>
  )
}

export default Home