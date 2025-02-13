/** @format */
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import Activedown from './Activedown';
import Swimdown from './Swindown';
import { Righteous } from 'next/font/google';

const right = Righteous({
  weight: '400',
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

const Navbar = () => {
  return (
    <>
      <div className="max-w-full min-h-[55px] flex flex-row items-center justify-center py-3">
        <nav className="flex flex-row items-center  justify-between w-full max-w-[1450px] pr-3">
          <div className="">
            <Image
              src="/images/home/logo.png"
              alt="logo"
              loading="lazy"
              height={55}
              width={170}
            />
          </div>
          <div className="flex flex-row items-center justify-center gap-4">
            <ul
              className={`flex flex-row items-center text-[16px] gap-4 font-bold ${right.className}`}
            >
              <li>
                <Link href={''}>HOME</Link>
              </li>
              <li>
                <Activedown />
              </li>
              <li>
                <Swimdown />
              </li>
              <li>
                <Link href={''}>SUSTAINABILITY</Link>
              </li>
              <li>
                <Link href={''}>My WISHLIST</Link>
              </li>
              <li>
                <Link href={''}>SEARCH</Link>
              </li>
              <li>
                <Link href={''}>LOGIN</Link>
              </li>
            </ul>

            <div className="h-[36px] w-[36px] flex items-center justify-center  border-[1px] border-[#C3C3C3] rounded-full">
              <span className="text-[16px] font-bold">0</span>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
