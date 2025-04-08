/** @format */
'use client';
import { useState } from 'react';

const Sportss_carts = () => {
  const Cartsdetails = [
    {
      imag1: '/images/sustance/portrait1.jpg',
      // 'https://sowhat.global/cdn/shop/files/DSC0909_Custom_a20ce5ed-b967-4b21-af14-37b17ba9f2ef_1080x.jpg?v=1686311358',
      imag2: '/images/sustance/portrait2.jpg',
      // 'https://sowhat.global/cdn/shop/files/a4_1080x.png?v=1687343913',
      name: 'Allyoucanfit X Nora High Waisted Shorts',
      price: '€52,00 ',
    },
    {
      imag1: '/images/sustance/portrait3.jpg',
      // 'https://sowhat.global/cdn/shop/files/SCARLET-shorts1_1080x.jpg?v=1721890495',
      imag2: '/images/sustance/portrait4.jpg',
      // 'https://sowhat.global/cdn/shop/files/SCARLET-shorts2_1080x.jpg?v=1721890495',
      name: 'ALICIA SHORTS IN SCARLET RED',
      price: '€60,00 ',
    },
    {
      imag1: '/images/sustance/SUSTANCEIMG.jpg',
      // 'https://sowhat.global/cdn/shop/files/swimwear02403_1_Large_c9d391a7-2d91-4042-8aae-e9b2913f94dd_1080x.jpg?v=1683800112',
      imag2: '/images/sustance/portrait2.jpg',
      // 'https://sowhat.global/cdn/shop/files/aw1_1_Custom_1080x.png?v=1684482333',
      name: 'VENUS HIGH WAISTED SHORTS',
      price: '€60,00 ',
    },
    {
      imag1: '/images/readmore2/image2.webp',
      // 'https://sowhat.global/cdn/shop/files/IMG_4790_Custom_1080x.jpg?v=1687340274',
      imag2: '/images/readmore2/readmore4.webp',
      // 'https://sowhat.global/cdn/shop/files/qw9_Custom_1080x.png?v=1687340274',
      name: 'ALLYOUCANFIT X VENUS SHORTS',
      price: '€60,00 ',
    },
    {
      imag1: '/images/readmore2/readmore5.webp',
      // 'https://sowhat.global/cdn/shop/files/aq15_Large_17eaea97-3a31-42d3-83f5-216623a77301_1080x.png?v=1683800141',
      imag2: '/images/readmore2/readmore6.webp',
      // 'https://sowhat.global/cdn/shop/files/fgggg_Custom_1080x.png?v=1684491926',
      name: 'VENUS POP HIGH WAISTED SHORTS',
      price: '€60,00 ',
    },
    {
      imag1: '/images/home/hover1.jpg',
      // 'https://sowhat.global/cdn/shop/products/all-over-print-yoga-shorts-white-left-front-6305e495536ad_1080x.jpg?v=1662966406',
      imag2: '/images/home/hover01.png',
      // 'https://sowhat.global/cdn/shop/products/IMG_3015_1080x.jpg?v=1662966406',
      name: 'Flora High Waisted Shorts',
      price: '    €52,00-€37,00 ',
    },
    {
      imag1: '/images/home/hover4.jpg',
      // 'https://sowhat.global/cdn/shop/files/OLIVE-AliShorts3_1080x.jpg?v=1721890457',
      imag2: '/images/home/hover04.png',
      // 'https://sowhat.global/cdn/shop/files/OLIVE-AliShorts4_1080x.jpg?v=1721890457',
      name: 'ALICIA SHORTS IN OLIVE GREEN',
      price: '€60,00 ',
    },
    {
      imag1: '/images/home/hover7.jpg',
      // 'https://sowhat.global/cdn/shop/products/all-over-print-yoga-shorts-white-front-6305e6a00096e_1080x.jpg?v=1662828891',
      imag2: '/images/home/hover08.png',
      // 'https://sowhat.global/cdn/shop/products/all-over-print-yoga-shorts-white-left-front-6305e6a001b99_1080x.jpg?v=1663692184',
      name: 'Cami High Waisted Shorts',
      price: '    €52,00-€37,00 ',
    },
    {
      imag1: '/images/home/hover8.jpg',
      // 'https://sowhat.global/cdn/shop/products/all-over-print-yoga-shorts-white-left-front-6305e735eb43b_1080x.jpg?v=1663048383',
      imag2: '/images/home/hover01.png',
      // 'https://sowhat.global/cdn/shop/products/SOWHATAVAAW222_1_1080x.jpg?v=1663686096',
      name: 'Ava High Waisted Shorts',
      price: '€52.00-€37.00',
    },
    {
      imag1: '/images/readmore2/readmore3.webp',
      // 'https://sowhat.global/cdn/shop/files/BLACK-AliShorts3_1080x.jpg?v=1721890506',
      imag2: '/images/home/hover1.jpg',
      // 'https://sowhat.global/cdn/shop/files/BLACK-AliShorts4_1080x.jpg?v=1721890506',
      name: 'ALICIA SHORTS IN BLACK',
      price: '€60,00 ',
    },
    {
      imag1: '/images/home/hover8.jpg',
      // 'https://sowhat.global/cdn/shop/products/all-over-print-yoga-shorts-white-left-front-6305e7b85035f_1080x.jpg?v=1662968033',
      imag2: '/images/home/hover05.png',
      // 'https://sowhat.global/cdn/shop/products/IMG_3066_1080x.jpg?v=1662968033',
      name: 'Tyra High Waisted Shorts',
      price: '€52,00-€37,00',
    },
    {
      imag1: '/images/home/slider1.jpg',
      // 'https://sowhat.global/cdn/shop/products/all-over-print-yoga-shorts-white-front-6305f73e1ac77_1080x.jpg?v=1663048472',
      imag2: '/images/readmore2/readmore5.webp',
      // 'https://sowhat.global/cdn/shop/products/all-over-print-yoga-shorts-white-back-6305f73e1ba23_1080x.jpg?v=1663048472',
      name: 'Paola High Waisted Shorts',
      price: '    €52,00-€37,00 ',
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

export default Sportss_carts;
