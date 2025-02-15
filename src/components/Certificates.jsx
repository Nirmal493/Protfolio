
import React from 'react';

import Python from '../assets/Certificates/kaggle.png';
import ibm from '../assets/Certificates/ibm2.png'

import ReactJS from '../assets/Certificates/devops.png';
import GettingAI from '../assets/Certificates/GettingAI.png';

const Certificates = () => {
  return (    
    <div name='certificates' className='relative w-full min-h-screen text-gray-300 overflow-hidden'>
    <div className="relative min-h-screen w-full bg-black"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div><div class="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
   

      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full z-10'>
        <div className='z-10'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Certifications</p>
          <p className='py-4'>These are some of the certifications I've received:</p>
        </div>




        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8 z-10'>
          <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500 rounded-xl'>
            <img className='w-full h-40 object-cover mx-auto rounded-md' src={ReactJS} alt="Devops Certificate" />
            <p className='my-4 font-semibold'>Introduction to Devops (coursera)</p>
            <a href="https://www.coursera.org/account/accomplishments/verify/JNK6NJ9BKZGB" target='new'>
              <button className='text-gray-700 bg-white rounded-md px-4 py-2 mb-2 font-bold hover:scale-95 duration-300'>Verify</button>
            </a>
          </div>





          <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500 rounded-xl'>
            <img className='w-full h-40 object-cover mx-auto rounded-md' src={GettingAI} alt="Getting Started with AI Certificate" />
            <p className='my-4 font-semibold'>Getting Started with AI (IBM)</p>
            <a href="https://www.credly.com/badges/93dc8c28-4a15-4a5d-ba84-5dc31797fc0f/public_url" target='new'>
              <button className='text-gray-700 bg-white rounded-md px-4 py-2 mb-2 font-bold hover:scale-95 duration-300'>Verify</button>
            </a>
          </div>






          <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500 rounded-xl'>
            <img className='w-full h-40 object-cover mx-auto rounded-md' src={ibm} alt="Artificial Intellicence Fundamental" />
            <p className='my-4 font-semibold'>Artificial Intelligence Fundamentals (IBM)</p>
            <a href="https://www.credly.com/badges/85d8a1e2-cc46-417a-82ac-bf53e900025b/public_url" target='new'>
              <button className='text-gray-700 bg-white rounded-md px-4 py-2 mb-2 font-bold hover:scale-95 duration-300'>Verify</button>
            </a>
          </div>




          {/* <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500 rounded-xl'>
            <img className='w-full h-40 object-cover mx-auto rounded-md' src={PS} alt="Problem Solving Certificate" />
            <p className='my-4 font-semibold'>Problem Solving (HackerRank)</p>
            <a href="https://www.hackerrank.com/certificates/770a3c68cecb" target='new'>
              <button className='text-gray-700 bg-white rounded-md px-4 py-2 mb-2 font-bold hover:scale-95 duration-300'>Verify</button>
            </a>
          </div> */}



          <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500 rounded-xl'>
            <img className='w-full h-40 object-cover mx-auto rounded-md' src={Python} alt="Python Certificate" />
            <p className='my-4 font-semibold'>Python (Kaggle)</p>
            <a href="https://www.kaggle.com/learn/certification/nirmalkumarnirmal/python" target='new'>
              <button className='text-gray-700 bg-white rounded-md px-4 py-2 mb-2 font-bold hover:scale-95 duration-300'>Verify</button>
            </a>
          </div>
         
        </div>
      </div>
      </div>
    </div>
  );
};

export default Certificates;
