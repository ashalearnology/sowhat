/** @format */

import Shop_bra_carts from './body/body';
import Sports_bra_collection from './hero';
import Sport_bra_accordion from './sidebar/sidebar';

const Sports_Bra = () => {
  return (
    <div>
      <Sports_bra_collection />
      <div className="flex flex-row justify-center mx-auto w-full max-lg:flex-col">
        <Sport_bra_accordion />
        <Shop_bra_carts />
      </div>
    </div>
  );
};

export default Sports_Bra;
