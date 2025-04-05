/** @format */

'use client';

import { IoCloseSharp } from 'react-icons/io5';
import { useEffect, useState } from 'react';

export default function ShoppingCarts({ handleHideCart }) {
  const [visible, setvisible] = useState(false);
  useEffect(() => {
    setvisible(true);
  }, []);
  const handleclose = () => {
    setvisible(false);
    setTimeout(handleHideCart, 300);
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 flex justify-end z-50  transition-opacity duration-300 "
      onClick={handleclose}
    >
      <div
        className={`bg-white w-96 h-full shadow-lg flex flex-col transform ${
          visible ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300`}
      >
        <div className="bg-gray-100  w-full h-20 flex items-center justify-between px-4">
          <div className="flex gap-4">
            <p className="text-xl font-semibold">Cart</p>
            <p className="text-xl text-gray-600 font-semibold">
              Recently Viewed
            </p>
          </div>

          <button
            className="relative text-center  w-8 h-8 group cursor-pointer"
            onClick={handleclose}
          >
            <IoCloseSharp size={30} />
          </button>
        </div>

        <div className="px-4 text-gray-800  h-full gap-4">
          <p className="">Your cart is currently empty.</p>
        </div>
      </div>
    </div>
  );
}
