import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import Logo from '../assets/h.png'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 0.9, y: 0 }}
      transition={{ duration: 1 }}
      className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-black text-gray-200 z-20'
    >
      {/* Logo */}
      <div>
        <img src={Logo} alt='logo' style={{ width: '40px' }} />
      </div>

      {/* Desktop Menu */}
      <ul className='hidden md:flex md:text-xs lg:text-sm'>
        {['home', 'about', 'skills', 'work', 'experience', 'certificates', 'contact'].map(
          (section, index) => (
            <li
              key={index}
              className='hover:text-[#8892b0] hover:scale-110 duration-500 cursor-pointer'
            >
              <Link to={section} smooth={true} duration={500}>
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            </li>
          )
        )}
      </ul>

      {/* Hamburger Button */}
      <div onClick={handleClick} className='md:hidden z-30'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={`${
          !nav ? 'hidden' : 'absolute'
        } top-0 right-0 w-[60%] h-screen opacity-80 bg-black rounded-l-xl text-gray-300 flex flex-col justify-center items-center z-10`}
      >
        {['home', 'about', 'skills', 'work', 'experience', 'certificates', 'contact'].map(
          (section, index) => (
            <li key={index} className='py-6 text-2xl'>
              <Link onClick={handleClick} to={section} smooth={true} duration={500}>
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            </li>
          )
        )}
        {/* Social Links in Mobile Menu */}
        <div className='flex items-center mt-8'>
          <li className='py-4'>
            <a
              className='flex justify-between items-center text-gray-300'
              href='https://www.linkedin.com/in/nirmal493/'
              target='blank'
            >
              <FaLinkedin size={30} />
            </a>
          </li>
          <li className='py-4'>
            <a
              className='flex justify-between items-center text-gray-300'
              href='https://www.github.com/Nirmal493'
              target='blank'
            >
              <FaGithub size={30} />
            </a>
          </li>
          <li className='py-4'>
            <a
              className='flex justify-between items-center text-gray-300'
              href='mailto:nirmal050493@gmail.com'
            >
              <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='py-4'>
            <a
              className='flex justify-between items-center text-gray-300'
              // href='https://drive.google.com/file/d/1v143hpz-kurIsSowBZammc6N4NEhKuSr/view'
              target='blank'
            >
              <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </div>
      </ul>

      {/* Social Links */}
      <div className='hidden md:flex lg:flex fixed flex-col top-[35%] left-0 z-10'>
        <ul>
          <li className='w-[160px] h-[40px] rounded-lg flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-700'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/nirmal493'
              target='blank'
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[40px] rounded-lg flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-800'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.github.com/Nirmal493'
              target='blank'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[40px] rounded-lg flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-900'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='mailto:nirmal050493@gmail.com'
            >
              E-mail <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[40px] rounded-lg flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-950'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              // href='https://drive.google.com/file/d/1v143hpz-kurIsSowBZammc6N4NEhKuSr/view'
              target='blank'
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Navbar;
