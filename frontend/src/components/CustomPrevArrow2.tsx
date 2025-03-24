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
      url: '/images/home/trending1.jpg',
      text: 'Shop Ultra Soft Leggings',
      protext: '37 Productos',
    },
    {
      url: '/images/home/trending2.jpg',
      text: 'Shop The Statement',
      protext: '17 Productos',
    },
    {
      url: '/images/home/trending3.png',
      text: 'Shop Sports Tops & Sports Bras',
      protext: '57 Productos',
    },
    {
      url: '/images/home/trending4.jpg',
      text: 'Shop Recycled Bikni Sets',
      protext: '11 Productos',
    },
    {
      url: '/images/home/trending5.jpg',
      text: 'AW22 - Shop Shorts',
      protext: '25 Productos',
    },
    {
      url: '/images/home/trending6.png',
      text: 'Sweatshirts & Hoodies',
      protext: '29 Productos',
    },
    {
      url: '/images/home/trending7.jpg',
      text: 'Shop Pop Gelato Swimwear',
      protext: '28 Productos',
    },
  ];

  const CustomPrevArrow = ({
    onClick,
  }: {
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
  }) => (
    <button
      onClick={onClick}
      className={`absolute left-3 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full 
      transition-all duration-300 ease-in-out z-10 ${
        isHovered ? 'opacity-100 translate-x-0 ' : 'opacity-0'
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
      className={`absolute right-3 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full 
      transition-all duration-300 ease-in-out z-10 ${
        isHovered ? 'opacity-100 translate-x-0' : 'opacity-0'
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
    responsive: [
      {
        breakpoint: 1024, // Tablets
        settings: {
          slidesToShow: 2.3,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 768, // Mobile Landscape
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          arrows: false, // Hide arrows for cleaner UI
        },
      },
      {
        breakpoint: 480, // Mobile Portrait
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false, // Hide arrows for small screens
        },
      },
    ],
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
              className="w-[27.5rem] h-[41.25rem] object-cover"
              loading="lazy"
            />

            <h2 className="text-sm font-bold mt-5">{slide.text}</h2>
            <p className="text-sm text-gray-500  font-bold mt-1">
              {slide.protext}
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
