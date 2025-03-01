/** @format */

'use client';
import { useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { MdOutlineEuroSymbol } from 'react-icons/md';
import { IoMdClose } from 'react-icons/io';

const Sliderslider = () => {
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [activeIndexes, setActiveIndexes] = useState<number[]>([]);
  const [openSidebarIndex, setOpenSidebarIndex] = useState<number | null>(null);

  const toggleSize = (size: string) => {
    setSelectedSizes((prevSizes) =>
      prevSizes.includes(size)
        ? prevSizes.filter((s) => s !== size)
        : [...prevSizes, size],
    );
  };

  const toggleAccordion = (index: number) => {
    setActiveIndexes((prevIndexes) =>
      prevIndexes.includes(index)
        ? prevIndexes.filter((i) => i !== index)
        : [...prevIndexes, index],
    );
  };

  const openSidebar = (index: number) => {
    setOpenSidebarIndex(index);
  };

  const closeSidebar = () => {
    setOpenSidebarIndex(null);
  };

  const sections = [
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
                    selectedSizes.includes(size)
                      ? 'border-black'
                      : 'border-gray-400'
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

  return (
    <div className="md:w-1/4">
      {/* Sidebar for larger screens */}
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

      {/* Sidebar for mobile */}
      <div className="md:w-full py-2 flex gap-2 lg:hidden px-5 overflow-x-scroll">
        {sections.map((section, index) => (
          <div key={index} className="mb-2 group px-4 border">
            <button
              className="w-full text-left py-2 flex justify-between font-medium transition-all"
              onClick={() => openSidebar(index)}
            >
              {section.title}
              <IoIosArrowForward
                className={`cursor-pointer transform duration-300 transition-transform text-gray-300 ${
                  openSidebarIndex === index ? 'rotate-90' : ''
                }`}
              />
            </button>
          </div>
        ))}
      </div>

      {/* Mobile Sidebar Modal */}
      {openSidebarIndex !== null && (
        <div className="fixed top-0 right-0 h-screen w-72 bg-slate-100 z-50 shadow-lg">
          <div className="min-w-full px-4 py-2 flex flex-col gap-12 bg-white">
            <div className="flex justify-between items-center">
              <div className="font-semibold text-2xl">
                {sections[openSidebarIndex].title}
              </div>
              <button onClick={closeSidebar}>
                <IoMdClose className="text-xl text-gray-600" />
              </button>
            </div>
            <div>{sections[openSidebarIndex].content}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sliderslider;
