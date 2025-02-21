"use client";

import React from "react";

const Firstinfo = () => {
  return (
    <div>
      <div
        className="w-full h-screen bg-cover bg-center 
          bg-[url('/images/sustance/portrait1.jpg')] 
          md:bg-[url('/images/sustance/SUSTANCEIMG.jpg')]"
      >
        {/* The background image changes from 'SUSTANCEIMG.jpg' to 'portrait1.jpg' at medium screen sizes */}
      </div>

      <div className="flex flex-col items-center h-screen w-3/4 mx-auto text-center justify-center px-4">
        <p className="mb-4 text-sm sm:text-base md:text-lg lg:text-xl">
          CERTIFICATES AVAILABLE - CPSIA for recycled polyester, GOTS for organic cotton.
        </p>
        <h1 className="font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4">
          <span className="block">Fabrics &</span> Certificates
        </h1>
        <p className="font-semibold text-sm md:text-base lg:text-lg w-full sm:w-4/5 md:w-3/5">
          All styles are crafted keeping two key factors in mind - macro fashion trends & forecasts, intended utility of the style - form, specs, performance, durability.
          The fabric selection process is centred around durability, stretchability, comfort and optimum performance. For styles designed for high performance we use extremely durable polyester-elastane blends. For loungewear, swimwear and styles designed for medium intensity workouts we only use recycled fabrics that are made up of processed waste (including plastic waste). By 2024, we intend to eliminate the use of non-recycled fabrics from our product offering, altogether.
          Our fabrics are sourced from Vietnam, Turkey, Mexico, Poland, and China. Activewear, loungewear and swimwear styles are manufactured in Latvia & Spain.
        </p>
      </div>
    </div>
  );
};

export default Firstinfo;
