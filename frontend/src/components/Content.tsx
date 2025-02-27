import React from 'react';

const Content = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-max text-center p-6">
      <h1 className="text-2xl md:text-4xl font-semibold my-5">
        <span className="block">Sustainability, Ethical</span>
        <span className="block">Production & Giving</span>
        <span className="block">Back</span>
      </h1>
      <p className="w-11/12 bg-yellow-300 text-gray-700 p-4 mt-3 mb-20">
        We know that the sustainability challenges in the fashion industry don’t have a quick fix, however, we are moving to a 100% sustainable ecosystem, one step at a time. With each purchase, you choose the size of the carbon footprint you leave on the planet, and we want to help you choose wisely.
      </p>
    </div>
  );
};

export default Content;