import React from 'react';

type DateDisplayProps = {
  date: string;
};

const DateDisplay: React.FC<DateDisplayProps> = ({ date }) => {
  return (
    <div className="w-full  py-3 justify-start items-center gap-2 inline-flex">
      <div className="text-neutral-600 dark:text-neutral-400 text-base font-normal inter">
        {date}
      </div>
    </div>
  );
};

export default DateDisplay;
