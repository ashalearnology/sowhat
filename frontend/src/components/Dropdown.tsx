/** @format */

'use client';

import { useState, useRef, useEffect, SetStateAction } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('English');
  const dropdownRef = useRef<HTMLDivElement | null>(null);

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
        className=" flex flex-row items-center gap-2 px-4 py-2 text-[12px]  w-full text-left"
      >
        {selectedOption}
        <MdOutlineKeyboardArrowDown />
      </button>
      {isOpen && (
        <ul className="absolute w-[150px] bg-white   mt-[-2px] ml-[-50px] shadow-md z-50 py-2">
          {[
            'English',
            'Espanol',
            'Italiano',
            'Deutsch',
            'Froncais',
            'Nederlands',
          ].map((option) => (
            <li
              key={option}
              onClick={() => handleOptionClick(option)}
              className="px-8 py-1  cursor-pointer text-[12px] hover:text-slate-600	"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
