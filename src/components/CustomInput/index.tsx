import React from 'react';
import { CustomInputType } from '@/types/types';

const CustomInput = ({
  name,
  type,
  placeholder,
  textArea,
  required,
}: CustomInputType) => {
  return (
    <div className="shadow-3xl bg-lightPink rounded-3xl p-px my-4">
      {textArea ? (
        <textarea
          name={name}
          required={required}
          className="bg-transparent p-2 w-full"
          placeholder={placeholder}
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          className="bg-transparent text-black p-2 w-full"
          required={required}
        />
      )}
    </div>
  );
};

export default CustomInput;
