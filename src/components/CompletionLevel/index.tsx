import React from 'react';
import { CompletionLeveltype } from '@/types/types';
import classNames from 'classnames';
import { AiFillStar } from 'react-icons/ai';

const CompletionLevel = ({
  completionStatement,
  percentage,
  title,
  completed,
  carriedOver,
  unCompleted,
}: CompletionLeveltype) => {
  return (
    <div className="bg-white rounded-full shadow-3xl my-7 ">
      <div className="bg-white rounded-full shadow-buttonInner w-full relative flex justify-between">
        <p className="absolute bg-pink rounded-full shadow-buttonInner -top-3 px-2">
          {title}
        </p>
        <div
          className={classNames(
            {
              ['w-[' + percentage + '%] rounded-l-full']: unCompleted,
              ['w-full rounded-full']: completed,
            },
            'bg-purple'
          )}
        >
          <p className="text-end text-white font-bold p-2 text-xl mr-4">
            {completed ? 'Completed' : percentage + '%'}
          </p>
        </div>
        {carriedOver && (
          <p className="text-gray-500 italic place-content-center mr-4">
            Carried Over
          </p>
        )}
        {completed && (
          <div className="absolute -top-5 right-0 ">
            <AiFillStar
              size={40}
              style={{
                color: '#F2ADEF',
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default CompletionLevel;
