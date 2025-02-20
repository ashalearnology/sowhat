/** @format */

'use client';
import { useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { MdOutlineEuroSymbol } from 'react-icons/md';
import { IoMdClose } from 'react-icons/io'; 

const Leggings_accordion = () => {
  const [selectedSizes, setSelectedSizes] = useState([]);

  const toggleSize = (size) => {
    setSelectedSizes(
      (prevSizes) =>
        prevSizes.includes(size)
          ? prevSizes.filter((s) => s !== size) 
          : [...prevSizes, size], 
    );
  };

  const sections = [
    {
      title: 'Product',
      content: (
        <ul>
          {[
            { name: 'Bodysuit', qty: 1 },
            { name: 'Leggings', qty: 10 },
            { name: 'Short', qty: 3 },
            { name: 'Sports Bra', qty: 7 },
            { name: 'Top', qty: 3 },
          ].map((item, index) => (
            <li key={index} className="flex gap-2 items-center">
              <input type="checkbox" />
              <div className="flex justify-between w-full">
                <span>{item.name}</span>
                <span>{item.qty}</span>
              </div>
            </li>
          ))}
        </ul>
      ),
    },
    {
      title: 'Availability',
      content: (
        <ul>
          {[
            { name: 'In stock', qty: 25 },
            { name: 'Out of stock', qty: 0 },
          ].map((status, index) => (
            <li key={index} className="flex gap-2">
              <input type="checkbox" />
              <div className="flex justify-between w-full">
                <span>{status.name}</span>
                <span>{status.qty}</span>
              </div>
            </li>
          ))}
        </ul>
      ),
    },
    {
      title: 'Price',
      content: (
        <ul>
          <li>
            <p>The highest price is €80,00</p>
            <input type="range" name="range" className="mx-2" />
            <div className="flex justify-between">
              {[0, 80].map((price, index) => (
                <div
                  key={index}
                  className="flex w-24 border-2 rounded-2xl justify-between p-2"
                >
                  <MdOutlineEuroSymbol className="mt-1" />
                  <p>{price}</p>
                </div>
              ))}
              <span className="mt-4"></span>
            </div>
          </li>
        </ul>
      ),
    },
    {
      title: 'Size',
      content: (
        <ul className="flex flex-wrap gap-2">
          {['2XS', 'XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'].map(
            (size, index) => (
              <li key={index}>
                <button
                  onClick={() => toggleSize(size)}
                  className={`px-4 py-2 border rounded-md transition-all ${
                    selectedSizes.includes(size) ? '' : ' border-gray-400'
                  }`}
                >
                  {size}
                </button>
              </li>
            ),
          )}
        </ul>
      ),
    },

    {
      title: 'Sort',
      content: (
        <fieldset className="w-full">
          {[
            { id: 'Featured', label: 'Featured' },
            { id: 'Best', label: 'Best selling' },
            { id: 'Alphabetically-A', label: 'Alphabetically, A-Z' },
            { id: 'Alphabetically-Z', label: 'Alphabetically, Z-A' },
            { id: 'low-high', label: 'Price, low to high' },
            { id: 'high', label: 'Price, high to low' },
            { id: 'old-new', label: 'Date, old to new' },
            { id: 'new', label: 'Date, new to old' },
          ].map((sortOption, index) => (
            <div key={index} className="flex gap-2 w-full">
              <input
                type="radio"
                id={sortOption.id}
                name="sort"
                value={sortOption.id}
              />
              <label htmlFor={sortOption.id}>{sortOption.label}</label>
            </div>
          ))}
        </fieldset>
      ),
    },
  ];

  const [activeIndexes, setActiveIndexes] = useState([]);

  const toggleAccordion = (index) => {
    setActiveIndexes((prevIndexes) =>
      prevIndexes.includes(index)
        ? prevIndexes.filter((i) => i !== index)
        : [...prevIndexes, index],
    );
  };

  const closeSidebar = (index) => {
    setActiveIndexes((prevIndexes) => prevIndexes.filter((i) => i !== index));
  };

  return (
    <div className="md:w-1/4">
      <div className="flex-col ml-0 mt-10 outline-none max-lg:hidden">
        {sections.map((section, index) => (
          <div key={index} className="mb-2 group px-4">
            <button
              className="w-full text-left px-4 py-2 flex justify-between font-medium border-b-2 outline-none transition-all"
              onClick={() => toggleAccordion(index)}
            >
              {section.title}
              <IoIosArrowForward
                className={`cursor-pointer transform duration-300 transition-transform text-gray-300 ${
                  activeIndexes.includes(index) ? 'rotate-90' : ''
                }`}
              />
            </button>
            <div
              className={`px-4 py-2 bg-white transition-all overflow-hidden ${
                activeIndexes.includes(index) ? 'block' : 'hidden'
              }`}
            >
              {section.content}
            </div>
          </div>
        ))}
      </div>

      {/* Second div */}
      <div className=" md:w-full py-2 flex gap-2 lg:hidden px-5 overflow-x-scroll">
        {sections.map((section, index) => (
          <div key={index} className="mb-2 group px-4 border ">
            <button
              className="  w-full text-left py-2 flex justify-between font-medium transition-all"
              onClick={() => toggleAccordion(index)} 
            >
              {section.title}
              <IoIosArrowForward
                className={`cursor-pointer transform duration-300 transition-transform text-gray-300 ${
                  activeIndexes.includes(index) ? 'rotate-90' : ''
                }`}
              />
            </button>
            {activeIndexes.includes(index) && (
              <div className="lg:hidden flex h-screen w-72 absolute bg-slate-100 top-0 right-0 z-50">
                <div className="min-w-full px-4 py-2 flex-col gap-12 bg-white transition-all overflow-hidden">
                  <div className="flex justify-between items-center">
                    <div className="font-semibold text-2xl">
                      {section.title}
                    </div>
                    <button onClick={() => closeSidebar(index)}>
                      <IoMdClose className="text-xl text-gray-600" />
                    </button>
                  </div>
                  <div>{section.content}</div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leggings_accordion;
