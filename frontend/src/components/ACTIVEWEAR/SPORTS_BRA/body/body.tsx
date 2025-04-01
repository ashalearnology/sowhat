/** @format */

const Shop_bra_carts = () => {
  const Cartsdetails = [
    {
      imag1:
        'https://sowhat.global/cdn/shop/files/swimwear07932_1080x.jpg?v=1683629092',
      imag2:
        'https://sowhat.global/cdn/shop/files/Untitled_43_Custom_1080x.png?v=1684483435',
      name: 'CAMILLE SPORTS BRA',
      price: '€60.00',
    },
    {
      imag1:
        'https://sowhat.global/cdn/shop/files/TEAL-vneck7_1080x.jpg?v=1721891627',
      imag2:
        'https://sowhat.global/cdn/shop/files/TEAL-vneck2_1080x.jpg?v=1721891627',
      name: 'LANA SPORTS BRA IN TEAL BLUE',
      price: '€60.00',
    },
    {
      imag1:
        'https://sowhat.global/cdn/shop/files/SCARLET-kelly6_1080x.jpg?v=1721891432',
      imag2:
        'https://sowhat.global/cdn/shop/files/SCARLET-kelly2_1080x.jpg?v=1721891432',
      name: 'NATALIA SPORTS BRA IN SCARLET RED',
      price: '€65,00',
    },
    {
      imag1:
        'https://sowhat.global/cdn/shop/files/1_631dd523-9457-4103-b8bf-688ffe845db3_1080x.jpg?v=1721891663',
      imag2: 'https://sowhat.global/cdn/shop/files/2_1080x.jpg?v=1721891663',
      name: 'VALERIA SPORTS BRA ',
      price: '€63,00',
    },
    {
      imag1:
        'https://sowhat.global/cdn/shop/files/blueback_1080x.png?v=1721891585',
      imag2:
        'https://sowhat.global/cdn/shop/files/bluefront1_1080x.png?v=1721891585',
      name: 'LANA SPORTS BRA IN LAPIS BLUE',
      price: '€60,00 ',
    },
    {
      imag1:
        'https://sowhat.global/cdn/shop/files/swimwear05682_Large_8a5ebcfa-9a9f-4e7a-80fa-27c25060e254_1080x.jpg?v=1683327863',
      imag2:
        'https://sowhat.global/cdn/shop/files/mockupposition_Custom_1080x.png?v=1684470765',
      name: 'NICOLE SPORTS BRA ',
      price: '€60,00 ',
    },
    {
      imag1:
        'https://sowhat.global/cdn/shop/files/aq18_Large_b1d7d821-16cc-4bc4-b729-75fcf6296f05_1080x.jpg?v=1683787819',
      imag2:
        'https://sowhat.global/cdn/shop/files/Untitled_43_1_Custom_1080x.png?v=1684483011',
      name: 'CAMILLE POP SPORTS BRA',
      price: '€60,00 ',
    },
    {
      imag1:
        'https://sowhat.global/cdn/shop/files/IMG_4798_Custom_0a5d9abc-8bb3-45a8-a959-1e25a9d0d01c_1080x.jpg?v=1687339583',
      imag2: 'https://sowhat.global/cdn/shop/files/HJKK_1080x.png?v=1687339583',
      name: 'Allyoucanfit X Nora Recycled Bralette',
      price: '€48,00 ',
    },
    {
      imag1: 'https://sowhat.global/cdn/shop/files/FVBB_1080x.png?v=1683545425',
      imag2:
        'https://sowhat.global/cdn/shop/files/DSC00323copy_1080x.jpg?v=1683545425',
      name: 'EMILY LOLLIPOP TIE UP BIKINI TOP',
      price: '€33,00 ',
    },
    {
      imag1:
        'https://sowhat.global/cdn/shop/files/BLUE-kelly1_1080x.jpg?v=1721891443',
      imag2:
        'https://sowhat.global/cdn/shop/files/preview_images/76c5017acecc49a18af4affa5d92211d.thumbnail.0000000000_1080x.jpg?v=1729327267',
      name: 'NATALIA SPORTS BRA IN LAPIS BLUE',
      price: '€65,00 ',
    },
    {
      imag1:
        'https://sowhat.global/cdn/shop/files/OLIVE-roundneckbra5_1080x.jpg?v=1721891526',
      imag2:
        'https://sowhat.global/cdn/shop/files/OLIVE-roundneckbra2_1080x.jpg?v=1721891526',
      name: 'DEBBIE SPORTS BRA IN OLIVE GREEN',
      price: '€60,00 ',
    },
    {
      imag1:
        'https://sowhat.global/cdn/shop/files/PINK-vneck4_1080x.jpg?v=1721891647',
      imag2:
        'https://sowhat.global/cdn/shop/files/PINK-vneck1_1080x.jpg?v=1721891647',
      name: 'LANA SPORTS BRA IN PINK ROSE',
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

export default Shop_bra_carts;
