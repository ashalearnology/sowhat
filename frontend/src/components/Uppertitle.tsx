/** @format */
import Dropdown from './Dropdown';

import React from 'react';
import { FaPinterest, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Uppertitle = () => {
  return (
    <>
      <div className="">
        <div className="flex">
          <FaPinterest />
          <FaInstagram />
          <FaLinkedin />
        </div>

        <div className="flex ">
          <p>OUT NOW: SO COMFY - BODYSUITS. LOUNGE DRESSES.</p>
          <p>SUSTAINABLY SOURCED. ETHICALLY PRODUCED.</p>
        </div>

        <div className=" min-h-screen ">
          {/* <select className=" bg-white px-4 py-2 rounded-md hover:bg-white focus:outline-none">
            <option value="English" className="bg-white">
              English
            </option>
            <option value="Espanol">Espanol</option>
            <option value="Italiano">Italiano</option>
            <option value="Deutsch">Deutsch</option>
            <option value="francais">francais</option>
            <option value="Nederland">Nederland</option>
          </select> */}
          <Dropdown />
        </div>
      </div>
    </>
  );
};

export default Uppertitle;
