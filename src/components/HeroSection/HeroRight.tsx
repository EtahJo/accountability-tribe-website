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
    <div className="grid grid-cols-2 gap-4">
      {squareItems.map(({ header, description }) => (
        <SquareComponent header={header} description={description} />
      ))}
    </div>
  );
};

export default HeroRight;
