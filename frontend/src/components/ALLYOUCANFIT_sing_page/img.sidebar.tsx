/** @format */

"use client";

import { useState } from "react";
import Link from "next/link";

// Main component
const Allyoucanfit_img_sildbar = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const arr = [
    {
      image:
        "https://sowhat.global/cdn/shop/files/IMG_4793_Custom_1080x.jpg?v=1686307118",
    },
    {
      image: "https://sowhat.global/cdn/shop/files/qw2a_1080x.png?v=1686307118",
    },
    {
      image:
        "https://sowhat.global/cdn/shop/files/IMG_4796_Custom_1080x.jpg?v=1686307118",
    },
    {
      image:
        "https://sowhat.global/cdn/shop/files/IMG_4797_Custom_1080x.jpg?v=1686307118",
    },
    {
      image: "https://sowhat.global/cdn/shop/files/qw1_1080x.png?v=1686307118",
    },
    {
      image:
        "https://sowhat.global/cdn/shop/files/DSC0559_Custom_1080x.jpg?v=1686307118",
    },
  ];

  // Size options
  const sizes = ["S", "M", "L", "XL", "2XL"];

  const handleImageClick = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const handleSizeSelect = (index: string) => {
    setSelectedSize(index);
  };

  return (
    <div className="flex gap-20 w-full justify-between m-2 ">
      {/* Image Selection Section */}
      <div className=" w-1/2">
        {/* Image Selection Section */}
        <div className="flex max-xl:h-[60vh] justify-between relative">
          <div className="block w-1/2">
            <div className="flex flex-col gap-2 w-28">
              {arr.map((item, index) => (
                <div key={index} className="">
                  <Link
                    href=""
                    className="w-12 h-12 rounded-md overflow-hidden" // Image size maintained
                    onClick={() => handleImageClick(index)}
                  >
                    <img
                      src={item.image}
                      alt={`Image ${index}`}
                      className={`w-28 h-28 rounded-md object-cover  ${
                        activeIndex === index
                          ? "border-4 border-red-500"
                          : "border-2 border-transparent"
                      }`}
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div>
            {/* Selected Image Display */}
            {activeIndex !== null && (
              <div className=" transform bg-slate-100 rounded-md shadow-lg">
                <img
                  src={arr[activeIndex].image}
                  alt={`Selected Image `}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            )}
          </div>
        </div>
        <div className="w-[100%] flex flex-col my-10 bg-[#f4f4f4] gap-4 py-4 ">
          <h1 className="text-2xl pl-2">Payment</h1>
          <p className="pl-2">
            Your payment information is processed securely. We do not store
            credit card details not have access to your credit card information.
          </p>
        </div>
      </div>

      {/* Product Details Section */}
      <div className="w-1/2 p-4 flex flex-col gap-4">
        <p className="text-lg font-bold">SoWhat</p>
        <p className="text-4xl font-semibold">
          ALLYOUCANFIT X CAMILLE SPORTS BRA
        </p>
        <p className="text-xl ">€54,00</p>
        <div className="mt-4 flex gap-4 items-center">
          <p className="font-semibold text-2xl">Size</p>
          <p className="text-sm text-red-500">
            Click here to view the size guide
          </p>
        </div>

        {/* Size Selection */}
        <div className="flex flex-col gap-4">
          <p className="font-semibold text-lg">Select Size</p>
          <div className="flex gap-4">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => handleSizeSelect(size)}
                className={`px-4 py-2 border rounded-md transition-all ${
                  selectedSize === size
                    ? " border-blue-500"
                    : "bg-white text-black border-gray-400"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex gap-4 items-center border-b-8 border-yellow-300">
            <div className="font-semibold text-2xl">Stock</div>
            <div className=" text-md">In stock, ready to be shipped</div>
          </div>
          <div className="flex flex-col gap-4 font-semibold text-xl ">
            <p>BUY 2 FOR 10% OFF. </p>
            <p>BUY 3 FOR 20% OFF.</p>
          </div>
        </div>
        <div className="flex items-center justify-center border py-2 px-2 rounded-3xl hover:bg-black hover:text-white ">
          <button>ADD TO CART</button>
        </div>
        <div>
          <p className="leading-6 font-semibold">
            The Allyoucanfit x Camille Sports Bra is an easy and feminine way to
            stay active. Its luxe velvet straps and striped neon waistband keep
            you feeling comfy and looking fashionably chic. It's sustainable and
            extra stretchable, making it perfect for yoga, pilates and other low
            to medium intensity workouts. Get ready to look good and feel great!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Allyoucanfit_img_sildbar;
