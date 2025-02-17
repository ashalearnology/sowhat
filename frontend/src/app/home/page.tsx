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
import Line from '@/components/Line';
import Shop from '@/components/Shop';
import Readmore from '@/components/Readmore';
import Fade from '@/components/Fade';

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
      <Line />
      <Shop />
      <Readmore />
      <Fade />
      <Footer />
    </>
  );
};

export default page;
