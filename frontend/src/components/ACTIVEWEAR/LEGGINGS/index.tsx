/** @format */

import Leggings_carts from './body/body';
import Leggings_collection from './hero';
import Leggings_accordion from './sidebar/sidebar';

const Leggings_index = () => {
  return (
    <div>
      <Leggings_collection />
      <div className="flex flex-row justify-center mx-auto w-full max-lg:flex-col">
        <Leggings_accordion />
        <Leggings_carts />
      </div>
    </div>
  );
};

export default Leggings_index;
