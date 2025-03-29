/** @format */

const Separates_body = () => {
  const Cartsdetails = [
    {
      imag1:
        'https://sowhat.global/cdn/shop/files/CCVFG_1080x.png?v=1683545447',
      imag2:
        'https://sowhat.global/cdn/shop/files/CopyofIMG_7830_edited_1080x.jpg?v=1688381770',
      name: 'EMILY BLACK TIE UP BIKINI TOP',
      price: '€33,00 ',
    },
    {
      imag1: 'https://sowhat.global/cdn/shop/files/ZX11_1080x.png?v=1684225008',
      imag2: 'https://sowhat.global/cdn/shop/files/zx49_1080x.png?v=1684225008',
      name: 'CHRISTY LILAC BRALETTE x BIKINI TOP',
      price: '€33,00',
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
        'https://sowhat.global/cdn/shop/files/VGNNN_1080x.png?v=1683540438',
      imag2:
        'https://sowhat.global/cdn/shop/files/dthhnj_1080x.png?v=1688382848',
      name: 'EMILY BLACK TIE UP BIKINI BOTTOM',
      price: '€33,00 ',
    },
    {
      imag1: 'https://sowhat.global/cdn/shop/files/ZX12_1080x.png?v=1683526353',
      imag2:
        'https://sowhat.global/cdn/shop/files/zx50_72c4886c-8f57-4ec5-bbab-19e0eb9a5387_1080x.png?v=1683526353',
      name: 'CHRISTY LILAC BIKINI BOTTOM',
      price: '€33,00 ',
    },
    {
      imag1: 'https://sowhat.global/cdn/shop/files/zx33_1080x.png?v=1683526205',
      imag2:
        'https://sowhat.global/cdn/shop/files/DSC00364copy_edited4_413be067-c956-4718-aaa3-eb5b2bf957f4_1080x.jpg?v=1683526205',
      name: 'EMILY LOLLIPOP TIE UP BIKINI BOTTOM ',
      price: '€33,00 ',
    },
    {
      imag1:
        'https://sowhat.global/cdn/shop/files/DGFHH_1080x.png?v=1683545402',
      imag2:
        'https://sowhat.global/cdn/shop/files/DSC00428copy_Large_776e904b-59eb-4178-a06c-6dabb8c4aa0e_1080x.jpg?v=1683545402',
      name: 'EMILY LIME TIE UP BIKINI TOP',
      price: '€33,00 ',
    },
    {
      imag1: 'https://sowhat.global/cdn/shop/files/ZX5_1080x.png?v=1687340400',
      imag2: 'https://sowhat.global/cdn/shop/files/zx47_1080x.png?v=1687340400',
      name: 'CHRISTY BLACK BRALETTE x BIKINI TOP',
      price: '€33,00 ',
    },
    {
      imag1: 'https://sowhat.global/cdn/shop/files/CGHH_1080x.png?v=1683545379',
      imag2:
        'https://sowhat.global/cdn/shop/files/DSC00399copy_editedFF_918178e9-f1dc-4f13-8959-c042a319ff77_1080x.jpg?v=1683545379',
      name: 'EMILY LILAC TIE UP BIKINI TOP',
      price: '€33,00 ',
    },
    {
      imag1: 'https://sowhat.global/cdn/shop/files/zx26_1080x.png?v=1683526230',
      imag2:
        'https://sowhat.global/cdn/shop/files/DSC00399copy_editedR_30e86f91-ec6c-4aea-9455-eefa49886160_1080x.jpg?v=1683526230',
      name: 'EMILY LIME TIE UP BIKINI BOTTOM',
      price: '€33,00 ',
    },
    {
      imag1:
        'https://sowhat.global/cdn/shop/files/ZX4_fdc0ff3b-cbbe-4e99-90ae-9834e495f259_1080x.png?v=1683538812',
      imag2:
        'https://sowhat.global/cdn/shop/files/zx47_1f0067bb-8ad9-40f4-90b9-c670fbe06c4a_1080x.png?v=1683538812',
      name: 'CHRISTY BLACK BIKINI BOTTOM',
      price: '€33,00 ',
    },
    {
      imag1: 'https://sowhat.global/cdn/shop/files/zx42_1080x.png?v=1683526168',
      imag2:
        'https://sowhat.global/cdn/shop/files/DSC00295_b6095cb2-0fae-4c7f-97fe-9eae58ed76c3_1080x.jpg?v=1683526168',
      name: 'EMILY LILAC TIE UP BIKINI BOTTOM',
      price: '€33,00 ',
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
                  className="w-full object-cover h-full absolute top-0 transition-opacity duration-500 group-hover:opacity-0 rounded-lg bg-white sm:rounded-xl"
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

export default Separates_body;
