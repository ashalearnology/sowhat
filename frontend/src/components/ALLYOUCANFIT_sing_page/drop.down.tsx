/** @format */
'use client';

import { IoIosAdd, IoIosRemove } from 'react-icons/io';
import { useState } from 'react';

const sections = [
  {
    title: 'BENEFITS',
    content: [
      'Super soft, glides on skin',
      '4-way stretch compression fabric for maximum comfort & superior stretchability',
      'Moisture-wicking inner mesh lining',
      'Quick-dry pads for maximum comfort',
      'Designed for all body types & sizes',
    ],
  },
  {
    title: 'FABRIC & WASH-CARE',
    content: [
      '85% recycled polyester, 15% elastane - Outer body fabric',
      'Inner mesh lining - 85% recycled polyester, 15% elastane',
      'Machine wash at regular temperature, around 30 degrees Celsius, without bleach, with like colours. Do not tumble-dry or dry clean. Iron on the low-heat setting, if needed.',
    ],
  },
  {
    title: 'SUSTAINABILITY',
    content: [
      'No Overproduction - Printed, cut & hand-sewn only after an order is received.',
      'Fabric tested for safety - Fabric test certificate available.',
      'GRS - Global Recycled Standard certificate available.',
    ],
  },
  {
    title: 'SIZING & FIT',
    content: ['This style fits snug and runs true to size.'],
  },
];

const Allyoucanfit_x_drop_down = () => {
  const [openSection, setOpenSection] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <div className="border-t flex flex-col gap-4 items-center px-4 py-10 md:px-8 xl:px-16">
      <div>
        <h1 className="text-2xl font-semibold text-center md:text-left">
          About this style
        </h1>
      </div>
      <div className="w-full lg:w-2/4 flex flex-col gap-6 border-b">
        {sections.map((section, index) => (
          <div key={index}>
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleSection(index)}
            >
              <h1 className="font-semibold text-xl">{section.title}</h1>
              {openSection === index ? <IoIosRemove /> : <IoIosAdd />}
            </div>
            {openSection === index && (
              <div>
                <ul>
                  {section.content.map((item, idx) => (
                    <li key={idx}>• {item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Allyoucanfit_x_drop_down;
