"use client";

import React from "react";

const Fourthinfo = () => {
  return (
    <div>
      <div
        className="w-full h-screen md:h-[300vh] bg-cover bg-center 
          bg-[url('/images/sustance/portrait4.jpg')] 
          md:bg-[url('/images/sustance/IMG_2957_1080x.jpg_v=1662966386')]"
      >
        {/* The background image changes from 'SUSTANCEIMG.jpg' to 'portrait1.jpg' at medium screen sizes */}
      </div>

      <div className="flex flex-col items-center h-screen w-3/4 mx-auto text-center justify-center px-4">
       
        <h1 className="font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4">
            Supplier Code Of Conduct
        </h1>
        <p className="font-semibold text-sm md:text-base lg:text-lg w-full sm:w-4/5 md:w-3/5">
        So What is committed to deliver the best possible experience to our customers, through service, quality and a verified product journey. We expect all our partners, suppliers and affiliates to operate sustainably and maintain the utmost responsibility, honesty and fairness while conducting their business. To ensure that all products are created in good working conditions and the safety of involved skilled & unskilled labour is not compromised, we have set our own code of conduct in place. It serves as a guideline for us to select the right suppliers and partners.
        We are committed to following the United Nations Sustainable Development Goals and the International Bill on Human Rights. We stand against any form of direct or indirect abuse or solicitation of the same in any manner. We select our partners after due diligence to ensure that they share the same set of values, in intent & in action.
        </p>
      </div>
    </div>
  );
};

export default Fourthinfo;
