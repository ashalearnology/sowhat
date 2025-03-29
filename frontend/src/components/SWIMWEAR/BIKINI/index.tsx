/** @format */

import Bikine_body from './body/body';
import Bikine_collection from './hero';
import Bikine_slider from './sidebar/sidebar';

const Bikine_ = () => {
  return (
    <div>
      <Bikine_collection />
      <div className="flex justify-center mx-auto w-full max-lg:flex-col">
        <Bikine_slider />
        <Bikine_body />
      </div>
    </div>
  );
};

export default Bikine_;
