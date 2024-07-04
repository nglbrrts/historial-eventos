'use client';

import React, { useState } from 'react';
import Tab from './Tab';

interface TabNavigationProps {
  tabs: { name: string; href: string; current: boolean }[];
}

const TabNavigation: React.FC<TabNavigationProps> = ({ tabs }) => {
  const [currentTab, setCurrentTab] = useState(
    tabs.find((tab) => tab.current)?.name || tabs[0].name
  );

  const handleTabClick = (tabName: string) => {
    setCurrentTab(tabName);
  };

  return (
    <div>
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Elige una pestaña
        </label>
        <select
          id="tabs"
          name="tabs"
          className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-blue-300"
          value={currentTab}
          onChange={(e) => handleTabClick(e.target.value)}
        >
          {tabs.map((tab) => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <nav className="flex space-x-4" aria-label="Tabs">
          {tabs.map((tab) => (
            <Tab
              key={tab.name}
              name={tab.name}
              href={tab.href}
              current={tab.name === currentTab}
              onClick={() => handleTabClick(tab.name)}
            />
          ))}
        </nav>
      </div>
    </div>
  );
};

export default TabNavigation;
