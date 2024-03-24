import React from 'react';
import HeroLeft from './HeroLeft';
import HeroRight from './HeroRight';

const HeroSection = () => {
  return (
    <main className="grid grid-cols-2">
      <div>
        <HeroLeft />
      </div>
      <div>
        <HeroRight />
      </div>
    </main>
  );
};

export default HeroSection;
