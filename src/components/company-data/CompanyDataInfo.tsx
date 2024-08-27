import React from 'react';

type CompanyDataInfoProps = {
  children: React.ReactNode;
  title: string;
};

const CompanyDataInfo: React.FC<CompanyDataInfoProps> = ({ children, title }) => {
  return (
    <div className="self-stretch justify-between items-center inline-flex">
      <div className="grow shrink basis-0 text-gray-800 dark:text-white text-sm font-normal inter">
        {title}
      </div>
      <div className="grow shrink basis-0 text-right text-gray-600 dark:text-neutral-400 text-xs font-normal inter flex justify-end items-center gap-2">
        {children}
      </div>
    </div>
  );
};

export default CompanyDataInfo;
