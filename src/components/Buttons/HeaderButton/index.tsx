import React from 'react';
import { HeaderButton } from '@/types/types';

const HeaderButton = ({ name }: HeaderButton) => {
  return (
    <div className="">
      <p className="rounded-full bg-purple text-white font-bold text-3xl shadow-buttonInner p-2 text-center">
        {name}
      </p>
    </div>
  );
};

export default HeaderButton;
