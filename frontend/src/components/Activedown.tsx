/** @format */

'use client';

import { useState, useRef, useEffect, SetStateAction } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import Link from 'next/link';

const Activedown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option: SetStateAction<string>) => {
    setIsOpen(false);
  };

  console.log("Active Dropdown: ", isOpen);
  

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
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className=" flex items-center just text-[16px] gap-1 w-full text-left"
      >
        ACTIVEWEAR
        <MdOutlineKeyboardArrowDown />
      </button>
      {isOpen && (
        <ul className="block lg:absolute lg:w-[200px] space-y-1 bg-white lg:ml-[-50px] lg:mt-4 lg:shadow-md lg:z-50 lg:py-4 rounded-md lg:border border-gray-200">
          {[
            // { name: 'ACTIVEWEAR', path: '/home' }, 
            { name: 'THE BLACK EDIT', path: '/The_black_edit' },
            { name: 'Allyoucanfit X SW', path: '/Allyoucanfit' },
            { name: 'Shop Prints', path: '/Shop' },
            { name: 'SHOP ALL', path: '/shop_all' },
            { name: 'SPORTS BRA', path: '/sport_bra' },
            { name: 'LEGGINGS', path: '/Leggings' },
            { name: 'SHORTS', path: '/Sports' },
          ].map((option, index) => (
            <li
              key={index}
              onClick={() => handleOptionClick(option.name)}
              className="pl-5  cursor-pointer text-[16px] hover:text-slate-600	"
            >
              <Link href={option.path}>{option.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Activedown;
