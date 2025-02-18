/** @format */
'use client';
import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Activedown from './Activedown';
import Swimdown from './Swindown';
import gsap from 'gsap';
import { Righteous } from 'next/font/google';

const right = Righteous({
  weight: '400',
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const menuIconRef = useRef(null);

  useEffect(() => {
    if (menuOpen) {
      gsap.to(menuRef.current, { x: 0, duration: 0.5, ease: 'power3.out' });
      gsap.to(menuIconRef.current, {
        rotate: 90,
        duration: 0.3,
        ease: 'power1.out',
      });
      document.body.style.overflow = 'hidden'; // Prevent scrolling
    } else {
      gsap.to(menuRef.current, {
        x: '-100%',
        duration: 0.5,
        ease: 'power3.in',
      });
      gsap.to(menuIconRef.current, {
        rotate: 0,
        duration: 0.3,
        ease: 'power1.in',
      });
      document.body.style.overflow = 'auto'; // Restore scrolling
    }
  }, [menuOpen]);

  return (
    <>
      <div className="w-full min-h-[55px] flex flex-row items-center justify-between py-3 px-4 lg:px-0 relative z-[100]">
        <div className="lg:hidden absolute left-4 top-1/2 transform -translate-y-1/2">
          <div
            ref={menuIconRef}
            className="cursor-pointer flex items-center justify-center w-[40px] h-[40px] border border-gray-500 rounded-full"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="text-[20px] font-bold">☰</span>
          </div>
        </div>
        <nav className="flex flex-row items-center justify-center lg:justify-between w-full max-w-[1450px] px-8">
          <div>
            <Image
              src="/images/home/logo.png"
              alt="logo"
              loading="lazy"
              height={55}
              width={170}
              className="hidden lg:block"
            />
          </div>
          <ul
            className={`hidden lg:flex flex-row items-center text-[16px] gap-4 font-bold ${right.className}`}
          >
            <li>
              <Link href={'/'}>HOME</Link>
            </li>
            <li className="hidden lg:block">
              <Activedown />
            </li>

            <li>
              <Swimdown />
            </li>
            <li>
              <Link href={'/sustainability'}>SUSTAINABILITY</Link>
            </li>
            <li>
              <Link href={'/wishlist'}>My WISHLIST</Link>
            </li>
            <li>
              <Link href={'/search'}>SEARCH</Link>
            </li>
            <li>
              <Link href={'/login'}>LOGIN</Link>
            </li>
          </ul>

          <div>
            <Image
              src="/images/home/logo.png"
              alt="logo"
              loading="lazy"
              height={55}
              width={170}
              className="hidden max-lg:block"
            />
          </div>
        </nav>
        <div className="absolute right-4 lg:right-12 top-1/2 transform -translate-y-1/2">
          <div className="h-[36px] w-[36px] flex items-center justify-center border-[1px] border-[#C3C3C3] rounded-full">
            <span className="text-[16px] font-bold">0</span>
          </div>
        </div>
      </div>

      {/* Sidebar Menu */}
      <div
        ref={menuRef}
        className={`fixed top-0 left-0 w-[250px] h-full bg-white shadow-lg transform -translate-x-full transition-transform lg:hidden flex flex-col p-5 space-y-4 font-bold ${right.className} z-[101]`}
      >
        <div className="flex justify-end">
          <button
            className="text-xl font-bold cursor-pointer"
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </button>
        </div>
        <ul>
          <li>
            <Link href={'/'} onClick={() => setMenuOpen(false)}>
              HOME
            </Link>
          </li>
          <li>
            <Activedown />
          </li>
          <li>
            <Swimdown />
          </li>
          <li>
            <Link href={'/sustainability'} onClick={() => setMenuOpen(false)}>
              SUSTAINABILITY
            </Link>
          </li>
          <li>
            <Link href={'/wishlist'} onClick={() => setMenuOpen(false)}>
              My WISHLIST
            </Link>
          </li>
          <li>
            <Link href={'/search'} onClick={() => setMenuOpen(false)}>
              SEARCH
            </Link>
          </li>
          <li>
            <Link href={'/login'} onClick={() => setMenuOpen(false)}>
              LOGIN
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
