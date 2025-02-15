import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Parallex from '../assets/projects/parallex.png';
import Card from '../assets/projects/card.png';
import chargeit from '../assets/projects/chargeit1.png';
import sms from '../assets/projects/smd.png';
import va from '../assets/projects/va.png';
import Gallery from '../assets/projects/gallery.png';
import Soen from '../assets/projects/soen.png';

import { FaGithub } from "react-icons/fa";
import { GrDeploy } from "react-icons/gr";

const Work = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1, // Trigger animation when 10% of the section is visible
  });

  React.useEffect(() => {
    if (inView) {
      controls.start('show');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 },
  };

  const projects = [
    {
      img: chargeit,
      title: "Charge IT",
      tech: "(React.js, Tailwind, Firebase, Flutter, Google Maps API)",
      desc: "Complete EV Solutions - Book, Charge, Rent and Drive!",
      demo: "https://chargingit.netlify.app/",
      code: "https://www.github.com/hneelabh/ChargeIT"
    },

    {
      img: Soen,
      title: "SOEN",
      tech: "(React,Node,Express JS,MongoDB,socket.io,Redis)",
      desc: "Your AI Developer",
      //demo: "https://imagal.netlify.app/",
      code: "https://github.com/Nirmal493/SOEN"
    },
    {
      img: sms,
      title: "Student-Management-System",
      tech: "(PHP, MySQL, HTML, CSS, Xampp, JavaScript)",
      desc: " a student database system to streamline administrative tasks",
      // demo: "https://packnchew.netlify.app/",
      code: "https://github.com/Nirmal493/studentms"
    },
    {
      img: Gallery,
      title: "Image-Gallery",
      tech: "(TailwindCSS,Html)",
      desc: "Designed web Page",
      demo: "https://imagal.netlify.app/",
      code: "https://github.com/Nirmal493/image-gallery"
    },
    
    {
      img: Parallex,
      title: "Parallex-Effect",
      tech: "(HTML, CSS, TAilwind CSS)",
      desc: "ParallaxDesign is a visually engaging web project showcasing smooth parallax scrolling effects for an immersive user experience.",
      demo: "parallexdesign.netlify.app",
      code: "https://github.com/Nirmal493/parallax-website"
    },
    {
      img: va,
      title: "Voting-App",
      tech: "(Node.js, Express, MongoDB, JWT)",
      desc: "This is a Backend application for a voting system where users can vote for candidates..",
      code: "https://github.com/Nirmal493/voting-app"
    },
    {
      img: Card,
      title: "Product Card",
      //tech: "(React.js, Open Dictionary API, Tailwind)",
      // desc: "An API-based app to show meanings, synonyms and antonyms of words.",
      desc: "Designed web Page",
      demo: "https://productcardpage.netlify.app//",
      code: "https://github.com/Nirmal493/product-card"
    }
  ];

  return (
    <div name='work' className='relative w-full min-h-screen text-gray-300 overflow-hidden'>
    <div className="relative min-h-screen w-full bg-black"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div><div class="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
  
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full max-md:px-10 z-10'>
        <div className='pb-8 z-10'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600 z-10'>
            Work
          </p>
          <p className='py-6'>Here’s a curated showcase of my finest and most impactful creations. :</p>
        </div>

        <motion.div
          ref={ref}
          className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 z-10'
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              style={{ backgroundImage: `url(${project.img})` }}
              className='shadow-xl shadow-black group container rounded-md flex justify-center items-center mx-auto content-div transform'
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className='opacity-0 group-hover:opacity-100'>
                <div className='text-2xl md:text-xl font-bold text-white text-center tracking-wider'>
                  {project.title}
                </div>
                <div className="text-center text-xs pb-2">{project.tech}</div>
                <div className="text-center text-s md:text-xs italic">{project.desc}</div>

                <div className='pt-8 text-center flex justify-center items-center'>
                  {project.demo && (
                    <a href={project.demo} target='_blank' rel='noopener noreferrer'>
                      <button className='text-center rounded-xl px-3 py-2 m-2 bg-white text-gray-700 font-bold text-lg flex items-center hover:scale-95 duration-300'>
                        <GrDeploy className='mr-2' />Demo
                      </button>
                    </a>
                  )}
                  <a href={project.code} target='_blank' rel='noopener noreferrer'>
                    <button className='text-center rounded-xl px-3 py-2 m-2 bg-white text-gray-700 font-bold text-lg flex items-center hover:scale-95 duration-300'>
                      <FaGithub className='mr-2' />Code
                    </button>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      </div>
    </div>
  );
}

export default Work;