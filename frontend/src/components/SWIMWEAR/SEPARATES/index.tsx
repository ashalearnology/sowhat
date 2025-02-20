/** @format */

import Separates_body from './body/body';
import Separates_collection from './hero';
import Separates_slider from './sidebar/sidebar';

const Separates = () => {
  return (
    <div>
      <Separates_collection />
      <div className="flex flex-row justify-center mx-auto w-full max-lg:flex-col">
        <Separates_slider />
        <Separates_body />
      </div>
    </div>
  );
};

export default Separates;
