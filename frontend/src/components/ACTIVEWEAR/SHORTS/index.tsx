/** @format */

import Sportss_carts from './body/body';
import Sportss_collection from './hero';
import Sportss_accordion from './sidebar/sidebar';

const Sportss = () => {
  return (
    <div>
      <Sportss_collection />
      <div className="flex flex-row justify-center mx-auto w-full max-lg:flex-col">
        <Sportss_accordion />
        <Sportss_carts />
      </div>
    </div>
  );
};

export default Sportss;
