/** @format */

'use client';

import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const ImageSlider = () => {
  const [isHovered, setIsHovered] = useState(false);

  const slides = [
    {
      url: '/images/home/seen1.png',
    },
    {
      url: '/images/home/seen2.png',
    },
    {
      url: '/images/home/seen3.png',
    },
    {
      url: '/images/home/seen4.png',
    },
    {
      url: '/images/home/seen5.png',
    },
  ];

  const CustomPrevArrow = ({
    onClick,
  }: {
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
  }) => (
    <button
      onClick={onClick}
      className={`absolute left-3 top-1/3 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full 
      transition-all duration-300 ease-in-out z-10 ${
        isHovered ? 'opacity-100  ' : 'opacity-0 '
      }`}
    >
      <FaArrowLeft size={20} />
    </button>
  );

  const CustomNextArrow = ({
    onClick,
  }: {
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
  }) => (
    <button
      onClick={onClick}
      className={`absolute right-3 top-1/3 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full 
      transition-all duration-300 ease-in-out z-10 ${
        isHovered ? 'opacity-100 ' : 'opacity-0 '
      }`}
    >
      <FaArrowRight size={20} />
    </button>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3.3,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div
      className="max-w-full mx-auto  relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative  h-[45.438rem]">
            <img
              src={slide.url}
              alt={`Slide ${index + 1}, Slide ${index - 1}`}
              className="max-w-[27.5rem] h-[27.5rem] object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
