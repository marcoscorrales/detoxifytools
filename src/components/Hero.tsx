import React from "react";

const Hero = () => {
  return (
      <div className="max-w-3xl mx-auto text-center mt-40">
        <h1 className="text-4xl font-medium sm:text-6xl">
          <span className="text-gray-800">
            Best{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-pink-500">
            Digital Detox
            </span>
            {" "}
            Tools to Recharge Your Life.
          </span>
        </h1>
        <p className="mt-5 lg:mt-8 text-base text-gray-600 sm:text-xl">
            Reclaim your time and find harmony in the digital world.
        </p>
      </div>
  );
};

export default Hero;
