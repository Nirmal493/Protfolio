// import React from 'react';
// import IBM from "../assets/Companies/ibm.jpg";


// function Experiences() {
//   return (
// <div name='experience' className='relative w-full min-h-screen text-gray-300 overflow-hidden'>
// <div className="relative min-h-screen w-full bg-black"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div><div class="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
  
//       <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
//         <div className='pb-8 max-sm:px-6 z-10'>
//           <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600 z-10'>
//             Experience
//           </p>
//           <p className='pt-6'>Following are the places I've gained work experience:</p>
//         </div>
//         <div className="relative container mx-auto px-6 flex flex-col space-y-8 overflow-hidden">
//           <div className="absolute w-2 h-full bg-gray-400 shadow-md inset-0 left-1/2 transform -translate-x-1/2"></div>

       
//           <div className="flex flex-col sm:flex-row items-center z-10 p-2 w-full shadow-xl shadow-black ">
//             <img src={IBM} alt="IBM" className="max-w-40 p-5 mr-2 duration-500 md:mr-6" />
//             <div className="text-left w-full">
//               <div className="bg-white text-[#145EFF] p-6 rounded-md shadow-md mx-auto w-full"
//                 data-aos="fade-left" data-aos-duration="800" data-aos-once="false">
//                 <div className='font-bold text-lg'>AI/ML Engineer Intern - IBM</div>
//                 <p className='max-sm:text-xs text-sm'>
//                   <strong>June 2024 - July 2024</strong><br />
//                   • Utilized IBM’s Watsonx.ai to develop and integrate chatbots across multiple websites, achieving a 50% reduction in response times.<br />
//                   • Trained, tested and deployed machine learning models that drive broad-scale AI solutions.<br />
//                   • Collaborated cross-functionally with teams to streamline AI solutions in agriculture, healthcare and food delivery systems.<br />
//                 </p>
//               </div>
//             </div>
//           </div>

         

//         </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Experiences;




import React from 'react';
import IBM from "../assets/Companies/ibm.jpg";

function Experiences() {
  return (
    <div name='experience' className='relative w-full min-h-screen text-gray-300 overflow-hidden'>
      <div className="relative min-h-screen w-full bg-black">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>

        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div className='pb-8 max-sm:px-6 z-10'>
            <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600 z-10'>
              Experience
            </p>
            <p className='pt-6'>Following are the places I've gained work experience:</p>
          </div>
          <div className="relative container mx-auto px-6 flex flex-col space-y-8 overflow-hidden">
            {/* <div className="absolute w-2 h-full bg-gray-400 shadow-md inset-0 left-1/2 transform -translate-x-1/2"></div> */}

            <div className="flex flex-col sm:flex-row items-center z-10 p-2 w-full shadow-xl shadow-black ">
              <img src={IBM} alt="IBM" className="max-w-40 p-5 mr-2 duration-500 md:mr-6" />
              <div className="text-left w-full">
                <div className="bg-white text-[#145EFF] p-6 rounded-md shadow-md mx-auto w-full"
                  data-aos="fade-left" data-aos-duration="800" data-aos-once="false">
                  
                  <div className='font-bold text-lg'>
                    <a href="https://drive.google.com/file/d/1MadULBJh5KSJ4fX4zvbRH10bjJUZpxgA/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      AI/ML Engineer Intern - IBM
                    </a>
                  </div>

                  <p className='max-sm:text-xs text-sm'>
                    <strong>June 2024 - July 2024</strong><br />
                    • Utilized IBM’s Watsonx.ai to develop and integrate chatbots across multiple websites, achieving a 50% reduction in response times.<br />
                    • Trained, tested and deployed machine learning models that drive broad-scale AI solutions.<br />
                    • Collaborated cross-functionally with teams to streamline AI solutions in agriculture, healthcare and food delivery systems.<br />
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Experiences;
