import React from 'react';
import { CompletionLeveltype } from '@/types/types';

const CompletionLevel = ({
  completionStatement,
  percentage,
  message,
  completed,
  carriedOver,
}: CompletionLeveltype) => {
  return (
    <div className="bg-white rounded-full">
      <p className="absolute bg-pink rounded-full shadow-buttonInner">
        {message}
      </p>
    </div>
  );
};

export default CompletionLevel;
