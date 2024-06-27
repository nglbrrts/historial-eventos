'use client';

import React from 'react';

interface TabProps {
  name: string;
  href: string;
  current: boolean;
  onClick: () => void;
}

const Tab: React.FC<TabProps> = ({ name, href, current, onClick }) => {
  const classNames = (...classes: string[]) => {
    return classes.filter(Boolean).join(' ');
  };

  return (
    <a
      href={href}
      className={classNames(
        current ? 'bg-indigo-100 text-indigo-700' : 'text-gray-500 hover:text-gray-700',
        'rounded-md px-3 py-2 text-sm font-medium'
      )}
      aria-current={current ? 'page' : undefined}
      onClick={onClick}
    >
      {name}
    </a>
  );
};

export default Tab;
