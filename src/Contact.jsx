import React from 'react';

const Contact = () => {
  return (
    <div name='contact' className='relative w-full min-h-screen text-gray-300 overflow-hidden'>
    <div className="relative min-h-screen w-full bg-black"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div><div class="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>


      {/* Contact Form */}
      
      <div className='flex flex-col justify-center items-center w-full h-full z-10'>
        <form
          method='POST'
          action="https://getform.io/f/bgdpympa" //chnge jaruri hai
          className='flex flex-col max-w-[600px] w-full z-10'
        >
          <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              Contact
            </p>
            <p className='py-4'>
            "Let's connect! Fill out the form below or reach me at nirmal050493@gmail.com to discuss opportunities and collaborations."
            </p>
          </div>
          <input
            className='bg-[#dedfe3] text-gray-700 p-2 rounded-lg'
            type="text"
            placeholder='Name'
            name='name'
          />
          <input
            className='bg-[#dedfe3] text-gray-700 my-4 p-2 rounded-lg'
            type="email"
            placeholder='Email'
            name='email'
          />
          <textarea
            className='bg-[#dedfe3]] text-gray-700 p-2 rounded-lg'
            name='message'
            rows="10"
            placeholder='Message'
          ></textarea>
          <button className='border-y-2 hover:bg-pink-600 hover:border-pink-600 hover:opacity-85 hover:scale-95 duration-300 px-3 py-2 my-8 mx-auto items-center rounded-xl'>
            Let's Connect!
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Contact;
