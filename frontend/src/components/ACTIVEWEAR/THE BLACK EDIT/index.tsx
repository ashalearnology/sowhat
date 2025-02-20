/** @format */

import Navbar from '@/components/Navbar';
import Shop_carts from './body/body';
import Collection from './hero';
import Silder from './sidebar/details';
import Footer from '@/components/Footer';
import Uppertitle from '@/components/Uppertitle';

const Index = () => {
  return (
    <div>
      {/* <Uppertitle /> */}
      {/* <Navbar /> */}
      <Collection />
      <div className="flex flex-row justify-center mx-auto w-full max-lg:flex-col">
        <Silder />
        <Shop_carts />
      </div>
      {/* <Footer /> */}
    </div>
  );
};
export default Index;
