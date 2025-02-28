/** @format */
"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import Footerdown from './Footerdown';
import { BsArrowRight } from 'react-icons/bs';
import Footerdown1 from './Footerdown1';
import { FaPinterest, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Import chevron icons for dropdown

const Footer = () => {
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [isLinksOpen, setIsLinksOpen] = useState(false);

  return (
    <>
      <section className="bg-[#E3F54B]">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="flex flex-col md:flex-row justify-between w-full max-w-[1400px] py-8 max-lg:flex-wrap">
            <div className="px-2 max-w-[405px] flex flex-col gap-1 text-[#1b1b1b] font-bold text-[14px]  md:text-left">
              <p>
                Sustainably sourced, ethically manufactured, effortlessly chic
                active & swim styles.
              </p>
              <p>Manufactured & marketed by:</p>
              <p>Auliv Tech LLP</p>
            </div>

            {/* SHOP Section with Dropdown for Mobile */}
            <div className="flex px-2 flex-col mt-4 md:mt-0  md:items-start gap-3">
              <span
                className="text-[12px] text-[#5c5c5c] font-bold cursor-pointer flex  gap-2"
                onClick={() => setIsShopOpen(!isShopOpen)}
              >
                SHOP
                {/* Show arrow only for screens below 1000px */}
                <span className="md:hidden">
                  {isShopOpen ? (
                    <FaChevronUp size={12} />
                  ) : (
                    <FaChevronDown size={12} />
                  )}
                </span>
              </span>
              {/* Dropdown content for mobile */}
              <div className={`${isShopOpen ? 'block' : 'hidden'} md:hidden`}>
                <div className="flex flex-col gap-1 items-center md:items-start text-sm font-bold">
                  <Link href={'/home'}>HOME</Link>
                  <Link href={'/home'}>ACTIVEWEAR</Link>
                  <Link href={'/home'}>SWIMWEAR</Link>
                  <Link href={'/home'}>SUSTAINABILITY</Link>
                  <Link href={'/home'}>MY WiSHLIST</Link>
                </div>
              </div>

              {/* Static links for larger screens */}
              <div className="hidden md:flex flex-col gap-1 items-start text-sm font-bold">
                <Link href={'/home'}>HOME</Link>
                <Link href={'/home'}>ACTIVEWEAR</Link>
                <Link href={'/home'}>SWIMWEAR</Link>
                <Link href={'/home'}>SUSTAINABILITY</Link>
                <Link href={'/home'}>MY WiSHLIST</Link>
              </div>
            </div>

            {/* LINKS Section with Dropdown for Mobile */}
            <div className="flex flex-col mt-4 px-2 md:mt-0  md:items-start gap-3">
              <span
                className="text-[12px] text-[#5c5c5c] font-bold cursor-pointer flex items-center gap-2"
                onClick={() => setIsLinksOpen(!isLinksOpen)}
              >
                LINKS
                {/* Show arrow only for screens below 1000px */}
                <span className="md:hidden">
                  {isLinksOpen ? (
                    <FaChevronUp size={12} />
                  ) : (
                    <FaChevronDown size={12} />
                  )}
                </span>
              </span>
              {/* Dropdown content for mobile */}
              <div className={`${isLinksOpen ? 'block' : 'hidden'} md:hidden`}>
                <div className="flex flex-col gap-1 items-center md:items-start text-sm font-bold">
                  <Link href={'/home'}>GIFT CARD</Link>
                  <Link href={'/home'}>Privacy Policy</Link>
                  <Link href={'/home'}>Shipping & Returns</Link>
                  <Link href={'/home'}>Terms of Service</Link>
                  <Link href={'/home'}>Refund policy</Link>
                  <Link href={'/home'}>Contact Us</Link>
                </div>
              </div>

              {/* Static links for larger screens */}
              <div className="hidden md:flex flex-col gap-1 items-start text-sm font-bold">
                <Link href={'/home'}>GIFT CARD</Link>
                <Link href={'/home'}>Privacy Policy</Link>
                <Link href={'/home'}>Shipping & Returns</Link>
                <Link href={'/home'}>Terms of Service</Link>
                <Link href={'/home'}>Refund policy</Link>
                <Link href={'/home'}>Contact Us</Link>
              </div>
            </div>

            {/* NEWSLETTER Section (No change, as requested) */}
            <div className="flex flex-col px-2 gap-3  md:items-start mt-4 md:mt-0 ">
              <span className="text-[12px] text-[#5c5c5c] font-bold">
                NEWSLETTER
              </span>
              <div className="flex flex-col gap-5  text-sm font-bold">
                <span>Subscribe for store updates and discounts.</span>
                <div className="flex flex-row items-center justify-between border border-[#1B1B1B] px-4 py-3 w-full md:w-[330px] lg:w-[410px] rounded-full">
                  <input
                    type="text"
                    placeholder="Email address"
                    className="bg-transparent text-black placeholder:text-gray-600 font-medium outline-none w-full "
                  />
                  <BsArrowRight />
                </div>
              </div>
            </div>
          </div>
        </div>
      
        <div className="text-center flex items-center justify-center">
          <hr className="border-[#1b1b1b] w-full" />
        </div> 
        <div className="max-w-full flex items-center justify-center">
          <div className="py-4 w-full max-w-[1400px] flex flex-col md:flex-row items-center justify-between">
            {/* Left Side: Language, Currency */}
            <div className="flex items-center justify-center gap-4 w-full md:w-auto mb-4 md:mb-0">
              {/* Language Dropdown */}
              <select className="bg-black text-white text-sm font-bold rounded-md p-2">
                <option>Language</option>
                <option>English</option>
                <option>Spanish</option>
              </select>
              {/* Currency Dropdown */}
              <select className="bg-black text-white text-sm font-bold rounded-md p-2">
                <option>Currency</option>
                <option>USD</option>
                <option>EUR</option>
              </select>
            </div>

            {/* Right Side: Instagram and Social Links */}
            <div className="flex gap-2 items-center text-[14px] cursor-pointer justify-center w-full md:w-auto">
              <FaPinterest color="#282828" />
              <FaInstagram color="#282828" size={16} />
              <FaLinkedin color="#282828" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
