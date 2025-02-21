"use client";

import React from "react";

const Firstinfo = () => {
  return (
    <div>
      <div
        className="w-full h-screen bg-cover bg-center 
          bg-[url('/images/sustance/portrait2.jpg')] 
          md:bg-[url('/images/sustance/img2.jpg')]"
      >
        {/* The background image changes from 'SUSTANCEIMG.jpg' to 'portrait1.jpg' at medium screen sizes */}
      </div>

      <div className="flex flex-col items-center h-96 w-3/4 mx-auto text-center justify-center px-4">
        <p className="mb-4 text-sm sm:text-base md:text-lg lg:text-xl">
        Available certificate - OKEO-TEX
        </p>
        <h1 className="font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4">
          <span className="block">Certified Vegan</span> Inks
        </h1>
        <p className="font-semibold text-sm md:text-base lg:text-lg w-full sm:w-4/5 md:w-3/5">
        We only use OEKO-TEX certified, 100% biodegradable, vegan, water-based, toxin-free inks for our delectable prints & vibrant colours.
        </p>
      </div>
    </div>
  );
};

export default Firstinfo;
