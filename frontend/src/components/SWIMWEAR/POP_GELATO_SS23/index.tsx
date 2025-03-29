/** @format */

import Pop_gelato_body from './body/body';
import Pop_gelato_collection from './hero';
import Pop_gelato_slider from './sidebar/sidebar';

const Pop_gelato = () => {
  return (
    <div>
      <Pop_gelato_collection />
      <div className="flex justify-center mx-auto w-full max-lg:flex-col">
        <Pop_gelato_slider />
        <Pop_gelato_body />
      </div>
    </div>
  );
};

export default Pop_gelato;
