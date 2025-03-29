/** @format */

import Allyoucanfit_body from './body/body';
import Allyoucanfit_collection from './hero';
import Allyoucanfit_slider from './sidebar/slider';

const Allyoucanfit_index = () => {
  return (
    <div>
      <Allyoucanfit_collection />
      <div className="flex justify-center mx-auto 2xl:px-10 w-full max-lg:flex-col">
        <Allyoucanfit_slider />
        <Allyoucanfit_body />
      </div>
    </div>
  );
};

export default Allyoucanfit_index;
