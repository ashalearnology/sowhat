/** @format */

const Swimsuits_body = () => {
  const Cartsdetails = [
    {
      imag1: 'https://sowhat.global/cdn/shop/files/MNG6_1080x.png?v=1683531749',
      imag2:
        'https://sowhat.global/cdn/shop/files/B1119652-330C-485B-A89A-43AFA5961DF5_jpeg_1080x.jpg?v=1688376570',
      name: 'CINDY LOLLIPOP SWIMSUIT',
      price: '€48,00 ',
    },
    {
      imag1:
        'https://sowhat.global/cdn/shop/files/FGGBG_1080x.png?v=1683540199',
      imag2:
        'https://sowhat.global/cdn/shop/files/94ED7185-22B8-4C3C-B697-82195AF96A90_1080x.png?v=1688375073',
      name: 'CINDY LIME SWIMSUIT',
      price: '€48,00 ',
    },
    {
      imag1: 'https://sowhat.global/cdn/shop/files/MNG8_1080x.png?v=1683531723',
      imag2:
        'https://sowhat.global/cdn/shop/files/swimwear08229_1_copy_Large_e6064490-0c91-4817-97d6-05dfea4ef528_1080x.jpg?v=1683531723',
      name: 'CINDY BLACK SWIMSUIT',
      price: '€48,00 ',
    },
    {
      imag1: 'https://sowhat.global/cdn/shop/files/MNG1_1080x.png?v=1683531800',
      imag2:
        'https://sowhat.global/cdn/shop/files/DSC00168copy-1_Large_985cd6bd-7e7b-49aa-9a8e-624cb5186357_1080x.jpg?v=1683531800',
      name: 'CINDY LILAC SWIMSUIT',
      price: '€48,00 ',
    },
  ];

  return (
    <div className="p-8 w-3/4 overflow-hidden flex flex-col max-md:w-full">
      <div className="">
        <ul className="flex items-center justify-between flex-wrap">
          {Cartsdetails.map((item, index) => (
            <li key={index} className="w-[30%] gap-4  flex-shrink-0">
              <div className=" h-[550px]  bg-gray-100 shadow-lg relative group rounded-2xl overflow-hidden">
                <img
                  src={item.imag1}
                  alt={item.name}
                  className="w-full h-full object-cover  absolute top-0 left-0 transition-opacity duration-500 group-hover:opacity-0 rounded-2xl"
                />
                <img
                  src={item.imag2}
                  alt={item.name}
                  className="w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100 rounded-2xl"
                />
              </div>
              <div className="flex flex-col gap-1 m-2 flex-wrap">
                <a href="/" className="text-lg font-semibold ">
                  {item.name}
                </a>
                <p>{item.price}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex gap-2">
        <button className="text-white bg-black w-12 h-12 text-lg rounded-full ">
          1
        </button>
        <button className="text-black border-2 w-12 h-12 text-lg rounded-full ">
          2
        </button>
      </div>
    </div>
  );
};

export default Swimsuits_body;
