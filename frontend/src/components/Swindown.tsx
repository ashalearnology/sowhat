/** @format */

'use client';

import { useState, useRef, useEffect, SetStateAction } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import Link from 'next/link';

const Swimdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option: SetStateAction<string>) => {
    setIsOpen(false);
  };

  console.log('Swimdown Dropdown: ', isOpen);

  // useEffect(() => {
  //   const handleClickOutside = (event: { target: any }) => {
  //     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
  //       setIsOpen(false);
  //     }
  //   };

  //   document.addEventListener('mousedown', handleClickOutside);
  //   return () => {
  //     document.removeEventListener('mousedown', handleClickOutside);
  //   };
  // }, []);

  return (
    <div className="relative " ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="flex items-center text-[16px] gap-1 w-full text-left"
      >
        SWIMWEAR
        <MdOutlineKeyboardArrowDown />
      </button>
      {isOpen && (
        <ul className="block lg:absolute lg:w-[200px] space-y-1 bg-white lg:ml-[-50px] lg:mt-4 lg:shadow-md lg:z-50 lg:py-4 rounded-md lg:border border-gray-200">
          {[
            // { name: 'SWIMWEAR', path: '/home' },
            { name: 'POP GELATO SS23', path: '/Pop_gelato' },
            { name: 'BIKINI', path: '/Bikine' },
            { name: 'SWIMSUITS', path: '/Swimsuits' },
            { name: 'SEPARATES', path: '/Separates' },
          ].map((option, index) => (
            <li
              key={index}
              onClick={() => handleOptionClick(option.name)}
              className="pl-5  cursor-pointer text-[16px] hover:text-slate-600"
            >
              <Link href={option.path}>{option.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Swimdown;
