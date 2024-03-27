import React from 'react';
import HeroLeft from './HeroLeft';
import HeroRight from './HeroRight';

const HeroSection = () => {
  return (
    <main className="grid grid-cols-12 my-20">
      <div className="col-start-2 col-end-8">
        <HeroLeft />
      </div>

      <div className="col-start-8 col-end-11">
        <HeroRight />
      </div>
    </main>
  );
};

export default HeroSection;
