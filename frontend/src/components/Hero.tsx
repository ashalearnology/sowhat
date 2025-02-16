/** @format */

import React from 'react';

const Hero = () => {
  return (
    <>
      <section className="bg-hero ">
        <div className=" px-24 py-24">
          <div className="flex flex-col gap-3">
            <span className="text-xs text-white font-bold ">
              BY NADIA & ARINA
            </span>
            <span className="text-4xl text-white font-bold">
              ELLEN X SO WHAT
            </span>
            <span className="text-base font-medium text-white">
              Sustainable chic loungewear styles
            </span>
          </div>
          <button className="mt-5 bg-[#E3F54B] px-5 py-3 text-sm font-bold flex items-center rounded-full duration-300 hover:bg-[#bdd20d]">
            SHOP NOW
          </button>
        </div>
      </section>
    </>
  );
};

export default Hero;
