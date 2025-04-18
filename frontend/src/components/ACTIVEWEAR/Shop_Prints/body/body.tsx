/** @format */
'use client';
import { useState } from 'react';

const Shop_body = () => {
  const Cartsdetails = [
    {
      imag1: '/images/home/trending7.jpg',
      // 'https://sowhat.global/cdn/shop/files/IMG_4798_Custom_0a5d9abc-8bb3-45a8-a959-1e25a9d0d01c_1080x.jpg?v=1687339583',
      imag2: '/images/home/hover1.jpg',
      // 'https://sowhat.global/cdn/shop/files/HJKK_1080x.png?v=1687339583',
      name: 'Allyoucanfit X Nora Recycled Bralette',
      price: '€48,00 ',
    },
    {
      imag1: '/images/readmore2/readmore6.webp',
      // 'https://sowhat.global/cdn/shop/files/IMG_4795_Custom_1080x.jpg?v=1686311163',
      imag2: '/images/home/hover01.png',
      // 'https://sowhat.global/cdn/shop/products/a5_1080x.jpg?v=1686311163',
      name: 'Allyoucanfit X Nora Sports Bra',
      price: '€73,00 ',
    },
    {
      imag1: '/images/readmore2/readmore4.webp',
      // 'https://sowhat.global/cdn/shop/files/DSC0766_Custom_1080x.jpg?v=1686311431',
      imag2: '/images/home/hover6.jpg',
      // 'https://sowhat.global/cdn/shop/products/b19_1080x.jpg?v=1686311431',
      name: 'Allyoucanfit X Nora Recycled Long-sleeve Sports Top',
      price: '€85,00 ',
    },
    {
      imag1: '/images/home/hover3.jpg',
      // 'https://sowhat.global/cdn/shop/files/yyuj_37ec6e60-b7d1-4e63-be15-d93383462659_1080x.jpg?v=1686311280',
      imag2: '/images/readmore2/readmore4.webp',
      // 'https://sowhat.global/cdn/shop/products/all-over-print-yoga-leggings-white-front-6433ed857dbac_1080x.jpg?v=1686311280',
      name: 'Allyoucanfit X Nora High Waisted Leggings',
      price: '€65,00 ',
    },
    {
      imag1: '/images/home/hover8.jpg',
      // 'https://sowhat.global/cdn/shop/files/DSC0909_Custom_a20ce5ed-b967-4b21-af14-37b17ba9f2ef_1080x.jpg?v=1686311358',
      imag2: '/images/home/hover05.png',
      // 'https://sowhat.global/cdn/shop/files/a4_1080x.png?v=1687343913',
      name: 'Allyoucanfit X Nora High Waisted Shorts',
      price: '€52,00 ',
    },
    {
      imag1: '/images/sustance/portrait1.jpg',
      // 'https://sowhat.global/cdn/shop/files/DSC0766_Custom_1080x.jpg?v=1686311431',
      imag2: '/images/home/hover1.jpg',
      // 'https://sowhat.global/cdn/shop/products/b19_1080x.jpg?v=1686311431',
      name: 'Allyoucanfit X Nora Hoodie',
      price: '€85,00 ',
    },
    {
      imag1: '/images/sustance/portrait4.jpg',
      // 'https://sowhat.global/cdn/shop/products/fhnn_1080x.jpg?v=1669011290',
      imag2: '/images/home/hover07.png',
      // 'https://sowhat.global/cdn/shop/products/all-over-print-recycled-long-sleeve-crop-top-white-front-637b0943b9539_1080x.jpg?v=1669011290',
      name: 'Candy Hearts Recycled Long-Sleeve Sports Top',
      price: '€85,00-€48,00 ',
    },
    {
      imag1: '/images/home/hover1.jpg',
      // 'https://sowhat.global/cdn/shop/products/all-over-print-yoga-shorts-white-front-6305f835cc376_1080x.jpg?v=1665400806',
      imag2: '/images/home/hover04.png',
      // 'https://sowhat.global/cdn/shop/products/all-over-print-yoga-shorts-white-left-front-6305f835cdad4_1080x.jpg?v=1665400806',
      name: 'Candy Hearts High Waisted Shorts',
      price: '€52,00-€37,00 ',
    },
    {
      imag1: '/images/home/hover3.jpg',
      // 'https://sowhat.global/cdn/shop/products/67_1080x.jpg?v=1663074730',
      imag2: '/images/sustance/portrait4.jpg',
      // 'https://sowhat.global/cdn/shop/products/all-over-print-recycled-padded-bikini-top-white-front-62eca7fd94dc3_1080x.jpg?v=1663074730',
      name: 'Candy Hearts Recycled Bralette',
      price: '    €48,00-€31,00',
    },
    // {same}
    {
      imag1: '/images/sustance/portrait2.jpg',
      // 'https://sowhat.global/cdn/shop/products/all-over-print-yoga-leggings-white-front-62eca58b081dc_1080x.jpg?v=1659676054',
      imag2: '/images/home/hover04.png',
      // 'https://sowhat.global/cdn/shop/products/all-over-print-yoga-leggings-white-left-62eca58b09d04_1080x.jpg?v=1659676056',
      name: 'Candy Hearts High-Waisted Leggings',
      price: '€65,00-€48,00',
    },
    {
      imag1: '/images/sustance/SUSTANCEIMG.jpg',
      // 'https://sowhat.global/cdn/shop/products/58_1080x.jpg?v=1663074703',
      imag2: '/images/sustance/portrait1.jpg',
      // 'https://sowhat.global/cdn/shop/products/all-over-print-longline-sports-bra-white-front-62eca660bf7bc_1080x.jpg?v=1663074703',
      name: 'Candy Hearts Sports Bra',
      price: '€73,00-€54,00',
    },
    {
      imag1: '/images/home/hover1.jpg',
      // 'https://sowhat.global/cdn/shop/products/all-over-print-plus-size-leggings-white-front-62eca732862e4_1080x.jpg?v=1659676476',
      imag2: '/images/home/hover01.png',
      // 'https://sowhat.global/cdn/shop/products/all-over-print-plus-size-leggings-white-back-62eca732875d1_1080x.jpg?v=1659676478',
      name: 'Candy Hearts High Waisted Plus Size Leggings',
      price: '€65,00-€48,00',
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

export default Shop_body;
