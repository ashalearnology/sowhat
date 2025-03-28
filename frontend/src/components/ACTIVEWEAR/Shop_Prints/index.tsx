/** @format */

import Shop_body from './body/body';
import Shop_collection from './hero';
import Sliderslider from './sidebar/slider';

const Shop_index = () => {
  return (
    <div>
      <Shop_collection />
      <div className="flex justify-center mx-auto 2xl:px-10 w-full max-lg:flex-col">
        <Sliderslider />
        <Shop_body />
      </div>
    </div>
  );
};

export default Shop_index;
