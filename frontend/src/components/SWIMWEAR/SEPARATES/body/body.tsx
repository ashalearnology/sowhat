/** @format */
"use client";
import { useEffect, useState } from "react";

const Separates_body = () => {
  const cart = [
    // {
    //   imag1:
    //     'https://sowhat.global/cdn/shop/files/CCVFG_1080x.png?v=1683545447',
    //   imag2:
    //     'https://sowhat.global/cdn/shop/files/CopyofIMG_7830_edited_1080x.jpg?v=1688381770',
    //   name: 'EMILY BLACK TIE UP BIKINI TOP',
    //   price: '€33,00 ',
    // },
    // {
    //   imag1: 'https://sowhat.global/cdn/shop/files/ZX11_1080x.png?v=1684225008',
    //   imag2: 'https://sowhat.global/cdn/shop/files/zx49_1080x.png?v=1684225008',
    //   name: 'CHRISTY LILAC BRALETTE x BIKINI TOP',
    //   price: '€33,00',
    // },
    // {
    //   imag1: 'https://sowhat.global/cdn/shop/files/FVBB_1080x.png?v=1683545425',
    //   imag2:
    //     'https://sowhat.global/cdn/shop/files/DSC00323copy_1080x.jpg?v=1683545425',
    //   name: 'EMILY LOLLIPOP TIE UP BIKINI TOP',
    //   price: '€33,00 ',
    // },
    // {
    //   imag1:
    //     'https://sowhat.global/cdn/shop/files/VGNNN_1080x.png?v=1683540438',
    //   imag2:
    //     'https://sowhat.global/cdn/shop/files/dthhnj_1080x.png?v=1688382848',
    //   name: 'EMILY BLACK TIE UP BIKINI BOTTOM',
    //   price: '€33,00 ',
    // },
    // {
    //   imag1: 'https://sowhat.global/cdn/shop/files/ZX12_1080x.png?v=1683526353',
    //   imag2:
    //     'https://sowhat.global/cdn/shop/files/zx50_72c4886c-8f57-4ec5-bbab-19e0eb9a5387_1080x.png?v=1683526353',
    //   name: 'CHRISTY LILAC BIKINI BOTTOM',
    //   price: '€33,00 ',
    // },
    // {
    //   imag1: 'https://sowhat.global/cdn/shop/files/zx33_1080x.png?v=1683526205',
    //   imag2:
    //     'https://sowhat.global/cdn/shop/files/DSC00364copy_edited4_413be067-c956-4718-aaa3-eb5b2bf957f4_1080x.jpg?v=1683526205',
    //   name: 'EMILY LOLLIPOP TIE UP BIKINI BOTTOM ',
    //   price: '€33,00 ',
    // },
    // {
    //   imag1:
    //     'https://sowhat.global/cdn/shop/files/DGFHH_1080x.png?v=1683545402',
    //   imag2:
    //     'https://sowhat.global/cdn/shop/files/DSC00428copy_Large_776e904b-59eb-4178-a06c-6dabb8c4aa0e_1080x.jpg?v=1683545402',
    //   name: 'EMILY LIME TIE UP BIKINI TOP',
    //   price: '€33,00 ',
    // },
    // {
    //   imag1: 'https://sowhat.global/cdn/shop/files/ZX5_1080x.png?v=1687340400',
    //   imag2: 'https://sowhat.global/cdn/shop/files/zx47_1080x.png?v=1687340400',
    //   name: 'CHRISTY BLACK BRALETTE x BIKINI TOP',
    //   price: '€33,00 ',
    // },
    // {
    //   imag1: 'https://sowhat.global/cdn/shop/files/CGHH_1080x.png?v=1683545379',
    //   imag2:
    //     'https://sowhat.global/cdn/shop/files/DSC00399copy_editedFF_918178e9-f1dc-4f13-8959-c042a319ff77_1080x.jpg?v=1683545379',
    //   name: 'EMILY LILAC TIE UP BIKINI TOP',
    //   price: '€33,00 ',
    // },
    // {
    //   imag1: 'https://sowhat.global/cdn/shop/files/zx26_1080x.png?v=1683526230',
    //   imag2:
    //     'https://sowhat.global/cdn/shop/files/DSC00399copy_editedR_30e86f91-ec6c-4aea-9455-eefa49886160_1080x.jpg?v=1683526230',
    //   name: 'EMILY LIME TIE UP BIKINI BOTTOM',
    //   price: '€33,00 ',
    // },
    // {
    //   imag1:
    //     'https://sowhat.global/cdn/shop/files/ZX4_fdc0ff3b-cbbe-4e99-90ae-9834e495f259_1080x.png?v=1683538812',
    //   imag2:
    //     'https://sowhat.global/cdn/shop/files/zx47_1f0067bb-8ad9-40f4-90b9-c670fbe06c4a_1080x.png?v=1683538812',
    //   name: 'CHRISTY BLACK BIKINI BOTTOM',
    //   price: '€33,00 ',
    // },
    // {
    //   imag1: 'https://sowhat.global/cdn/shop/files/zx42_1080x.png?v=1683526168',
    //   imag2:
    //     'https://sowhat.global/cdn/shop/files/DSC00295_b6095cb2-0fae-4c7f-97fe-9eae58ed76c3_1080x.jpg?v=1683526168',
    //   name: 'EMILY LILAC TIE UP BIKINI BOTTOM',
    //   price: '€33,00 ',
    // },
    {
      imag1: "/images/sustance/portrait1.jpg",
      // 'https://sowhat.global/cdn/shop/files/DSC0909_Custom_a20ce5ed-b967-4b21-af14-37b17ba9f2ef_1080x.jpg?v=1686311358',
      imag2: "/images/sustance/portrait2.jpg",
      // 'https://sowhat.global/cdn/shop/files/a4_1080x.png?v=1687343913',
      name: "Allyoucanfit X Nora High Waisted Shorts",
      price: "€52,00 ",
    },
    {
      imag1: "/images/sustance/portrait3.jpg",
      // 'https://sowhat.global/cdn/shop/files/SCARLET-shorts1_1080x.jpg?v=1721890495',
      imag2: "/images/sustance/portrait4.jpg",
      // 'https://sowhat.global/cdn/shop/files/SCARLET-shorts2_1080x.jpg?v=1721890495',
      name: "ALICIA SHORTS IN SCARLET RED",
      price: "€60,00 ",
    },
    {
      imag1: "/images/sustance/SUSTANCEIMG.jpg",
      // 'https://sowhat.global/cdn/shop/files/swimwear02403_1_Large_c9d391a7-2d91-4042-8aae-e9b2913f94dd_1080x.jpg?v=1683800112',
      imag2: "/images/sustance/portrait2.jpg",
      // 'https://sowhat.global/cdn/shop/files/aw1_1_Custom_1080x.png?v=1684482333',
      name: "VENUS HIGH WAISTED SHORTS",
      price: "€60,00 ",
    },
    {
      imag1: "/images/readmore2/image2.webp",
      // 'https://sowhat.global/cdn/shop/files/IMG_4790_Custom_1080x.jpg?v=1687340274',
      imag2: "/images/readmore2/readmore4.webp",
      // 'https://sowhat.global/cdn/shop/files/qw9_Custom_1080x.png?v=1687340274',
      name: "ALLYOUCANFIT X VENUS SHORTS",
      price: "€60,00 ",
    },
    {
      imag1: "/images/readmore2/readmore5.webp",
      // 'https://sowhat.global/cdn/shop/files/aq15_Large_17eaea97-3a31-42d3-83f5-216623a77301_1080x.png?v=1683800141',
      imag2: "/images/readmore2/readmore6.webp",
      // 'https://sowhat.global/cdn/shop/files/fgggg_Custom_1080x.png?v=1684491926',
      name: "VENUS POP HIGH WAISTED SHORTS",
      price: "€60,00 ",
    },
    {
      imag1: "/images/home/hover1.jpg",
      // 'https://sowhat.global/cdn/shop/products/all-over-print-yoga-shorts-white-left-front-6305e495536ad_1080x.jpg?v=1662966406',
      imag2: "/images/home/hover01.png",
      // 'https://sowhat.global/cdn/shop/products/IMG_3015_1080x.jpg?v=1662966406',
      name: "Flora High Waisted Shorts",
      price: "    €52,00-€37,00 ",
    },
    {
      imag1: "/images/home/hover4.jpg",
      // 'https://sowhat.global/cdn/shop/files/OLIVE-AliShorts3_1080x.jpg?v=1721890457',
      imag2: "/images/home/hover04.png",
      // 'https://sowhat.global/cdn/shop/files/OLIVE-AliShorts4_1080x.jpg?v=1721890457',
      name: "ALICIA SHORTS IN OLIVE GREEN",
      price: "€60,00 ",
    },
    {
      imag1: "/images/home/hover7.jpg",
      // 'https://sowhat.global/cdn/shop/products/all-over-print-yoga-shorts-white-front-6305e6a00096e_1080x.jpg?v=1662828891',
      imag2: "/images/home/hover08.png",
      // 'https://sowhat.global/cdn/shop/products/all-over-print-yoga-shorts-white-left-front-6305e6a001b99_1080x.jpg?v=1663692184',
      name: "Cami High Waisted Shorts",
      price: "    €52,00-€37,00 ",
    },
    {
      imag1: "/images/home/hover8.jpg",
      // 'https://sowhat.global/cdn/shop/products/all-over-print-yoga-shorts-white-left-front-6305e735eb43b_1080x.jpg?v=1663048383',
      imag2: "/images/home/hover01.png",
      // 'https://sowhat.global/cdn/shop/products/SOWHATAVAAW222_1_1080x.jpg?v=1663686096',
      name: "Ava High Waisted Shorts",
      price: "€52.00-€37.00",
    },
    {
      imag1: "/images/readmore2/readmore3.webp",
      // 'https://sowhat.global/cdn/shop/files/BLACK-AliShorts3_1080x.jpg?v=1721890506',
      imag2: "/images/home/hover1.jpg",
      // 'https://sowhat.global/cdn/shop/files/BLACK-AliShorts4_1080x.jpg?v=1721890506',
      name: "ALICIA SHORTS IN BLACK",
      price: "€60,00 ",
    },
    {
      imag1: "/images/home/hover8.jpg",
      // 'https://sowhat.global/cdn/shop/products/all-over-print-yoga-shorts-white-left-front-6305e7b85035f_1080x.jpg?v=1662968033',
      imag2: "/images/home/hover05.png",
      // 'https://sowhat.global/cdn/shop/products/IMG_3066_1080x.jpg?v=1662968033',
      name: "Tyra High Waisted Shorts",
      price: "€52,00-€37,00",
    },
    {
      imag1: "/images/home/slider1.jpg",
      // 'https://sowhat.global/cdn/shop/products/all-over-print-yoga-shorts-white-front-6305f73e1ac77_1080x.jpg?v=1663048472',
      imag2: "/images/readmore2/readmore5.webp",
      // 'https://sowhat.global/cdn/shop/products/all-over-print-yoga-shorts-white-back-6305f73e1ba23_1080x.jpg?v=1663048472',
      name: "Paola High Waisted Shorts",
      price: "    €52,00-€37,00 ",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const coursePerPage = 6;
  const totalPages = Math.ceil(cart.length / coursePerPage);

  const indexOfLastCart = currentPage * coursePerPage;
  const indexOfFirstCart = indexOfLastCart - coursePerPage;
  const currentCart = cart.slice(indexOfFirstCart, indexOfLastCart);

  return (
    <div className="p-4 sm:px-8 sm:py-4  xl:w-3/4 overflow-hidden flex flex-col w-full">
      <div>
        <ul className="flex gap-6 max-lg:justify-center flex-wrap max-sm:w-full">
          {currentCart.map((item, index) => (
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
                ? "bg-black text-white"
                : "bg-gray-300 hover:bg-black hover:text-white text-gray-800"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Separates_body;
