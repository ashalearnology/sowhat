"use client";
/** @format */

import Link from "next/link";
import React, { useState } from "react";
import Footerdown from "./Footerdown";
import Footerdown1 from "./Footerdown1";
import { BsArrowRight } from "react-icons/bs";
import { FaPinterest, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="bg-[#E3F54B] px-4 md:px-8 lg:px-16 lg:py-12">
      {/* Top Section */}
      <div className="flex flex-wrap justify-center">
        <div className="w-full max-w-[1400px] py-8 flex flex-wrap md:flex-nowrap justify-between gap-8">
          {/* Left Text Section */}
          <div className="max-w-[405px] flex flex-col gap-4 text-[#1b1b1b] font-bold text-[14px]">
            <p>Sustainably sourced, ethically manufactured, effortlessly chic active & swim styles.</p>
            <p>Manufactured & marketed by:</p>
            <p>Auliv Tech LLP</p>
          </div>

          {/* Links & Newsletter Section */}
          <div className="flex flex-wrap md:flex-nowrap md:w-auto justify-between gap-6 sm:gap-12">
            {/* SHOP */}
            <div className="flex flex-col gap-3 w-[45%] md:w-auto">
              <span className="text-[12px] text-[#5c5c5c] font-bold">SHOP</span>
              <div className="flex flex-col gap-1 text-sm font-bold">
                <Link href={"/home"}>HOME</Link>
                <Link href={"/home"}>ACTIVEWEAR</Link>
                <Link href={"/home"}>SWIMWEAR</Link>
                <Link href={"/home"}>SUSTAINABILITY</Link>
                <Link href={"/home"}>MY WISHLIST</Link>
              </div>
            </div>

            {/* LINKS */}
            <div className="flex flex-col gap-3 w-[45%] md:w-auto">
              <span className="text-[12px] text-[#5c5c5c] font-bold">LINKS</span>
              <div className="flex flex-col gap-1 text-sm font-bold">
                <Link href={"/home"}>GIFT CARD</Link>
                <Link href={"/home"}>Privacy Policy</Link>
                <Link href={"/home"}>Shipping & Returns</Link>
                <Link href={"/home"}>Terms of Service</Link>
                <Link href={"/home"}>Refund Policy</Link>
                <Link href={"/home"}>Contact Us</Link>
              </div>
            </div>

            {/* NEWSLETTER */}
            <div className="flex flex-col gap-3 w-full md:w-auto">
              <span className="text-[12px] text-[#5c5c5c] font-bold">NEWSLETTER</span>
              <div className="flex flex-col gap-5 text-sm font-bold">
                <span>Subscribe for store updates and discounts.</span>
                <div className="flex items-center border border-[#1B1B1B] px-4 py-3 w-full md:w-[300px] lg:w-[380px] rounded-full">
                  <input
                    type="text"
                    placeholder="Email address"
                    className="w-full bg-transparent text-black placeholder:text-gray-600 font-medium outline-none"
                  />
                  <BsArrowRight />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="text-center">
        <hr className="border-[#1b1b1b] w-full max-w-[1400px]" />
      </div>

      {/* Footer Bottom */}
      <div className="flex flex-wrap items-center justify-between py-4 w-full max-w-[1400px] mx-auto">
        <div className="flex items-center gap-2">
          <Footerdown />
          <Footerdown1 />
        </div>
        <div className="flex gap-2 items-center text-[14px] cursor-pointer">
          <FaPinterest color="#282828" />
          <FaInstagram color="#282828" size={16} />
          <FaLinkedin color="#282828" />
        </div>
      </div>
    </section>
  );
};

export default Footer;
