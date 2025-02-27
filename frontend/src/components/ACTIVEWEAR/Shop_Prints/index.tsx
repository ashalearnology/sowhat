/** @format */

import Shop_body from './body/body';
import Shop_collection from './hero';
import Sliderslider from './sidebar/slider';

const Shop_index = () => {
  return (
    <div>
      <Shop_collection />
      <div className="flex flex-row justify-center mx-auto w-full max-lg:flex-col">
        <Sliderslider />
        <Shop_body />
      </div>
    </div>
  );
};

export default Shop_index;
