/** @format */

const Shop_carts = () => {
  const Cartsdetails = [
    {
      imag1: '/images/home/hover1.jpg',
      // 'https://sowhat.global/cdn/shop/files/aq15_Large_17eaea97-3a31-42d3-83f5-216623a77301_1080x.png?v=1683800141',
      imag2: '/images/home/hover01.png',
      // 'https://sowhat.global/cdn/shop/files/fgggg_Custom_1080x.png?v=1684491926',
      name: 'VENUS POP HIGH WAISTED SHORTS',
      price: '€60,00 ',
    },
    {
      imag1: '/images/home/hover2.jpg',
      // 'https://sowhat.global/cdn/shop/files/ac8_1080x.png?v=1683628975',
      imag2: '/images/home/hover02.png',
      // 'https://sowhat.global/cdn/shop/files/fghjjjk_Custom_1080x.png?v=1684491796',
      name: 'VENUS POP LEGGINGS',
      price: '€60,00 ',
    },
    {
      imag1: '/images/home/hover3.jpg',
      // 'https://sowhat.global/cdn/shop/files/swimwear05682_Large_8a5ebcfa-9a9f-4e7a-80fa-27c25060e254_1080x.jpg?v=1683327863',
      imag2: '/images/home/hover03.png',
      // 'https://sowhat.global/cdn/shop/files/mockupposition_Custom_1080x.png?v=1684470765',
      name: 'NICOLE SPORTS BRA ',
      price: '€60,00 ',
    },
    {
      imag1: '/images/home/hover4.jpg',
      // 'https://sowhat.global/cdn/shop/files/swimwear06719_1_Large_44a09e5d-69ce-4fc6-afad-ef07d50969a0_1080x.jpg?v=1683358092',
      imag2: '/images/home/hover04.png',
      // 'https://sowhat.global/cdn/shop/files/aw7_1_Custom_1080x.png?v=1684470231',
      name: 'LOLA TANK TOP',
      price: '€60,00 ',
    },
    {
      imag1: '/images/home/hover5.jpg',
      // 'https://sowhat.global/cdn/shop/files/IMG_07920_Custom_1080x.png?v=1684494237',
      imag2: '/images/home/hover05.png',
      // 'https://sowhat.global/cdn/shop/files/aw5_1_Custom_e2692081-ee48-4494-b3af-912bdf7113cd_1080x.png?v=1684494237',
      name: 'KELLY POP SPORTS BRA',
      price: '€60,00 ',
    },
    {
      imag1: '/images/home/hover6.jpg',
      // 'https://sowhat.global/cdn/shop/files/204125_Large_d91aaa51-bf4d-4e89-a036-29c756230672_1080x.jpg?v=1683798679',
      imag2: '/images/home/hover06.png',
      // 'https://sowhat.global/cdn/shop/files/aqw4_1080x.png?v=1684483043',
      name: 'MARIA LILAC HIGH WAISTED LEGGINGS',
      price: '€60,00 ',
    },
    {
      imag1: '/images/home/hover7.jpg',
      // 'https://sowhat.global/cdn/shop/files/braf_a4ddc77b-8fc2-4dbf-98c6-16799929338f_1080x.png?v=1698401258',
      imag2: '/images/home/hover07.png',
      // 'https://sowhat.global/cdn/shop/files/leggingsside_1080x.png?v=1698401258',
      name: 'LYLA BODYSUIT',
      price: '€80,00 ',
    },
    {
      imag1: '/images/home/hover8.jpg',
      // 'https://sowhat.global/cdn/shop/files/ac2_bc7b4c7e-69a4-4abd-8b6e-67391f9586f7_1080x.png?v=1683798628',
      imag2: '/images/home/hover08.png',
      // 'https://sowhat.global/cdn/shop/files/aw5_1_Custom_1080x.png?v=1684469486',
      name: 'NAOMI LIME HIGH WAISTED LEGGINGS',
      price: '€53,00 ',
    },
    {
      imag1: '/images/home/hover4.jpg',
      //  'https://sowhat.global/cdn/shop/files/ac6_1080x.png?v=1683798644',
      imag2: '/images/home/hover04.png',
      // 'https://sowhat.global/cdn/shop/files/AW16-Copy_1_Custom_1080x.png?v=1684470091',
      name: 'MARIA LIME HIGH WAISTED LEGGINGS',
      price: '€62,00 ',
    },
    {
      imag1: '/images/home/hover1.jpg',
      // 'https://sowhat.global/cdn/shop/files/swimwear07945_1_Large_b3fd2cf8-6af7-4693-a994-9e0d9e86fbec_1080x.jpg?v=1683798583',
      imag2: '/images/home/hover01.png',
      //  'https://sowhat.global/cdn/shop/files/aqw2_1080x.png?v=1684483009',
      name: 'MARIA LOLIPOP HIGH WAISTED LEGGINGS',
      price: '€62,00 ',
    },
    {
      imag1: '/images/home/hover3.jpg',
      // 'https://sowhat.global/cdn/shop/files/DSC00446_2_Large_c1c72d5d-cc65-4cea-a146-409cb135c4eb_1080x.jpg?v=1683327875',
      imag2: '/images/home/hover03.png',
      // 'https://sowhat.global/cdn/shop/files/aq37_Custom_1080x.png?v=1684470516',
      name: 'KELLY SPORTS BRA',
      price: '€60,00 ',
    },
    {
      imag1: '/images/home/hover4.jpg',
      // 'https://sowhat.global/cdn/shop/files/swimwear07932_1080x.jpg?v=1683629092',
      imag2: '/images/home/hover04.png',
      // 'https://sowhat.global/cdn/shop/files/Untitled_43_Custom_1080x.png?v=1684483435',
      name: 'CAMILLE SPORTS BRA',
      price: '€60,00 ',
    },
  ];

  return (
    <div className="p-4 sm:px-8 sm:py-4  xl:w-3/4 overflow-hidden flex flex-col w-full">
      <div>
        <ul className="flex gap-6 max-lg:justify-center flex-wrap max-sm:w-full">
          {Cartsdetails.map((item, index) => (
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
        <button className="text-white  bg-black w-12 h-12 text-lg rounded-full ">
          1
        </button>
        <button className="border-2 w-12 h-12 text-lg rounded-full">2</button>
      </div>
    </div>
  );
};

export default Shop_carts;
