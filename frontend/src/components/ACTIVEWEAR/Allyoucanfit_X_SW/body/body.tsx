/** @format */

const Allyoucanfit_body = () => {
  const Cartsdetails = [
    {
      imag1:
        'https://sowhat.global/cdn/shop/files/IMG_4793_Custom_1080x.jpg?v=1686307118',
      imag2: 'https://sowhat.global/cdn/shop/files/qw2a_1080x.png?v=1686307118',
      name: 'ALLYOUCANFIT X CAMILLE SPORTS BRA',
      price: '€60,00 ',
    },
    {
      imag1:
        'https://sowhat.global/cdn/shop/files/IMG_4790_Custom_1080x.jpg?v=1687340274',
      imag2:
        'https://sowhat.global/cdn/shop/files/qw9_Custom_1080x.png?v=1687340274',
      name: 'ALLYOUCANFIT X VENUS SHORTS',
      price: '€60,00 ',
    },
    {
      imag1:
        'https://sowhat.global/cdn/shop/files/IMG_4791_1080x.jpg?v=1686306933',
      imag2: 'https://sowhat.global/cdn/shop/files/qw3_1080x.png?v=1686306933',
      name: 'ALLYOUCANFIT x NICOLE SPORTS BRA',
      price: '€60,00 ',
    },
    {
      imag1:
        'https://sowhat.global/cdn/shop/files/DSC0750_Custom_1080x.jpg?v=1686307247',
      imag2: 'https://sowhat.global/cdn/shop/files/qw5_1080x.png?v=1686307247',
      name: 'ALLYOUCANFIT X KELLY SPORTS BRA',
      price: '€60,00 ',
    },
    {
      imag1:
        'https://sowhat.global/cdn/shop/files/IMG_4792_Custom_1080x.jpg?v=1686307475',
      imag2:
        'https://sowhat.global/cdn/shop/files/aw7_1_Custom_8c990c0f-2ee4-4028-9846-445fe1918f03_1080x.png?v=1686307475',
      name: 'ALLYOUCANFIT X LYLA BODYSUIT',
      price: '€80,00 ',
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
        'https://sowhat.global/cdn/shop/files/DSC0507_Custom_1080x.jpg?v=1686308688',
      imag2: 'https://sowhat.global/cdn/shop/files/qaw1_1080x.png?v=1686308688',
      name: 'Allyoucanfit x White Eco Hoodie',
      price: '€64,00 ',
    },
    {
      imag1:
        'https://sowhat.global/cdn/shop/files/DSC0471_edited.jpgggh_1080x.jpg?v=1686308835',
      imag2:
        'https://sowhat.global/cdn/shop/files/aqw2_d60634b0-45d5-42f5-9cd0-b8403db0104a_1080x.png?v=1686308835',
      name: 'Allyoucanfit X Black Eco Hoodie',
      price: '€64,00 ',
    },

    {
      imag1:
        'https://sowhat.global/cdn/shop/files/DSC0471_edited_1080x.jpg?v=1686311521',
      imag2:
        'https://sowhat.global/cdn/shop/products/all-over-print-unisex-hoodie-white-back-635788a98cdeb_1080x.jpg?v=1686311521',
      name: 'Allyoucanfit X Nora Hoodie',
      price: '€85,00 ',
    },
    {
      imag1:
        'https://sowhat.global/cdn/shop/files/DSC0766_Custom_1080x.jpg?v=1686311431',
      imag2:
        'https://sowhat.global/cdn/shop/products/b19_1080x.jpg?v=1686311431',
      name: 'Allyoucanfit X Nora Recycled Long-sleeve Sports Top',
      price: '€85,00 ',
    },
    {
      imag1:
        'https://sowhat.global/cdn/shop/files/IMG_4798_Custom_0a5d9abc-8bb3-45a8-a959-1e25a9d0d01c_1080x.jpg?v=1687339583',
      imag2: 'https://sowhat.global/cdn/shop/files/HJKK_1080x.png?v=1687339583',
      name: 'Allyoucanfit X Nora Recycled Bralette',
      price: '€48,00 ',
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

export default Allyoucanfit_body;
