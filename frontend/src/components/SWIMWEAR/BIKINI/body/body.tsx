/** @format */
'use client';
import { useState } from 'react';

const Bikine_body = () => {
  const Cartsdetails = [
    // {
    //   imag1:
    //     'https://sowhat.global/cdn/shop/files/zx22_616c554a-cb48-4f30-8ea8-0c66dfdb22be_1080x.png?v=1683530324',
    //   imag2:
    //     'https://sowhat.global/cdn/shop/files/zx48_51921bc5-64e7-447f-a15a-17995a8410e6_1080x.jpg?v=1683530324',
    //   name: 'CHRISTY LOLLIPOP BIKINI SET',
    //   price: '€59.00',
    // },
    // {
    //   imag1:
    //     'https://sowhat.global/cdn/shop/products/all-over-print-recycled-high-waisted-bikini-white-front-62ecca9e490e9_1080x.jpg?v=1659685625',
    //   imag2:
    //     'https://sowhat.global/cdn/shop/products/all-over-print-recycled-high-waisted-bikini-white-front-62eccad15ef40_1080x.jpg?v=1659685625',
    //   name: 'Margaux Recycled High-Waisted Bikini',
    //   price: '    €73,00-€48,75 ',
    // },
    // {
    //   imag1: 'https://sowhat.global/cdn/shop/files/zx30_1080x.png?v=1683526119',
    //   imag2: 'https://sowhat.global/cdn/shop/files/zx51_1080x.png?v=1683526119',
    //   name: 'EMILY LIME TIE UP BIKINI SET',
    //   price: '€59,00 ',
    // },
    // {
    //   imag1: 'https://sowhat.global/cdn/shop/files/ZX10_1080x.png?v=1683527957',
    //   imag2: 'https://sowhat.global/cdn/shop/files/bbn_1080x.jpg?v=1683527957',
    //   name: 'CHRISTY LILAC BIKINI SET',
    //   price: '€59,00 ',
    // },
    // {
    //   imag1:
    //     'https://sowhat.global/cdn/shop/products/all-over-print-recycled-high-waisted-bikini-white-front-62ec9c8343093_1080x.jpg?v=1659673837',
    //   imag2:
    //     'https://sowhat.global/cdn/shop/products/all-over-print-recycled-high-waisted-bikini-white-front-62ec9cc8e32ab_1080x.jpg?v=1659673837',
    //   name: 'Blue Check Recycled High-Waisted Bikini',
    //   price: '    €73,00-€48,75 ',
    // },
    // {
    //   imag1:
    //     'https://sowhat.global/cdn/shop/files/Bikini03_1_1080x.png?v=1683540655',
    //   imag2:
    //     'https://sowhat.global/cdn/shop/files/dthhnj_5d532ad3-18dc-4131-94bd-da6fd2c023de_1080x.png?v=1688382924',
    //   name: 'EMILY BLACK TIE UP BIKINI SET',
    //   price: '€59,00 ',
    // },
    // {
    //   imag1:
    //     'https://sowhat.global/cdn/shop/files/gvgbnn_1080x.png?v=1684224937',
    //   imag2:
    //     'https://sowhat.global/cdn/shop/files/DSC00216copy_1080x.jpg?v=1684224937',
    //   name: 'CHRISTY LIME BIKINI SET',
    //   price: '€59,00 ',
    // },
    // {
    //   imag1:
    //     'https://sowhat.global/cdn/shop/products/all-over-print-recycled-high-waisted-bikini-white-front-62eba8375386e_1080x.jpg?v=1659611426',
    //   imag2:
    //     'https://sowhat.global/cdn/shop/products/all-over-print-recycled-high-waisted-bikini-white-front-62eba87b3b1c5_1080x.jpg?v=1659611426',
    //   name: 'Lemon Recycled High-Waisted Bikini',
    //   price: '€73,00 -€48,75 ',
    // },
    // {
    //   imag1: 'https://sowhat.global/cdn/shop/files/zx38_1080x.png?v=1683526132',
    //   imag2:
    //     'https://sowhat.global/cdn/shop/files/DSC00295_1080x.jpg?v=1683526132https://sowhat.global/cdn/shop/files/DSC00295_1080x.jpg?v=1683526132',
    //   name: 'EMILY LILAC TIE UP BIKINI SET',
    //   price: '€59,00 ',
    // },

    // {
    //   imag1: 'https://sowhat.global/cdn/shop/files/ZX3_1080x.png?v=1683535919',
    //   imag2:
    //     'https://sowhat.global/cdn/shop/files/zx51_ca1cb957-c9b4-454d-8190-3a413b72415c_1080x.jpg?v=1683535919',
    //   name: 'CHRISTY BLACK BIKINI SET',
    //   price: '€59,00 ',
    // },
    // {
    //   imag1:
    //     'https://sowhat.global/cdn/shop/products/all-over-print-recycled-high-waisted-bikini-white-front-617b84ae56ada_1_1080x.jpg?v=1640521095',
    //   imag2:
    //     'https://sowhat.global/cdn/shop/files/all-over-print-recycled-high-waisted-bikini-white-front-64802ba5726ff_1080x.jpg?v=1686121393',
    //   name: 'Fuchsia Pink Recycled High-Waisted Bikini',
    //   price: '    €73,00-€48,75 ',
    // },
    // {
    //   imag1: 'https://sowhat.global/cdn/shop/files/zx34_1080x.png?v=1683526140',
    //   imag2:
    //     'https://sowhat.global/cdn/shop/files/DSC00289_1080x.jpg?v=1683526140',
    //   name: 'EMILY LOLLIPOP TIE UP BIKINI SET',
    //   price: '€59,00',
    // },
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
  const coursePerPage = 6;
  const totalPages = Math.ceil(Cartsdetails.length / coursePerPage);
  const indexOfLastCart = currentPage * coursePerPage;
  const indexOfFirstCart = indexOfLastCart - coursePerPage;
  const Cartsdetail = Cartsdetails.slice(indexOfFirstCart, indexOfLastCart);

  return (
    <div className="p-4 sm:px-8 sm:py-4  xl:w-3/4 overflow-hidden flex flex-col w-full">
      <div>
        <ul className="flex gap-6 max-lg:justify-center flex-wrap max-sm:w-full">
          {Cartsdetail.map((item, index) => (
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
            className={`w-12 h-12 rounded-full transition-all ${
              currentPage === index + 1
                ? 'bg-black text-white'
                : 'bg-gray-300 hover:bg-black hover:text-white text-gray-800'
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Bikine_body;
