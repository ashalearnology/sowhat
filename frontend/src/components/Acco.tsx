/** @format */

'use client';

import { useState, useRef, useEffect } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { motion } from 'framer-motion';

const AccordionDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('English');
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-full max-w-[200px]" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="flex flex-row items-center gap-2 px-4 py-2 text-[12px] w-full text-left border rounded-md shadow-sm bg-white"
      >
        {selectedOption}
        <MdOutlineKeyboardArrowDown
          className={`transform transition-transform ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
        />
      </button>
      <motion.ul
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="overflow-hidden absolute w-full bg-white shadow-md z-50 py-2 border rounded-md"
      >
        {[
          'English',
          'Espanol',
          'Italiano',
          'Deutsch',
          'Francais',
          'Nederlands',
        ].map((option) => (
          <li
            key={option}
            onClick={() => handleOptionClick(option)}
            className="px-4 py-2 cursor-pointer text-[12px] hover:bg-gray-100"
          >
            {option}
          </li>
        ))}
      </motion.ul>
    </div>
  );
};

export default AccordionDropdown;
