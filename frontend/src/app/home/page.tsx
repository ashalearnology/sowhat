/** @format */

import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import HomeHead1 from '@/components/HomeHead1';
import Navbar from '@/components/Navbar';
import Uppertitle from '@/components/Uppertitle';
import CustomPrevArrow from '@/components/CustomPrevArrow';
import Seen from '@/components/Seen';
import React from 'react';
import Trending from '@/components/Trending';

const page = () => {
  return (
    <>
      <Uppertitle />
      <Navbar />
      <Hero />
      <HomeHead1 />
      <CustomPrevArrow />
      <Seen />
      <Trending />
      {/* <Footer /> */}
    </>
  );
};

export default page;
