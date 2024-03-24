import React from 'react';
import { SquareComponentType } from '@/types/types';

const SquareComponent = (props: SquareComponentType) => {
  return (
    <div className="relative my-1">
      <div className="bg-white rounded-3xl p-2  w-44 h-44 rotate-45" />
      <div className="absolute z-10 top-0 left-0.5">
        <div className="bg-purple rounded-full font-bold text-white w-20 h-20 text-center  m-auto">
          <h2 className="text-2xl text-center align-middle m-auto">
            {props.header}
          </h2>
        </div>
        <div>
          <p className="font-bold text-center">{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default SquareComponent;
