import React from 'react';

type Tab = {
  name: string;
  href: string;
  current: boolean;
};

type TabPillsProps = {
  tabs: Tab[];
  onTabClick: (tab: Tab) => void;
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function TabPills({ tabs, onTabClick }: TabPillsProps) {
  return (
    <div className="w-fit mx-auto">
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Selecciona una pestaña
        </label>
        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
        <select
          id="tabs"
          name="tabs"
          defaultValue={tabs.find((tab) => tab.current)?.name}
          className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
          onChange={(e) => {
            const selectedTab = tabs.find((tab) => tab.name === e.target.value);
            if (selectedTab) {
              onTabClick(selectedTab);
            }
          }}
        >
          {tabs.map((tab) => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <nav aria-label="Tabs" className="flex space-x-4">
          {tabs.map((tab) => (
            <a
              key={tab.name}
              href={tab.href}
              aria-current={tab.current ? 'page' : undefined}
              className={classNames(
                tab.current ? 'bg-indigo-100 dark:bg-indigo-900/90 text-indigo-700 dark:text-indigo-400' : 'text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-400',
                'rounded-md px-3 py-2 text-sm font-medium',
              )}
              onClick={(e) => {
                e.preventDefault();
                onTabClick(tab);
              }}
            >
              {tab.name}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
