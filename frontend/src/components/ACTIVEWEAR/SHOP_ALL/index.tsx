/** @format */

import Shop_all_body from './body/body';
import Shop_all_collection from './hero';
import Shop_all_slider from './sidebar/sidebar';

const Shop_all_index = () => {
  return (
    <div>
      <Shop_all_collection />
      <div className="flex flex-row justify-center mx-auto w-full max-lg:flex-col">
        <Shop_all_slider />
        <Shop_all_body />
      </div>
    </div>
  );
};

export default Shop_all_index;
