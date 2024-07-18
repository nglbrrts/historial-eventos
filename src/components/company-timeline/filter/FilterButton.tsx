import React, { useState } from 'react';

type FilterButtonProps = {
  label: string;
  onClick: (label: string) => void;
};

const FilterButton: React.FC<FilterButtonProps> = ({ label, onClick }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    onClick(label);
  };

  return (
    <div
      onClick={handleClick}
      className={`px-3 py-[7px] border border-neutral-100 dark:border-neutral-700/80 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 transition-all rounded-xl flex-col justify-start items-center inline-flex cursor-pointer ${
        isActive ? 'bg-indigo-600 text-white hover:bg-indigo-700' : ' text-gray-800 dark:text-white'
      }`}
    >
      <div className="text-[13px] font-normal font-['Roboto'] leading-[18.59px] tracking-tight">
        {label}
      </div>
    </div>
  );
};

export default FilterButton;
