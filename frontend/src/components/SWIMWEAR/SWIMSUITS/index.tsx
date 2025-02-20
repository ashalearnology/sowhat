/** @format */

import Swimsuits_body from './body/body';
import Swimsuits_collection from './hero';
import Swimsuits_slider from './sidebar/sidebar';

const Swimsuits = () => {
  return (
    <div>
      <Swimsuits_collection />
      <div className="flex flex-row justify-center mx-auto w-full max-lg:flex-col">
        <Swimsuits_slider />
        <Swimsuits_body />
      </div>
    </div>
  );
};

export default Swimsuits;
