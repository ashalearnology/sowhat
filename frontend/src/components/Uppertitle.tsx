/** @format */
import Dropdown from './Dropdown';

import React from 'react';
import { FaPinterest, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Uppertitle = () => {
  return (
    <>
      <div className="max-w-full min-h-[40px] bg-[#f54b90] flex items-center justify-center ">
        <div className="flex flex-row items-center justify-between w-full max-w-[1450px]">
          {/* Social Icons */}
          <div className="flex gap-2 items-center text-[14px] cursor-pointer">
            <FaPinterest color="#282828" />
            <FaInstagram color="#282828" size={16} />
            <FaLinkedin color="#282828" />
          </div>

          {/* Text Content */}
          <div className="text-center cursor-pointer text-[12px]">
            <p className="relative  inline-block before:absolute before:left-0 before:bottom-0 before:w-full before:h-[1px] before:bg-gray-400 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-black after:transition-all after:duration-500 hover:after:w-full hover:text-[#282828]">
              OUT NOW: SO COMFY - BODYSUITS. LOUNGE DRESSES.
            </p>

            {/* <p>SUSTAINABLY SOURCED. ETHICALLY PRODUCED.</p> */}
          </div>

          {/* Dropdown */}
          <div className="relative flex items-center ">
            <Dropdown />
          </div>
        </div>
      </div>
    </>
  );
};

export default Uppertitle;
