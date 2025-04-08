/** @format */
'use client';
import { useState } from 'react';

const Pop_gelato_body = () => {
  const Cartsdetails = [
    // {
    //   imag1: 'https://sowhat.global/cdn/shop/files/MNG1_1080x.png?v=1683531800',
    //   imag2:
    //     'https://sowhat.global/cdn/shop/files/DSC00168copy-1_Large_985cd6bd-7e7b-49aa-9a8e-624cb5186357_1080x.jpg?v=1683531800',
    //   name: 'CINDY LILAC SWIMSUIT',
    //   price: '€48,00 ',
    // },
    // {
    //   imag1: 'https://sowhat.global/cdn/shop/files/zx38_1080x.png?v=1683526132',
    //   imag2:
    //     'https://sowhat.global/cdn/shop/files/DSC00295_1080x.jpg?v=1683526132',
    //   name: 'EMILY LILAC TIE UP BIKINI SET',
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
    //     'https://sowhat.global/cdn/shop/files/FGGBG_1080x.png?v=1683540199',
    //   imag2:
    //     'https://sowhat.global/cdn/shop/files/94ED7185-22B8-4C3C-B697-82195AF96A90_1080x.png?v=1688375073',
    //   name: 'CINDY LIME SWIMSUIT',
    //   price: '€48,00 ',
    // },
    // {
    //   imag1: 'https://sowhat.global/cdn/shop/files/zx30_1080x.png?v=1683526119',
    //   imag2: 'https://sowhat.global/cdn/shop/files/zx51_1080x.png?v=1683526119',
    //   name: 'EMILY LIME TIE UP BIKINI SET',
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
    //   imag1: 'https://sowhat.global/cdn/shop/files/MNG6_1080x.png?v=1683531749',
    //   imag2:
    //     'https://sowhat.global/cdn/shop/files/B1119652-330C-485B-A89A-43AFA5961DF5_jpeg_1080x.jpg?v=1688376570',
    //   name: 'CINDY LOLLIPOP SWIMSUIT',
    //   price: '€48,00 ',
    // },
    // {
    //   imag1: 'https://sowhat.global/cdn/shop/files/zx34_1080x.png?v=1683526140',
    //   imag2:
    //     'https://sowhat.global/cdn/shop/files/DSC00289_1080x.jpg?v=1683526140',
    //   name: 'EMILY LOLLIPOP TIE UP BIKINI SET',
    //   price: '€59,00 ',
    // },
    // {
    //   imag1:
    //     'https://sowhat.global/cdn/shop/files/zx22_616c554a-cb48-4f30-8ea8-0c66dfdb22be_1080x.png?v=1683530324',
    //   imag2:
    //     'https://sowhat.global/cdn/shop/files/zx48_51921bc5-64e7-447f-a15a-17995a8410e6_1080x.jpg?v=1683530324',
    //   name: 'CHRISTY LOLLIPOP BIKINI SET',
    //   price: '€59,00 ',
    // },
    // {
    //   imag1: 'https://sowhat.global/cdn/shop/files/MNG8_1080x.png?v=1683531723',
    //   imag2:
    //     'https://sowhat.global/cdn/shop/files/swimwear08229_1_copy_Large_e6064490-0c91-4817-97d6-05dfea4ef528_1080x.jpg?v=1683531723',
    //   name: 'CINDY BLACK SWIMSUIT',
    //   price: '€48,00 ',
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
    //   imag1: 'https://sowhat.global/cdn/shop/files/ZX3_1080x.png?v=1683535919',
    //   imag2:
    //     'https://sowhat.global/cdn/shop/files/zx51_ca1cb957-c9b4-454d-8190-3a413b72415c_1080x.jpg?v=1683535919',
    //   name: 'CHRISTY BLACK BIKINI SET',
    //   price: '€59,00 ',
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

export default Pop_gelato_body;
