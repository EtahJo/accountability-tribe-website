import React from 'react';
import { HeaderButtonType } from '@/types/types';
import classNames from 'classnames';

const HeaderButton = ({ name }: HeaderButtonType) => {
  return (
    <div className="cursor-pointer">
      <p className="rounded-full bg-purple text-white font-bold text-3xl shadow-buttonInner p-2 text-center">
        {name}
      </p>
    </div>
  );
};

export default HeaderButton;
