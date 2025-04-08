/** @format */
'use client';
import { use, useState } from 'react';

const Leggings_carts = () => {
  const Cartsdetails = [
    // {
    //   imag1:
    //     'https://sowhat.global/cdn/shop/files/ghnn_2be440c0-a1e3-4a0f-a233-d84eda0e82d4_1080x.jpg?v=1683798614',
    //   imag2:
    //     'https://sowhat.global/cdn/shop/files/aw5_1_Custom_ca5f3bf6-f4db-43e5-b07a-343f565bee97_1080x.png?v=1684470164',
    //   name: 'VENUS HIGH WAISTED LEGGINGS',
    //   price: '€60,00 ',
    // },
    // {
    //   imag1:
    //     'https://sowhat.global/cdn/shop/files/swimwear06793_1_Large_19abd47e-ff4b-4090-a646-f42acf90291a_1080x.png?v=1683798656',
    //   imag2: 'https://sowhat.global/cdn/shop/files/aqw5_1080x.png?v=1684482971',
    //   name: 'SERENA MESH HIGH WAISTED LEGGINGS',
    //   price: '€53,00 ',
    // },
    // {
    //   imag1: 'https://sowhat.global/cdn/shop/files/ac8_1080x.png?v=1683628975',
    //   imag2:
    //     'https://sowhat.global/cdn/shop/files/fghjjjk_Custom_1080x.png?v=1684491796',
    //   name: 'VENUS POP LEGGINGS',
    //   price: '€60,00 ',
    // },
    // {
    //   imag1:
    //     'https://sowhat.global/cdn/shop/files/yyuj_37ec6e60-b7d1-4e63-be15-d93383462659_1080x.jpg?v=1686311280',
    //   imag2:
    //     'https://sowhat.global/cdn/shop/products/all-over-print-yoga-leggings-white-front-6433ed857dbac_1080x.jpg?v=1686311280',
    //   name: 'Allyoucanfit X Nora High Waisted Leggings',
    //   price: '€65,00 ',
    // },
    // {
    //   imag1:
    //     'https://sowhat.global/cdn/shop/files/SCARLET-serena4_1080x.jpg?v=1721890749',
    //   imag2:
    //     'https://sowhat.global/cdn/shop/files/SCARLET-serena1_6b143da1-604c-4803-be6c-06634c5b050a_1080x.jpg?v=1721890749',
    //   name: 'ALICIA LEGGINGS IN SCARLET RED',
    //   price: '€62,00 ',
    // },
    // {
    //   imag1:
    //     'https://sowhat.global/cdn/shop/files/IMG_4794_Custom_1080x.jpg?v=1686307744',
    //   imag2:
    //     'https://sowhat.global/cdn/shop/files/aqw5_1_1080x.png?v=1686307744',
    //   name: 'ALLYOUCANFIT X SERENA MESH LEGGINGS',
    //   price: '€53,00 ',
    // },
    // {
    //   imag1:
    //     'https://sowhat.global/cdn/shop/files/DSC0729_Custom_9576e350-6c32-490e-894b-0fb2b9ee8ed9_1080x.jpg?v=1686308246',
    //   imag2:
    //     'https://sowhat.global/cdn/shop/files/qw8_Custom_1080x.png?v=1686308246',
    //   name: 'ALLYOUCANFIT X VENUS LEGGINGS',
    //   price: '€60,00 ',
    // },
    // {
    //   imag1:
    //     'https://sowhat.global/cdn/shop/products/all-over-print-yoga-leggings-white-front-62eb7c4ea4d25_1080x.jpg?v=1659599960',
    //   imag2:
    //     'https://sowhat.global/cdn/shop/products/all-over-print-yoga-leggings-white-left-62eb7c4ea62b4_1080x.jpg?v=1659599961',
    //   name: 'Flora High Waisted Leggings',
    //   price: '€65,00-€48,00 ',
    // },
    // {
    //   imag1:
    //     'https://sowhat.global/cdn/shop/products/all-over-print-crossover-leggings-with-pockets-white-front-62eb854f72940_1080x.jpg?v=1659602734',
    //   imag2:
    //     'https://sowhat.global/cdn/shop/products/all-over-print-crossover-leggings-with-pockets-white-front-62eb8666afd74_1080x.jpg?v=1659602734',
    //   name: 'Flora Crossover leggings with pockets',
    //   price: '€72,00-€54,00',
    // },
    // // {same}
    // {
    //   imag1:
    //     'https://sowhat.global/cdn/shop/products/all-over-print-plus-size-leggings-white-front-62f0c87e0b8fe_1080x.jpg?v=1659947144',
    //   imag2:
    //     'https://sowhat.global/cdn/shop/products/all-over-print-plus-size-leggings-white-back-62f0c87e0c677_1080x.jpg?v=1659947145',
    //   name: 'Flora Plus Size High Waisted Leggings',
    //   price: '€65,00-€48,00',
    // },
    // {
    //   imag1:
    //     'https://sowhat.global/cdn/shop/products/all-over-print-yoga-leggings-white-front-63469bf5e890f_1080x.jpg?v=1665571851',
    //   imag2:
    //     'https://sowhat.global/cdn/shop/products/Screenshot2022-09-10at10.48.24PM_1080x.png?v=1665571851',
    //   name: 'Paola High Waisted Leggings',
    //   price: '€65,00-€48,00 ',
    // },
    // {
    //   imag1:
    //     'https://sowhat.global/cdn/shop/products/all-over-print-plus-size-leggings-white-front-62ee092419107_1080x.jpg?v=1659767086',
    //   imag2:
    //     'https://sowhat.global/cdn/shop/products/all-over-print-plus-size-leggings-white-back-62ee09241a466_1080x.jpg?v=1659767087',
    //   name: 'Paola High Waisted Plus Size Leggings',
    //   price: '€65,00-€48,00 ',
    // },
    {
      imag1: '/images/home/slider1.jpg',
      // 'https://sowhat.global/cdn/shop/files/swimwear07932_1080x.jpg?v=1683629092',
      imag2: '/images/home/slider2.jpg',
      // 'https://sowhat.global/cdn/shop/files/Untitled_43_Custom_1080x.png?v=1684483435',
      name: 'CAMILLE SPORTS BRA',
      price: '€60.00',
    },
    {
      imag1: '/images/home/slider3.jpg',
      // 'https://sowhat.global/cdn/shop/files/TEAL-vneck7_1080x.jpg?v=1721891627',
      imag2: '/images/home/slider4.jpg',
      // 'https://sowhat.global/cdn/shop/files/TEAL-vneck2_1080x.jpg?v=1721891627',
      name: 'LANA SPORTS BRA IN TEAL BLUE',
      price: '€60.00',
    },
    {
      imag1: '/images/home/hover8.jpg',
      // 'https://sowhat.global/cdn/shop/files/SCARLET-kelly6_1080x.jpg?v=1721891432',
      imag2: '/images/home/hover08.png',
      // 'https://sowhat.global/cdn/shop/files/SCARLET-kelly2_1080x.jpg?v=1721891432',
      name: 'NATALIA SPORTS BRA IN SCARLET RED',
      price: '€65,00',
    },
    {
      imag1: '/images/home/trending1.jpg',
      // 'https://sowhat.global/cdn/shop/files/1_631dd523-9457-4103-b8bf-688ffe845db3_1080x.jpg?v=1721891663',
      imag2: '/images/home/trending2.jpg',
      // 'https://sowhat.global/cdn/shop/files/2_1080x.jpg?v=1721891663',
      name: 'VALERIA SPORTS BRA ',
      price: '€63,00',
    },
    {
      imag1: '/images/home/hover8.jpg',
      // 'https://sowhat.global/cdn/shop/files/blueback_1080x.png?v=1721891585',
      imag2: '/images/home/hover08.png',
      // 'https://sowhat.global/cdn/shop/files/bluefront1_1080x.png?v=1721891585',
      name: 'LANA SPORTS BRA IN LAPIS BLUE',
      price: '€60,00 ',
    },
    {
      imag1: '/images/home/hover2.jpg',
      // 'https://sowhat.global/cdn/shop/files/swimwear05682_Large_8a5ebcfa-9a9f-4e7a-80fa-27c25060e254_1080x.jpg?v=1683327863',
      imag2: '/images/home/hover02.png',
      // 'https://sowhat.global/cdn/shop/files/mockupposition_Custom_1080x.png?v=1684470765',
      name: 'NICOLE SPORTS BRA ',
      price: '€60,00 ',
    },
    {
      imag1: '/images/home/trending4.jpg',
      // 'https://sowhat.global/cdn/shop/files/aq18_Large_b1d7d821-16cc-4bc4-b729-75fcf6296f05_1080x.jpg?v=1683787819',
      imag2: '/images/home/trending5.jpg',
      // 'https://sowhat.global/cdn/shop/files/Untitled_43_1_Custom_1080x.png?v=1684483011',
      name: 'CAMILLE POP SPORTS BRA',
      price: '€60,00 ',
    },
    {
      imag1: '/images/home/trending6.png',
      // 'https://sowhat.global/cdn/shop/files/IMG_4798_Custom_0a5d9abc-8bb3-45a8-a959-1e25a9d0d01c_1080x.jpg?v=1687339583',
      imag2: '/images/home/trending7.jpg',
      // 'https://sowhat.global/cdn/shop/files/HJKK_1080x.png?v=1687339583',
      name: 'Allyoucanfit X Nora Recycled Bralette',
      price: '€48,00 ',
    },
    {
      imag1: '/images/home/trending1.jpg',
      //  'https://sowhat.global/cdn/shop/files/FVBB_1080x.png?v=1683545425',
      imag2: '/images/home/trending4.jpg',
      // 'https://sowhat.global/cdn/shop/files/DSC00323copy_1080x.jpg?v=1683545425',
      name: 'EMILY LOLLIPOP TIE UP BIKINI TOP',
      price: '€33,00 ',
    },
    {
      imag1: '/images/home/hover6.jpg',
      // 'https://sowhat.global/cdn/shop/files/BLUE-kelly1_1080x.jpg?v=1721891443',
      imag2: '/images/home/hover06.png',
      // 'https://sowhat.global/cdn/shop/files/preview_images/76c5017acecc49a18af4affa5d92211d.thumbnail.0000000000_1080x.jpg?v=1729327267',
      name: 'NATALIA SPORTS BRA IN LAPIS BLUE',
      price: '€65,00 ',
    },
    {
      imag1: '/images/home/trending3.png',
      // 'https://sowhat.global/cdn/shop/files/OLIVE-roundneckbra5_1080x.jpg?v=1721891526',
      imag2: '/images/home/trending4.jpg',
      // 'https://sowhat.global/cdn/shop/files/OLIVE-roundneckbra2_1080x.jpg?v=1721891526',
      name: 'DEBBIE SPORTS BRA IN OLIVE GREEN',
      price: '€60,00 ',
    },
    {
      imag1: '/images/home/hover4.jpg',
      // 'https://sowhat.global/cdn/shop/files/PINK-vneck4_1080x.jpg?v=1721891647',
      imag2: '/images/home/hover04.png',
      // 'https://sowhat.global/cdn/shop/files/PINK-vneck1_1080x.jpg?v=1721891647',
      name: 'LANA SPORTS BRA IN PINK ROSE',
      price: '€60,00 ',
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const prPage = 6;
  const totalPages = Math.ceil(Cartsdetails.length / prPage);
  const indexOfLastPage = currentPage * prPage;
  const indexOfFirstPage = indexOfLastPage - prPage;
  const currentCarts = Cartsdetails.slice(indexOfFirstPage, indexOfLastPage);

  return (
    <div className="p-4 sm:px-8 sm:py-4  xl:w-3/4 overflow-hidden flex flex-col w-full">
      <div>
        <ul className="flex gap-6 max-lg:justify-center flex-wrap max-sm:w-full">
          {currentCarts.map((item, index) => (
            <li
              key={index}
              className="w-[30%] flex-grow max-sm:w-full max-md:w-64 flex-shrink-0 "
            >
              <div className=" bg-gray-1s00 shadow-lg relative group rounded-lg sm:rounded-xl flex-wrap ">
                <img
                  src={item.imag1}
                  alt={item.name}
                  className="w-full object-cover h-full absolute top-0 transition-opacity duration-500 group-hover:opacity-0 rounded-lg sm:rounded-2xl"
                ></img>

                <img
                  src={item.imag2}
                  alt={item.name}
                  className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-100 rounded-xl"
                ></img>
              </div>
              <div className="flex flex-col gap-1 m-2 flex-wrap">
                <a href="/" className="text-lg font-semibold ">
                  {item.name}
                </a>
                <p className="">{item.price}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex gap-2">
        {[...Array(totalPages)].map((item, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`w-12 h-12 text-lg rounded-full ${
              currentPage === index + 1
                ? 'text-white  bg-black'
                : 'text-black bg-white hover:text-white border hover:bg-black'
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Leggings_carts;
