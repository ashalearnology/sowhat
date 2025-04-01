/** @format */

import { FaArrowRightLong } from 'react-icons/fa6';
import { IoCloseSharp } from 'react-icons/io5';
import { useState } from 'react';

export default function SearchButton({ handleHideSearch }) {
  const [visible, setVisible] = useState(true);
  const handleClose = () => {
    setVisible(false);
    setTimeout(handleHideSearch, 300);
  };

  return (
    <>
      <div
        className={` fixed inset-0 bg-black/50 flex justify-center z-50 duration-300   ${
          visible ? 'opacity-100 ' : 'opacity-0 '
        }`}
      >
        <div className="mt-8 flex h-10 items-center gap-3 w-full justify-center">
          <div className="flex  bg-white items-center w-1/3  p-2 outline outline-blue-700">
            <input type="text" className="w-full outline-none " />
            <FaArrowRightLong size={30} />
          </div>
          <div className="bg-white rounded-full border" onClick={handleClose}>
            <IoCloseSharp size={30} />
          </div>
        </div>
      </div>
    </>
  );
}
