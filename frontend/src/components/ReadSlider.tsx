/** @format */

'use client';

import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import HoverButton from './HoverButton';

const ImageSlider = () => {
  const [isHovered, setIsHovered] = useState(false);

  const slides = [
    {
      url: '/images/home/read1.jpg',
      text: 'LETTURA DELLA SETTIMANA',
      head: 'MODA SOSTENIBLE - 5 CONSIGLI PER RICONOSCERE UN BRAND ETICO CHE FA TENDENZA',
      point:
        'Moda sostenibile e Fast Fashion; non è sempre facile riconoscerne le differenze. Ecco perché So What ha pensato a 5 consigli per uno shopping consapevole a prova di greenwashing!',
    },
    {
      url: '/images/home/read2.png',
      text: 'LETTURA DELLA SETTIMANA',
      head: 'COSTUMI DA BAGNO 2023: LE TENDENZE PIÙ CALDE!',
      point: `Scopri le novità swimwear più calde dell'estate 2023 grazie ai migliori trend selezionati, per te, da So What!`,
    },
    {
      url: '/images/home/read3.jpg',
      text: 'LETTURA DELLA SETTIMANA',
      head: 'PLASTICA E RICICLO, IL PRIMO PASSO VERSO UNA MODA SOSTENIBILE',
      point: `L'utilizzo della plastica è assai diffuso nel settore della moda per quanto riguarda la realizzazione di capi di abbigliamento.Il riutilizzo della plastica è però, per molte aziende, il primo, gr...`,
    },
    {
      url: '/images/home/read4.jpg',
      text: 'LETTURA DELLA SETTIMANA',
      head: 'COME SCEGLIERE IL GIUSTO ABBIGLIAMENTO SPORTIVO, TRA MATERIALI TECNICI E SOSTENIBILITÀ!',
      point: `Allenarsi con il giusto abbigliamento garantisce comfort, performance e...divertimento!So What ti aiuta a scegliere l'activewear adatto a te consigliandoti i materiali migliori, e sostenibili, per...`,
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
        isHovered ? 'opacity-100 ' : 'opacity-0 '
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
    slidesToShow: 2.2,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div
      className="w-full mx-auto  relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative  min-h-[51.875rem]">
            <img
              src={slide.url}
              alt={`Slide ${index + 1}, Slide ${index - 1}`}
              className="w-[41.881rem] h-[27.923rem] object-center"
              loading="lazy"
            />
            <div className="text-center tracking-wider mx-auto flex flex-col items-center gap-4	py-14">
              <h1 className="text-xs  font-bold">{slide.text}</h1>
              <h2 className="text-3xl font-bold tracking-widest max-w-[31.25rem]">
                {slide.head}
              </h2>
              <h1 className="mb-4 tracking-wider	font-bold max-w-[31.25rem]">
                {slide.point}
              </h1>
              <div className="flex items-center">
                <button className="relative h-[50px] z-99 w-32 rounded-full overflow-hidden border border-red-600 bg-transparent text-red-600  transition-all before:absolute before:left-0 before:right-0 before:top-0 before:h-0 before:w-full before:bg-red-600 before:duration-300 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0 after:w-full after:bg-red-600 after:duration-300 hover:text-[#E3F54B] hover:shadow-green-900 hover:before:h-2/4 hover:after:h-2/4">
                  <span className="relative z-10 font-bold">SHOP NOW</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
