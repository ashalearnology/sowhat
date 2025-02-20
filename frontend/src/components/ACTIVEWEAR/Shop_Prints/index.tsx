/** @format */

import Shop_body from './body/body';
import Shop_collection from './hero';
import Slider_slider from './sidebar/slider';

const Shop_index = () => {
  return (
    <div>
      <Shop_collection />
      <div className="flex flex-row justify-center mx-auto w-full max-lg:flex-col">
        <Slider_slider />
        <Shop_body />
      </div>
    </div>
  );
};

export default Shop_index;
