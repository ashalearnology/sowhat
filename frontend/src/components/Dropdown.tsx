/** @format */

'use client';

import { useState, useRef, useEffect } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('English');
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
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
        className="bg-white flex flex-row items-center gap-2 px-4 py-2 rounded-md w-full text-left"
      >
        {selectedOption}
        <MdOutlineKeyboardArrowDown />
      </button>
      {isOpen && (
        <ul className="absolute w-[150px] bg-white  rounded-md mt-1 shadow-md">
          {['Option 1', 'Option 2', 'Option 3'].map((option) => (
            <li
              key={option}
              onClick={() => handleOptionClick(option)}
              className="px-4 py-2  cursor-pointer"
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
