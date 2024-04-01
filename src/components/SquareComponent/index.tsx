import React from 'react';
import { SquareComponentType } from '@/types/types';

const SquareComponent = (props: SquareComponentType) => {
  return (
    <div className="relative w-40 h-40 p-3">
      <div className="absoulte bg-white rounded-3xl p-2 w-40 h-40 rotate-45 shadow-buttonInner " />
      <div className="absolute z-10 top-[30px] left-[15px]">
        <div className="flex justify-center flex-col place-items-center">
          <h2 className="text-5xl max-w-20 font-bold text-white  bg-purple rounded-full p-2 ">
            {props.header}
          </h2>

          <div>
            <p className="font-bold text-center text-lg">{props.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SquareComponent;
