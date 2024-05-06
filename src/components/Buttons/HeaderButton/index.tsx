import React from 'react';
import { HeaderButtonType } from '@/types/types';

const HeaderButton = ({ name, type, disabled }: HeaderButtonType) => {
  return (
    <div className="cursor-pointer w-full">
      <button
        className="rounded-full bg-purple text-white font-bold text-3xl shadow-buttonInner p-2 px-10 text-center disabled:bg-gray-500 w-full"
        type={type}
        disabled={disabled}
      >
        {name}
      </button>
    </div>
  );
};

export default HeaderButton;
