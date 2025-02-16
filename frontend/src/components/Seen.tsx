/** @format */

import React from 'react';
import CustomPrevArrow1 from '@/components/CustomPrevArrow1';

const Seen = () => {
  return (
    <>
      <section className="bg-[#E3F54B] h-[770px] py-20 mt-20">
        <div className="text-center  tracking-wider flex flex-col items-center justify-center gap-4">
          <h1 className="text-xs font-bold">FEATURED</h1>
          <h2 className="text-3xl font-bold tracking-widest">AS SEEN IN</h2>
          <h1 className="tracking-wider  mx-auto	font-bold w-[450px]">
            Here's what the best have to say about your new favorite brand.
          </h1>
        </div>
        <div className="py-12">
          <CustomPrevArrow1 />
        </div>
      </section>
    </>
  );
};

export default Seen;
