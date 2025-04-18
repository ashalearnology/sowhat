/** @format */

'use client';

import { useState, useRef, useEffect, SetStateAction } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

const Footerdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('English');
  const dropdownRef = useRef<HTMLDivElement>(null);

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
      <div className="flex justify-center items-center">
        <button
          onClick={toggleDropdown}
          className="flex flex-row items-center gap-1 px-2 py-1 text-base bg-black text-white text-left"
        >
          {selectedOption}
          <MdOutlineKeyboardArrowDown />
        </button>
      </div>

      {isOpen && (
        <ul className="absolute w-[114px]  bg-white  bottom-0 mb-[50px] shadow-md z-50 py-2">
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
              className="px-4 py-2 font-medium cursor-pointer text-base hover:text-slate-600"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Footerdown;
