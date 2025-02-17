/** @format */

'use client';

import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const ImageSlider = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const slides = [
    {
      url: '/images/home/hover1.jpg',
      hoverUrl: '/images/home/hover01.png',
      text: 'ALLYOUCANFIT X CAMILLE SPORTS BRA',
      protext: '€54,00',
    },
    {
      url: '/images/home/hover2.jpg',
      hoverUrl: '/images/home/hover02.png',
      text: 'ALLYOUCANFIT X VENUS SHORTS',
      protext: '€60,00',
    },
    {
      url: '/images/home/hover3.jpg',
      hoverUrl: '/images/home/hover03.png',
      text: 'ALLYOUCANFIT X NICOLE SHORTS BRA',
      protext: '€60,00',
    },
    {
      url: '/images/home/hover4.jpg',
      hoverUrl: '/images/home/hover04.png',
      text: 'ALLYOUCANFIT X KELLY SHORTS BRA',
      protext: '€60,00',
    },
    {
      url: '/images/home/hover5.jpg',
      hoverUrl: '/images/home/hover05.png',
      text: 'ALLYOUCANFIT X LYLA BODYSUIT',
      protext: '€60,00',
    },
    {
      url: '/images/home/hover6.jpg',
      hoverUrl: '/images/home/hover06.png',
      text: 'ALLYOUCANFIT X SERENA MESH LEGGINGS',
      protext: '€53,00',
    },
    {
      url: '/images/home/hover7.jpg',
      hoverUrl: '/images/home/hover07.png',
      text: 'ALLYOUCANFIT X VENUS LEGGINGS',
      protext: '€60,00',
    },
    {
      url: '/images/home/hover8.jpg',
      hoverUrl: '/images/home/hover08.png',
      text: 'ALLYOUCANFIT X WHITE ECO HOODIE',
      protext: '€60,00',
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
        isHovered ? 'opacity-100 translate-x-0' : 'opacity-0'
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
    infinite: false,
    speed: 500,
    slidesToShow: 2.1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div
      className="w-full mx-auto relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className="relative h-[45.438rem]"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img
              src={hoveredIndex === index ? slide.hoverUrl : slide.url}
              alt={`Slide ${index + 1}`}
              className="w-[27.5rem] h-[41.25rem] object-cover transition-all duration-300"
              loading="lazy"
            />

            <h2 className="text-sm font-bold mt-5">{slide.text}</h2>
            <p className="text-sm text-gray-500 font-bold mt-1">
              {slide.protext}
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
