import React from 'react';
import { HeaderButtonType } from '@/types/types';
import classNames from 'classnames';

const HeaderButton = ({ name, type, disabled }: HeaderButtonType) => {
  return (
    <div className="cursor-pointer">
      <button
        className="rounded-full bg-purple text-white font-bold text-3xl shadow-buttonInner p-2 text-center disabled:bg-gray-500"
        type={type}
        disabled={disabled}
      >
        {name}
      </button>
    </div>
  );
};

export default HeaderButton;
