"use client";

import React from "react";

const Fiveinfo = () => {
  return (
    <div>
      <div
        className="w-full  h-screen md:h-[140vh] bg-cover bg-center 
          bg-[url('/images/sustance/yogendra-singh-RgDVFbXllVA-unsplash_1080x.jpg')] 
          md:bg-[url('/images/sustance/loren-joseph-XoBWUBA3Amg-unsplash_1080x.jpg_v=1660655920')]
          bg-no-repeat mx-auto"
      >
        {/* The background image changes from 'SUSTANCEIMG.jpg' to 'portrait1.jpg' at medium screen sizes */}
      </div>

      <div className="flex flex-col items-center h-96 w-full sm:w-3/4 mx-auto text-center justify-center px-4 my-12">
        <p className="mb-4 text-sm sm:text-base md:text-lg lg:text-xl">
          EVERY ORDER HAS AN IMPACT
        </p>
        <h1 className="font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4">
          Giving Back
        </h1>
        <p className="font-semibold text-sm md:text-base lg:text-lg w-full sm:w-4/5 md:w-3/5">
          5% of all our profits go to Abbasi Charitable & Educational Society (ACES - www.aces.org), an NGO based in India that supports women and children below the poverty line, locally and funds multiple scholarships, education drives, and skill development programs for them.
        </p>
      </div>
    </div>
  );
};

export default Fiveinfo;
