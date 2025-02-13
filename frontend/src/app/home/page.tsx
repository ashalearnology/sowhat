/** @format */

import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Uppertitle from '@/components/Uppertitle';
import React from 'react';

const page = () => {
  return (
    <>
      <Uppertitle />
      <Navbar />
      <Hero />
      <Footer />
    </>
  );
};

export default page;
