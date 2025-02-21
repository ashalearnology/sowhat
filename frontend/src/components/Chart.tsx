import React from 'react';

const Chart = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center items-center gap-8 mx-auto mb-16">
        <div className=" w-full sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/4 px-6 py-8 text-center">
          <img
            src="/images/sustance/Screenshot_2022-08-16_at_4.37.00_PM_1080x (1).png_v=1660648054"
            alt="item1"
            className="w-48 h-48 sm:w-56 sm:h-56  object-contain mx-auto "
          />
          <h1 className="text-xl sm:text-2xl font-semibold mb-2 mt-[-30px]">Environment</h1>
          <p className="text-sm sm:text-base font-semibold">
            All suppliers, partners must make improvements in environmental
            performance. It is mandatory to integrate sustainable practices in
            decision making, adopt cleaner practices, take into consideration
            responsible use of natural resources and pollution prevention
            measures and getting social audits done, if applicable.
          </p>
        </div>

        
        <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/4 px-6 py-8 text-center">
          <img
            src="/images/sustance/rio-lecatompessy-cfDURuQKABk-unsplash_1080x.jpg_v=1620458737"
            alt="item2"
            className="w-48 h-48 sm:w-56 sm:h-56  object-contain mx-auto "
          />
          <h1 className="text-xl sm:text-2xl font-semibold mb-2  mt-[-30px]">No Forced Labour</h1>
          <p className="text-sm sm:text-base font-semibold">
          No supplier or partner should use forced, bonded, labour of prison or indentured labour in any manner. All labourers and employees must be working out of their own free will.
            No supplier must employ anyone under the age of 18, or the national legal working age, whichever is higher.
          </p>
        </div>

        
        <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/4 px-6 py-8 text-center">
          <img
            src="/images/sustance/Screenshot_2022-08-16_at_4.18.43_PM_1080x.png_v=1660646964"
            alt="item3"
            className="w-48 h-48 sm:w-56 sm:h-56 object-contain mx-auto "
          />
          <h1 className="text-xl sm:text-2xl font-semibold mb-2  mt-[-30px]">No Discrimination</h1>
          <p className="text-sm sm:text-base font-semibold">
            No employee should be discriminated against on the grounds of religion, gender, parental status, marital status, sexual orientation, disability, nationality, race, ethnicity, caste, affiliation with an association or for expressing political opinions & views.
            Adequate measures must be taken to prevent migrant employees from any discrimination.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-8 mx-auto">
        <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/4 px-6  text-center">
          <img
            src="/images/sustance/soroush-zargar-Tviv9s8vSMg-unsplash_1080x.jpg_v=1660645834"
            alt="item4"
            className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-72 object-contain mx-auto"
          />
          <h1 className="text-xl sm:text-2xl font-semibold mb-2">Hours & Collective Bargaining</h1>
          <p className="text-sm sm:text-base font-semibold ">
          The total number of working hours in a regular work week for an employee should not exceed 48. In case of an emergency, the number of hours should not exceed 60. Every employee must get 24 consecutive hours of rest in a week.
          All employees must have the right to choose their own association or collective bargaining. No form of communication with employees or their representatives should involve intimidation, force or any form of bullying.
          </p>
        </div>

        
        <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/4 px-6 py-8 text-center">
          <img
            src="/images/sustance/soroush-zargar-Tviv9s8vSMg-unsplash_1080x.jpg_v=1660645834"
            alt="item5"
            className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-72 object-contain mx-auto "
          />
          <h1 className="text-xl sm:text-2xl font-semibold mb-2">Compensation</h1>
          <p className="text-sm sm:text-base font-semibold">
          It is mandatory for all suppliers and partners to meet all national legal mandates related to compensation, wages and employee benefits.
        No wages must be deducted on disciplinary or discriminatory reasons. All employees have the right to be compensated for a regular workweek. The compensation must be above the mandated minimum wage.
          </p>
        </div>

    
        <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/4 px-6  text-center">
          <img
            src="/images/sustance/pexels-guilherme-coruja-7805122_1080x.jpg_v=1660647608"
            alt="item6"
            className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-72 object-contain mx-auto "
          />
          <h1 className="text-xl sm:text-2xl font-semibold mb-2">Safety Protocols</h1>
          <p className="text-sm sm:text-base font-semibold">
          All employees must have access to safe and hygenic working conditions. Safety practices and occupational health regulations must be adhered to, to prevent injuries and accidents.
            The partners must protect the employees from toxic substances, accidents and fires.
          </p>
        </div>
      </div>
    </>
  );
};

export default Chart;
