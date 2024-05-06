'use client';
import React, { useState } from 'react';
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
  Icon,
}: CustomInputType) => {
  return (
    <div>
      <div className="shadow-3xl bg-lightPink rounded-3xl px-2 py-px my-4 flex align-middle  ">
        {textArea ? (
          <textarea
            name={name}
            required={required}
            className="bg-transparent p-2 w-3/4 placeholder:text-black "
            placeholder={placeholder}
            onChange={changeEvent}
            value={value}
          />
        ) : (
          <input
            type={type}
            placeholder={placeholder}
            name={name}
            className="bg-transparent text-black p-2 w-11/12 placeholder:text-black focus-within:outline-none focus:outline-none focus-within:bg-transparent"
            required={required}
            onChange={changeEvent}
            value={value}
          />
        )}
        {Icon && (
          <div className="place-content-center cursor-pointer ">{Icon}</div>
        )}
      </div>
      {isFormSubmitted && !isValid && (
        <p className="text-red-500 font-bold">{errorMessage}</p>
      )}
    </div>
  );
};

export default withFormsy<CustomInputType, any>(CustomInput);
