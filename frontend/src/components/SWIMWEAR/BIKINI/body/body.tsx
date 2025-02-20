/** @format */

const Bikine_body = () => {
  const Cartsdetails = [
    {
      imag1:
        'https://sowhat.global/cdn/shop/files/zx22_616c554a-cb48-4f30-8ea8-0c66dfdb22be_1080x.png?v=1683530324',
      imag2:
        'https://sowhat.global/cdn/shop/files/zx48_51921bc5-64e7-447f-a15a-17995a8410e6_1080x.jpg?v=1683530324',
      name: 'CHRISTY LOLLIPOP BIKINI SET',
      price: '€59.00',
    },
    {
      imag1:
        'https://sowhat.global/cdn/shop/products/all-over-print-recycled-high-waisted-bikini-white-front-62ecca9e490e9_1080x.jpg?v=1659685625',
      imag2:
        'https://sowhat.global/cdn/shop/products/all-over-print-recycled-high-waisted-bikini-white-front-62eccad15ef40_1080x.jpg?v=1659685625',
      name: 'Margaux Recycled High-Waisted Bikini',
      price: '    €73,00-€48,75 ',
    },
    {
      imag1: 'https://sowhat.global/cdn/shop/files/zx30_1080x.png?v=1683526119',
      imag2: 'https://sowhat.global/cdn/shop/files/zx51_1080x.png?v=1683526119',
      name: 'EMILY LIME TIE UP BIKINI SET',
      price: '€59,00 ',
    },
    {
      imag1: 'https://sowhat.global/cdn/shop/files/ZX10_1080x.png?v=1683527957',
      imag2: 'https://sowhat.global/cdn/shop/files/bbn_1080x.jpg?v=1683527957',
      name: 'CHRISTY LILAC BIKINI SET',
      price: '€59,00 ',
    },
    {
      imag1:
        'https://sowhat.global/cdn/shop/products/all-over-print-recycled-high-waisted-bikini-white-front-62ec9c8343093_1080x.jpg?v=1659673837',
      imag2:
        'https://sowhat.global/cdn/shop/products/all-over-print-recycled-high-waisted-bikini-white-front-62ec9cc8e32ab_1080x.jpg?v=1659673837',
      name: 'Blue Check Recycled High-Waisted Bikini',
      price: '    €73,00-€48,75 ',
    },
    {
      imag1:
        'https://sowhat.global/cdn/shop/files/Bikini03_1_1080x.png?v=1683540655',
      imag2:
        'https://sowhat.global/cdn/shop/files/dthhnj_5d532ad3-18dc-4131-94bd-da6fd2c023de_1080x.png?v=1688382924',
      name: 'EMILY BLACK TIE UP BIKINI SET',
      price: '€59,00 ',
    },
    {
      imag1:
        'https://sowhat.global/cdn/shop/files/gvgbnn_1080x.png?v=1684224937',
      imag2:
        'https://sowhat.global/cdn/shop/files/DSC00216copy_1080x.jpg?v=1684224937',
      name: 'CHRISTY LIME BIKINI SET',
      price: '€59,00 ',
    },
    {
      imag1:
        'https://sowhat.global/cdn/shop/products/all-over-print-recycled-high-waisted-bikini-white-front-62eba8375386e_1080x.jpg?v=1659611426',
      imag2:
        'https://sowhat.global/cdn/shop/products/all-over-print-recycled-high-waisted-bikini-white-front-62eba87b3b1c5_1080x.jpg?v=1659611426',
      name: 'Lemon Recycled High-Waisted Bikini',
      price: '€73,00 -€48,75 ',
    },
    {
      imag1: 'https://sowhat.global/cdn/shop/files/zx38_1080x.png?v=1683526132',
      imag2:
        'https://sowhat.global/cdn/shop/files/DSC00295_1080x.jpg?v=1683526132https://sowhat.global/cdn/shop/files/DSC00295_1080x.jpg?v=1683526132',
      name: 'EMILY LILAC TIE UP BIKINI SET',
      price: '€59,00 ',
    },

    {
      imag1: 'https://sowhat.global/cdn/shop/files/ZX3_1080x.png?v=1683535919',
      imag2:
        'https://sowhat.global/cdn/shop/files/zx51_ca1cb957-c9b4-454d-8190-3a413b72415c_1080x.jpg?v=1683535919',
      name: 'CHRISTY BLACK BIKINI SET',
      price: '€59,00 ',
    },
    {
      imag1:
        'https://sowhat.global/cdn/shop/products/all-over-print-recycled-high-waisted-bikini-white-front-617b84ae56ada_1_1080x.jpg?v=1640521095',
      imag2:
        'https://sowhat.global/cdn/shop/files/all-over-print-recycled-high-waisted-bikini-white-front-64802ba5726ff_1080x.jpg?v=1686121393',
      name: 'Fuchsia Pink Recycled High-Waisted Bikini',
      price: '    €73,00-€48,75 ',
    },
    {
      imag1: 'https://sowhat.global/cdn/shop/files/zx34_1080x.png?v=1683526140',
      imag2:
        'https://sowhat.global/cdn/shop/files/DSC00289_1080x.jpg?v=1683526140',
      name: 'EMILY LOLLIPOP TIE UP BIKINI SET',
      price: '€59,00',
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
                  className="w-full bg-white object-cover h-full absolute top-0 transition-opacity duration-500 group-hover:opacity-0 rounded-2xl"
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
        <button className=" w-12 h-12 text-lg rounded-full border-2 ">2</button>
      </div>
    </div>
  );
};

export default Bikine_body;
