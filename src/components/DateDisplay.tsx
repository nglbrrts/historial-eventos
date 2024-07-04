import React from 'react';

type DateDisplayProps = {
  date: string;
};

const DateDisplay: React.FC<DateDisplayProps> = ({ date }) => {
  return (
    <div className="w-[120px] h-[43px] py-3 justify-center items-center gap-2 inline-flex">
      <div className="text-gray-600 dark:text-gray-400 text-base font-normal font-['Inter']">
        {date}
      </div>
    </div>
  );
};

export default DateDisplay;
