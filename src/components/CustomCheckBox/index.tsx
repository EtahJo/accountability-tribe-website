import React from 'react';
import { withFormsy } from 'formsy-react';
import { CustomCheckBoxProps } from '@/types/types';

const CustomCheckbox = ({ label, value }: CustomCheckBoxProps) => {
  return (
    <div className="flex">
      <label className="font-bold text-xl  cursor-pointer relative">
        <input
          type={'checkbox'}
          value={value}
          className="w-0 h-0 opacity-0 absolute peer"
        />
        <span className="border-4 w-8 h-8 bg-transparent border-black absolute rounded-lg top-0 left-0" />
        <span className="bg-pink rounded-full w-5 h-5 absolute z-20 top-1.5 left-1.5 hidden peer-checked:block" />
        <span className="ml-10"> {label}</span>
      </label>
    </div>
  );
};

export default withFormsy(CustomCheckbox);
