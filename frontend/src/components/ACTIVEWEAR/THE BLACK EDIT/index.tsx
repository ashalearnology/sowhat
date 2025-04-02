/** @format */
import Shop_carts from './body/body';
import Collection from './hero';
import Accordion from './sidebar/details';

const TheBlackEditIndex = () => {
  return (
    <div>
      <Collection />
      <div className="flex justify-center mx-auto 2xl:px-10 w-full max-lg:flex-col">
        <Accordion />
        <Shop_carts />
      </div>
    </div>
  );
};
export default TheBlackEditIndex;
