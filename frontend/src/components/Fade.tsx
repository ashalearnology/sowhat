/** @format */
'use client';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const FadeTextSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    fade: true,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false,
    pauseOnHover: true,
  };

  const textSlides = [
    {
      title:
        '“Love the hearts multipurpose bralette. Really good for pilates, plus it is recycled.”',
      name: '—Sarah',
    },
    {
      title: `“I bought 2 solid leggings for the gym. Squat-proof! Also the material dries up very quickly.”`,
      name: '—Anna',
    },
    {
      title:
        '“Got plus size caramel compression leggings. It holds everything in place and is pretty stretchable & soft.”',
      name: '—Danielle',
    },
    {
      title:
        '“Ordered the recycled bikini in Blue Check. Loved it and ordered 2 more printed bikini sets!”',
      name: '—Nicole',
    },
  ];

  return (
    <div className="flex items-center justify-center h-[32.558rem]  text-[#1b1b1b]">
      <div className="w-full max-w-3xl text-center">
        <Slider {...settings}>
          {textSlides.map((text, index) => (
            <div key={index}>
              <h2 className="text-4xl font-bold opacity-0 animate-fadeIn">
                {text.title}
              </h2>
              <p className="mt-10 font-semibold">{text.name}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default FadeTextSlider;
