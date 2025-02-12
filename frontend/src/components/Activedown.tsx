/** @format */

'use client';

import { useState, useRef, useEffect, SetStateAction } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

const Activedown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('ACTIVEWEAR');
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option: SetStateAction<string>) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: { target: any }) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative " ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className=" flex flex-row items-center  py-2 text-[16px]  w-full text-left"
      >
        {selectedOption}
        <MdOutlineKeyboardArrowDown className="mt-1" />
      </button>
      {isOpen && (
        <ul className="absolute w-[220px] bg-white   ml-[-50px] shadow-md z-50 py-4">
          {[
            'THE BLACK EDIT',
            'Allyoucanfit X SW',
            'Shop Prints',
            'SHOP ALL',
            'SPORTS BRA',
            'LEGGINGS',
            'SHORTS',
          ].map((option) => (
            <li
              key={option}
              onClick={() => handleOptionClick(option)}
              className="px-8 py-1  cursor-pointer text-[16px] hover:text-slate-600	"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Activedown;
