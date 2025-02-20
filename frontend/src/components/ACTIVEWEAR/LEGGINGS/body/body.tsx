/** @format */

const Leggings_carts = () => {
  const Cartsdetails = [
    {
      imag1:
        'https://sowhat.global/cdn/shop/files/ghnn_2be440c0-a1e3-4a0f-a233-d84eda0e82d4_1080x.jpg?v=1683798614',
      imag2:
        'https://sowhat.global/cdn/shop/files/aw5_1_Custom_ca5f3bf6-f4db-43e5-b07a-343f565bee97_1080x.png?v=1684470164',
      name: 'VENUS HIGH WAISTED LEGGINGS',
      price: '€60,00 ',
    },
    {
      imag1:
        'https://sowhat.global/cdn/shop/files/swimwear06793_1_Large_19abd47e-ff4b-4090-a646-f42acf90291a_1080x.png?v=1683798656',
      imag2: 'https://sowhat.global/cdn/shop/files/aqw5_1080x.png?v=1684482971',
      name: 'SERENA MESH HIGH WAISTED LEGGINGS',
      price: '€53,00 ',
    },
    {
      imag1: 'https://sowhat.global/cdn/shop/files/ac8_1080x.png?v=1683628975',
      imag2:
        'https://sowhat.global/cdn/shop/files/fghjjjk_Custom_1080x.png?v=1684491796',
      name: 'VENUS POP LEGGINGS',
      price: '€60,00 ',
    },
    {
      imag1:
        'https://sowhat.global/cdn/shop/files/yyuj_37ec6e60-b7d1-4e63-be15-d93383462659_1080x.jpg?v=1686311280',
      imag2:
        'https://sowhat.global/cdn/shop/products/all-over-print-yoga-leggings-white-front-6433ed857dbac_1080x.jpg?v=1686311280',
      name: 'Allyoucanfit X Nora High Waisted Leggings',
      price: '€65,00 ',
    },
    {
      imag1:
        'https://sowhat.global/cdn/shop/files/SCARLET-serena4_1080x.jpg?v=1721890749',
      imag2:
        'https://sowhat.global/cdn/shop/files/SCARLET-serena1_6b143da1-604c-4803-be6c-06634c5b050a_1080x.jpg?v=1721890749',
      name: 'ALICIA LEGGINGS IN SCARLET RED',
      price: '€62,00 ',
    },
    {
      imag1:
        'https://sowhat.global/cdn/shop/files/IMG_4794_Custom_1080x.jpg?v=1686307744',
      imag2:
        'https://sowhat.global/cdn/shop/files/aqw5_1_1080x.png?v=1686307744',
      name: 'ALLYOUCANFIT X SERENA MESH LEGGINGS',
      price: '€53,00 ',
    },
    {
      imag1:
        'https://sowhat.global/cdn/shop/files/DSC0729_Custom_9576e350-6c32-490e-894b-0fb2b9ee8ed9_1080x.jpg?v=1686308246',
      imag2:
        'https://sowhat.global/cdn/shop/files/qw8_Custom_1080x.png?v=1686308246',
      name: 'ALLYOUCANFIT X VENUS LEGGINGS',
      price: '€60,00 ',
    },
    {
      imag1:
        'https://sowhat.global/cdn/shop/products/all-over-print-yoga-leggings-white-front-62eb7c4ea4d25_1080x.jpg?v=1659599960',
      imag2:
        'https://sowhat.global/cdn/shop/products/all-over-print-yoga-leggings-white-left-62eb7c4ea62b4_1080x.jpg?v=1659599961',
      name: 'Flora High Waisted Leggings',
      price: '€65,00-€48,00 ',
    },
    {
      imag1:
        'https://sowhat.global/cdn/shop/products/all-over-print-crossover-leggings-with-pockets-white-front-62eb854f72940_1080x.jpg?v=1659602734',
      imag2:
        'https://sowhat.global/cdn/shop/products/all-over-print-crossover-leggings-with-pockets-white-front-62eb8666afd74_1080x.jpg?v=1659602734',
      name: 'Flora Crossover leggings with pockets',
      price: '€72,00-€54,00',
    },
    // {same}
    {
      imag1:
        'https://sowhat.global/cdn/shop/products/all-over-print-plus-size-leggings-white-front-62f0c87e0b8fe_1080x.jpg?v=1659947144',
      imag2:
        'https://sowhat.global/cdn/shop/products/all-over-print-plus-size-leggings-white-back-62f0c87e0c677_1080x.jpg?v=1659947145',
      name: 'Flora Plus Size High Waisted Leggings',
      price: '€65,00-€48,00',
    },
    {
      imag1:
        'https://sowhat.global/cdn/shop/products/all-over-print-yoga-leggings-white-front-63469bf5e890f_1080x.jpg?v=1665571851',
      imag2:
        'https://sowhat.global/cdn/shop/products/Screenshot2022-09-10at10.48.24PM_1080x.png?v=1665571851',
      name: 'Paola High Waisted Leggings',
      price: '€65,00-€48,00 ',
    },
    {
      imag1:
        'https://sowhat.global/cdn/shop/products/all-over-print-plus-size-leggings-white-front-62ee092419107_1080x.jpg?v=1659767086',
      imag2:
        'https://sowhat.global/cdn/shop/products/all-over-print-plus-size-leggings-white-back-62ee09241a466_1080x.jpg?v=1659767087',
      name: 'Paola High Waisted Plus Size Leggings',
      price: '€65,00-€48,00 ',
    },
  ];

  return (
    <div className=" p-8  w-3/4 overflow-hidden flex flex-col max-md:w-full">
      <div className="">
        <ul className="flex gap-6 max-lg:justify-center flex-wrap max-sm:w-full">
          {Cartsdetails.map((item, index) => (
            <li
              key={index}
              className="w-[30%] flex-grow max-sm:w-full max-lg:w-64 flex-shrink-0 "
            >
              <div className="h-[550px] bg-gray-1s00 shadow-lg relative group rounded-2xl flex-wrap ">
                <img
                  src={item.imag1}
                  alt={item.name}
                  className="w-full object-cover h-full absolute top-0 transition-opacity duration-500 group-hover:opacity-0 rounded-2xl"
                ></img>

                <img
                  src={item.imag2}
                  alt={item.name}
                  className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-100 rounded-2xl"
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
        <button className="text-white  bg-black w-12 h-12 text-lg rounded-full ">
          1
        </button>
        <button className="border-2 w-12 h-12 text-lg rounded-full  ">2</button>
      </div>
    </div>
  );
};

export default Leggings_carts;
