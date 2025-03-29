/** @format */

const Shop_all_body = () => {
  const Cartsdetails = [
    {
      imag1:
        'https://sowhat.global/cdn/shop/files/swimwear06719_1_Large_44a09e5d-69ce-4fc6-afad-ef07d50969a0_1080x.jpg?v=1683358092',
      imag2:
        'https://sowhat.global/cdn/shop/files/aw7_1_Custom_1080x.png?v=1684470231',
      name: 'LYLA BODYSUIT',
      price: '€80,00 ',
    },
    {
      imag1:
        'https://sowhat.global/cdn/shop/files/shorts_Large_8cbd4087-5633-457e-9f5c-017f72455093_1080x.png?v=1683800124',
      imag2:
        'https://sowhat.global/cdn/shop/files/aw12-Copy_2_Custom_1080x.png?v=1684473895',
      name: 'VENUS POP HIGH WAISTED SHORTS',
      price: '€60,00 ',
    },
    {
      imag1:
        'https://sowhat.global/cdn/shop/files/aq18_Large_b1d7d821-16cc-4bc4-b729-75fcf6296f05_1080x.jpg?v=1683787819',
      imag2:
        'https://sowhat.global/cdn/shop/files/Untitled_43_1_Custom_1080x.png?v=1684483011',
      name: 'KELLY POP SPORTS BRA',
      price: '€80,00 ',
    },
    {
      imag1:
        'https://sowhat.global/cdn/shop/files/IMG_4798_Custom_0a5d9abc-8bb3-45a8-a959-1e25a9d0d01c_1080x.jpg?v=1687339583',
      imag2: 'https://sowhat.global/cdn/shop/files/HJKK_1080x.png?v=1687339583',
      name: 'Allyoucanfit X Nora Recycled Bralette',
      price: '€48,00 ',
    },
    {
      imag1:
        'https://sowhat.global/cdn/shop/files/IMG_4793_Custom_1080x.jpg?v=1686307118',
      imag2: 'https://sowhat.global/cdn/shop/files/qw2a_1080x.png?v=1686307118',
      name: 'ALLYOUCANFIT X CAMILLE SPORTS BRA',
      price: '€54,00 ',
    },
    {
      imag1:
        'https://sowhat.global/cdn/shop/files/DSC0909_Custom_a20ce5ed-b967-4b21-af14-37b17ba9f2ef_1080x.jpg?v=1686311358',
      imag2: 'https://sowhat.global/cdn/shop/files/a4_1080x.png?v=1687343913',
      name: 'Allyoucanfit X Nora High Waisted Shorts',
      price: '€52,00 ',
    },
    {
      imag1:
        'https://sowhat.global/cdn/shop/files/SCARLET-roundneckbra4_1080x.jpg?v=1721891493',
      imag2:
        'https://sowhat.global/cdn/shop/files/SCARLET-roundneckbra5_1080x.jpg?v=1721891493',
      name: 'DEBBIE SPORTS BRA IN SCARLET RED',
      price: '€60,00 ',
    },
    {
      imag1:
        'https://sowhat.global/cdn/shop/files/1_631dd523-9457-4103-b8bf-688ffe845db3_1080x.jpg?v=1721891663',
      imag2: 'https://sowhat.global/cdn/shop/files/2_1080x.jpg?v=1721891663',
      name: 'VALERIA SPORTS BRA ',
      price: '€63,00 ',
    },
    {
      imag1:
        'https://sowhat.global/cdn/shop/files/TEAL-shorts2_1080x.jpg?v=1721890468',
      imag2:
        'https://sowhat.global/cdn/shop/files/TEAL-shorts5_1080x.jpg?v=1721890469',
      name: 'ALICIA SHORTS IN TEAL BLUE',
      price: '€60,00 ',
    },
    {
      imag1:
        'https://sowhat.global/cdn/shop/files/DSC00446_2_Large_c1c72d5d-cc65-4cea-a146-409cb135c4eb_1080x.jpg?v=1683327875',
      imag2:
        'https://sowhat.global/cdn/shop/files/aq37_Custom_1080x.png?v=1684470516',
      name: 'KELLY SPORTS BRA',
      price: '€60,00 ',
    },
    {
      imag1:
        'https://sowhat.global/cdn/shop/files/aq15_Large_17eaea97-3a31-42d3-83f5-216623a77301_1080x.png?v=1683800141',
      imag2:
        'https://sowhat.global/cdn/shop/files/fgggg_Custom_1080x.png?v=1684491926',
      name: 'NICOLE POP SPORTS BRA',
      price: '€60,00 ',
    },
    {
      imag1:
        'https://sowhat.global/cdn/shop/files/swimwear07932_1080x.jpg?v=1683629092',
      imag2:
        'https://sowhat.global/cdn/shop/files/Untitled_43_Custom_1080x.png?v=1684483435',
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

export default Shop_all_body;
