import React from 'react'

// This parent wrapper will contain the continuous blobs
const ParentWrapper = ({ children }) => {
  return (
<div className="relative w-full min-h-screen h-full overflow-hidden bg-gradient-to-r from-[#0F0C29] to-[#302B63]">
{/* Background Floating Blobs */}
<div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-purple-700 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float-slow z-0"></div>
  <div className="absolute top-[10%] right-[10%] w-[35vw] h-[35vw] bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float-fast z-0"></div>
  <div className="absolute bottom-[-10%] left-[5%] w-[30vw] h-[30vw] bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-float-slow z-0"></div>
  <div className="absolute top-[20%] right-[15%] w-[25vw] h-[25vw] bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-float-fast z-0"></div>
  <div className="absolute bottom-[5%] left-[20%] w-[20vw] h-[20vw] bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-float-slow z-0"></div>
  
  {/* Child Components */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}

export default ParentWrapper
{/* <div className="absolute top-0 left-0 w-[100vw] h-[100vw] bg-purple-700 rounded-full mix-blend-multiply filter blur-xl opacity-80 animate-float-slow z-0"></div>
      <div className="absolute top-1/4 right-0 w-[120vw] h-[120vw] bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float-fast z-0"></div>
      <div className="absolute bottom-0 left-1/2 w-[100vw] h-[100vw] bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-float-slow z-0"></div>
      <div className="absolute top-1/4 right-10 w-[80vw] h-[80vw] bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-float-fast z-0"></div>
      <div className="absolute bottom-10 left-[25%] w-[70vw] h-[70vw] bg-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-float-slow z-0"></div> */}
