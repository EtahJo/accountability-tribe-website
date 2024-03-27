import React from 'react';
import SquareComponent from '../SquareComponent/index';

const HeroRight = () => {
  const squareItems = [
    {
      header: '01',
      description: 'Share Your Story',
    },
    {
      header: '02',
      description: 'Begin or Join Tribe',
    },
    {
      header: '03',
      description: 'Set Daily Tasks',
    },
    {
      header: '04',
      description: 'Share Your Challenges',
    },
    {
      header: '05',
      description: 'Stay Accountable',
    },
  ];
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-start-1 col-end-2">
        <SquareComponent header="01" description="Share Your Story" />
      </div>
      <div className="col-start-7 col-end-8 ">
        <SquareComponent header="02" description="begin or Join Tribe" />
      </div>

      <div className="col-start-4 col-end-5">
        <SquareComponent header="03" description="Set Daily Tasks" />
      </div>

      <div className="col-start-1 col-end-2">
        <SquareComponent header="04" description="Share Your Challenges" />
      </div>
      <div className="col-start-7 col-end-8">
        <SquareComponent header="05" description="Stay Accountable" />
      </div>
    </div>
  );
};

export default HeroRight;
