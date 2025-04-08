/** @format */
'use client';
import { useState } from 'react';

const Swimsuits_body = () => {
  const Cartsdetails = [
    // {
    //   imag1: 'https://sowhat.global/cdn/shop/files/MNG6_1080x.png?v=1683531749',
    //   imag2:
    //     'https://sowhat.global/cdn/shop/files/B1119652-330C-485B-A89A-43AFA5961DF5_jpeg_1080x.jpg?v=1688376570',
    //   name: 'CINDY LOLLIPOP SWIMSUIT',
    //   price: '€48,00 ',
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
    //   imag1: 'https://sowhat.global/cdn/shop/files/MNG8_1080x.png?v=1683531723',
    //   imag2:
    //     'https://sowhat.global/cdn/shop/files/swimwear08229_1_copy_Large_e6064490-0c91-4817-97d6-05dfea4ef528_1080x.jpg?v=1683531723',
    //   name: 'CINDY BLACK SWIMSUIT',
    //   price: '€48,00 ',
    // },
    // {
    //   imag1: 'https://sowhat.global/cdn/shop/files/MNG1_1080x.png?v=1683531800',
    //   imag2:
    //     'https://sowhat.global/cdn/shop/files/DSC00168copy-1_Large_985cd6bd-7e7b-49aa-9a8e-624cb5186357_1080x.jpg?v=1683531800',
    //   name: 'CINDY LILAC SWIMSUIT',
    //   price: '€48,00 ',
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
    // same
    {
      imag1: '/images/home/hover02.png',
      // 'https://sowhat.global/cdn/shop/files/DSC0909_Custom_a20ce5ed-b967-4b21-af14-37b17ba9f2ef_1080x.jpg?v=1686311358',
      imag2: '/images/home/hover2.jpg',
      // 'https://sowhat.global/cdn/shop/files/a4_1080x.png?v=1687343913',
      name: 'Allyoucanfit X Nora High Waisted Shorts',
      price: '€52,00 ',
    },
    {
      imag1: '/images/home/hover04.png',
      // 'https://sowhat.global/cdn/shop/files/SCARLET-shorts1_1080x.jpg?v=1721890495',
      imag2: '/images/home/hover4.jpg',
      // 'https://sowhat.global/cdn/shop/files/SCARLET-shorts2_1080x.jpg?v=1721890495',
      name: 'ALICIA SHORTS IN SCARLET RED',
      price: '€60,00 ',
    },
    {
      imag1: '/images/home/hover5.jpg',
      // 'https://sowhat.global/cdn/shop/files/swimwear02403_1_Large_c9d391a7-2d91-4042-8aae-e9b2913f94dd_1080x.jpg?v=1683800112',
      imag2: '/images/home/hover05.png',
      // 'https://sowhat.global/cdn/shop/files/aw1_1_Custom_1080x.png?v=1684482333',
      name: 'VENUS HIGH WAISTED SHORTS',
      price: '€60,00 ',
    },
    {
      imag1: '/images/home/hover2.jpg',
      // 'https://sowhat.global/cdn/shop/files/IMG_4790_Custom_1080x.jpg?v=1687340274',
      imag2: '/images/readmore2/readmore4.webp',
      // 'https://sowhat.global/cdn/shop/files/qw9_Custom_1080x.png?v=1687340274',
      name: 'ALLYOUCANFIT X VENUS SHORTS',
      price: '€60,00 ',
    },
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

export default Swimsuits_body;
