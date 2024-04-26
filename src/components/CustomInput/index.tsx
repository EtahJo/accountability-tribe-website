import React from 'react';
import { CustomInputType } from '@/types/types';
import { withFormsy } from 'formsy-react';

const CustomInput = ({
  name,
  type,
  placeholder,
  textArea,
  required,
  changeEvent,
  value,
  errorMessage,
  isFormSubmitted,
  isValid,
}: CustomInputType) => {
  return (
    <div>
      <div className="shadow-3xl bg-lightPink rounded-3xl p-px my-4">
        {textArea ? (
          <textarea
            name={name}
            required={required}
            className="bg-transparent p-2 w-full placeholder:text-black"
            placeholder={placeholder}
            onChange={changeEvent}
            value={value}
          />
        ) : (
          <input
            type={type}
            placeholder={placeholder}
            name={name}
            className="bg-transparent text-black p-2 w-full placeholder:text-black focus-within:outline-none focus:outline-none"
            required={required}
            onChange={changeEvent}
            value={value}
          />
        )}
      </div>
      {isFormSubmitted && !isValid && (
        <p className="text-red-500 font-bold">{errorMessage}</p>
      )}
    </div>
  );
};

export default withFormsy<CustomInputType, any>(CustomInput);
