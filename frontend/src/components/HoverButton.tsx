/** @format */

'use client';

import React from 'react';

const HoverButton = () => {
  return (
    // <div className="h-screen flex items-center justify-center bg-green-600 font-raleway">
    // </div>

    // <button className="relative w-52 h-12 border-2 border-white rounded-lg overflow-hidden bg-transparent text-white uppercase cursor-pointer group">
    //   <span className="absolute inset-0 bg-white transition-transform duration-200 ease-in group-hover:top-0 top-full"></span>
    //   <span className="absolute inset-0 flex items-center justify-center px-4 transition-colors duration-400 ease-in text-white group-hover:text-green-600">
    //     Hover me
    //   </span>
    // </button>

    <div className="flex items-center">
      <button className="relative h-[50px] w-32 rounded-full overflow-hidden border border-gray-400 bg-white text-[#1b1b1b]  transition-all before:absolute before:left-0 before:right-0 before:top-0 before:h-0 before:w-full before:bg-[#1b1b1b] before:duration-300 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0 after:w-full after:bg-[#1b1b1b] after:duration-300 hover:text-white hover:shadow-green-900 hover:before:h-2/4 hover:after:h-2/4">
        <span className="relative z-10 font-bold">SHOP NOW</span>
      </button>
    </div>
  );
};

export default HoverButton;
