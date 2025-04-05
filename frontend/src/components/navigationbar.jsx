/** @format */
'use client';

const { default: Image } = require('next/image');
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { FaAngleRight } from 'react-icons/fa';
import { MdOutlineMenu } from 'react-icons/md';
// import NavigationMenu from './navigationMenu';
import { Righteous } from 'next/font/google';
import { LuUserRound } from 'react-icons/lu';
import { RiCloseLargeFill } from 'react-icons/ri';
import ShoppingCarts from './carts';
import useWindowSize from '@/hooks/useWindowSize';

const right = Righteous({
  weight: '400',
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

const Navigation = () => {
  const navbar_data = [
    {
      title: 'Home',
      to: '/',
      child: [],
    },
    {
      title: 'ACTIVEWEAR',
      to: '#',
      child: [
        { name: 'THE BLACK EDIT', path: '/The_black_edit' },
        { name: 'Allyoucanfit X SW', path: '/Allyoucanfit' },
        { name: 'Shop Prints', path: '/Shop' },
        { name: 'SHOP ALL', path: '/shop_all' },
        { name: 'SPORTS BRA', path: '/sport_bra' },
        { name: 'LEGGINGS', path: '/Leggings' },
        { name: 'SHORTS', path: '/Sports' },
      ],
    },
    {
      title: 'SWIMWEAR',
      to: '#',
      child: [
        { name: 'POP GELATO SS23', path: '/Pop_gelato' },
        { name: 'BIKINI', path: '/Bikine' },
        { name: 'SWIMSUITS', path: '/Swimsuits' },
        { name: 'SEPARATES', path: '/Separates' },
      ],
    },
    {
      title: 'SUSTAINABILITY',
      to: '/',
      child: [],
    },
    {
      title: 'my wishlist',
      to: '/',
      child: [],
    },
    {
      title: 'search',
      to: '#',
      child: [],
    },
    {
      title: 'login',
      to: '/login',
      child: [],
    },
  ];

  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMenu, setIsMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const windowWidth = useWindowSize();
  const dropdownRef = useRef(null);
  const navRef = useRef(null);

  // const handleClose = () => {
  //   setVisible(false);
  //   setTimeout(hadlehideMenu, 300);
  // };

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  useEffect(() => {
    if (typeof window !== 'undefined' && window.innerWidth >= 1024) {
      const handleClickOutside = (event) => {
        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(event.target)
        ) {
          setOpenDropdown(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    } else {
      const handleClickOutside = (event) => {
        if (navRef.current && !navRef.current.contains(event.target)) {
          setIsMenu(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [windowWidth]);

  const toggleMenu = () => {
    setIsMenu(!isMenu);
    // setVisible(visible);
  };

  function handleShowSearch(nav) {
    if (nav.title == 'search') {
      setShowSearch(true);
    } else if (nav.to == '#') {
      setIsMenu(true);
    } else {
      setIsMenu(false);
    }
  }
  const handleShowCart = () => {
    setShowCart(true);
  };
  const handleHideCart = () => {
    setShowCart(false);
  };

  // console.log('SEARCH: ', showSearch);

  return (
    <>
      <div className={` hidden lg:block py-3  ${right.className}`}>
        <div className="flex justify-between items-center px-4 xl:px-12 ">
          <div>
            <Image
              src="/images/home/logo.png"
              alt="logo"
              loading="lazy"
              height={55}
              width={170}
              className=""
            />
          </div>
          <nav className="  block">
            <ul className="flex justify-center gap-4  relative">
              {navbar_data.map((nav, i) => (
                <li key={i} className="flex flex-col gap-2 p-1 xl:p-2">
                  <div
                    className="flex items-center gap-2 justify-between "
                    onClick={() => toggleDropdown(i)}
                  >
                    <div className="flex items-center gap-2 cursor-pointer">
                      {/* {nav.to.length > 0 && ( */}
                      <Link href={nav.to} className="xl:text-[17px] uppercase">
                        {nav.title}
                      </Link>
                      {/* )} */}
                    </div>
                    {nav.child.length > 0 && (
                      <FaAngleRight
                        className={`transform rotate- ${
                          openDropdown === i ? 'rotate-90' : ''
                        }`}
                      />
                    )}
                  </div>
                  {nav.child.length > 0 && openDropdown === i && (
                    <ul
                      ref={dropdownRef}
                      className="top-10 z-50 flex flex-col min-w-7xl h-auto py-4 text-2xl rounded-lg absolute transition-all duration-500 ease-in-out bg-white border border-gray-300 shadow-lg "
                      // style={{
                      //   maxHeight: openDropdown === i ? '500px' : '0',
                      //   opacity: openDropdown === i ? '1' : '0',
                      //   overflow: 'hidden',
                      // }}
                    >
                      {nav.child.map((child, index) => (
                        <Link
                          key={index}
                          href={child.path}
                          className="hover:opacity-60 transition-opacity duration-300 ease-in-out"
                        >
                          <li className="text-[18px] px-5  ">{child.name}</li>
                        </Link>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <div className="cursor-pointer" onClick={handleShowCart}>
            <div className="h-[36px] w-[36px] flex items-center justify-center border-[1px] border-[#C3C3C3] rounded-full">
              <span className="text-[16px] font-bold">0</span>
            </div>
          </div>
        </div>
      </div>
      {/* MOBILE SIDE  */}
      <div className={`block lg:hidden py-2 ${right.className}`}>
        <div className="flex justify-between items-center px-6">
          <div
            className="cursor-pointer border p-2 rounded-full"
            onClick={toggleMenu}
          >
            <MdOutlineMenu size={25} />
          </div>
          <div>
            <Image
              src="/images/home/logo.png"
              alt="logo"
              loading="lazy"
              height={55}
              width={170}
              className=""
            />
          </div>
          <div className="cursor-pointer" onClick={handleShowCart}>
            <div className="h-[40px] w-[40px] flex items-center justify-center border-[1px] border-[#C3C3C3] rounded-full">
              <span className="text-[18px] font-bold">0</span>
            </div>
          </div>
        </div>
        {isMenu && (
          <div className="fixed inset-0 bg-black/50 flex justify-start z-50 transition-opacity duration-300">
            <div
              className={`bg-white w-72 h-full shadow-lg flex flex-col transform relative px-2 overflow-hidden transition-transform duration-300`}
              ref={navRef}
            >
              <div className="p-4 flex justify-end">
                <button onClick={toggleMenu} className="text-gray-700 text-xl">
                  ✕
                </button>
              </div>

              {showSearch && (
                <div className="w-full flex px-2 py-3">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="outline-none w-full"
                  />
                  <RiCloseLargeFill onClick={() => setShowSearch(false)} />
                </div>
              )}

              <nav className="block">
                <ul>
                  {navbar_data
                    .filter((nav) => nav.title.toLowerCase() !== 'login')
                    .map((nav, i) => (
                      <li key={i} className="flex flex-col gap-2 p-2">
                        <div
                          className="flex items-center gap-2  cursor-pointer "
                          onClick={() => toggleDropdown(i)}
                        >
                          <div
                            className="flex items-center gap-2 group "
                            onClick={() => handleShowSearch(nav)}
                          >
                            <Link
                              href={nav.to}
                              className="text-[18px] uppercase"
                            >
                              {nav.title}
                            </Link>
                          </div>
                          {nav.child.length > 0 && (
                            <FaAngleRight
                              className={`transform group:hover-cursor-pointer ${
                                openDropdown === i ? 'rotate-90' : ''
                              }`}
                            />
                          )}
                        </div>

                        {nav.child.length > 0 && openDropdown === i && (
                          <ul
                            className="flex flex-col pl-6 w-full p-2 rounded-lg transition-all duration-500 ease-in-out"
                            onClick={toggleMenu}
                          >
                            {nav.child.map((child, index) => (
                              <li key={index} className="text-[18px] mb-2">
                                <Link href={child.path} className="block">
                                  {child.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                </ul>
              </nav>
              <div className="absolute bottom-4 right-0  flex justify-center items-center gap-4 w-full text-center  py-2 px-5 ">
                <LuUserRound size={20} />
                <Link href="/login">Login </Link>
              </div>
            </div>
          </div>
        )}
      </div>
      {showCart && <ShoppingCarts handleHideCart={handleHideCart} />}
    </>
  );
};
export default Navigation;
