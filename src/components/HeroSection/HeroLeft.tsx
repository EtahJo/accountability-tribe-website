import React from 'react';
import HeaderButton from '../Buttons/HeaderButton/index';

const HeroLeft = () => {
  return (
    <main className="grid grid-cols-2 gap-2 mt-7">
      <p className="text-6xl text-black font-bold col-span-1">
        FOLLOW OUR 5 STEP GAME PLAN TO KEEP
      </p>
      <div className=""></div>
      <p className="text-6xl text-white font-bold drop-shadow-lg col-span-2">
        YOU CONSISTENT
      </p>
      <div className="h-px bg-black" />
      <div />
      <HeaderButton name="GET STARTED" />
    </main>
  );
};

export default HeroLeft;
