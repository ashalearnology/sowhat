/** @format */

import React from 'react';
import CustomPrevArrow2 from '@/components/CustomPrevArrow2';

const Trending = () => {
  return (
    <>
      <section>
        <div className="text-center tracking-wider flex flex-col gap-4	py-14">
          <h1 className="text-xs font-bold">ACTIVEWEAR & SWIMWEAR STYLES</h1>
          <h2 className="text-3xl font-bold mx-auto tracking-widest max-w-[360px]">
            IN TRENDING PRINTS
          </h2>
          <h1 className="tracking-wider	font-bold">swipe & tap to explore</h1>
        </div>
        <div>
          <CustomPrevArrow2 />
        </div>
      </section>
    </>
  );
};

export default Trending;
