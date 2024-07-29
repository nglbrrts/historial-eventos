import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const months = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
];

const MonthSelector: React.FC = () => {
  const currentMonth = new Date().getMonth();
  const [selectedMonth, setSelectedMonth] = useState(currentMonth);

  const handlePrevMonth = () => {
    setSelectedMonth((prevMonth) => (prevMonth === 0 ? 11 : prevMonth - 1));
  };

  const handleNextMonth = () => {
    setSelectedMonth((prevMonth) => (prevMonth === 11 ? 0 : prevMonth + 1));
  };

  return (
    <div className="h-12 px-1 flex items-center justify-between bg-white dark:bg-neutral-800 rounded-full border border-gray-200 dark:border-neutral-700 min-w-[200px]">
      <button onClick={handlePrevMonth} className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded-full">
        <ChevronLeftIcon className="h-5 w-5 text-neutral-600 hover:text-neutral-800 dark:text-neutral-300" />
      </button>
      <span className="mx-4 font-medium text-sm dark:text-white text-neutral-900">{months[selectedMonth]}</span>
      <button onClick={handleNextMonth} className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded-full">
        <ChevronRightIcon className="h-5 w-5 text-neutral-600 hover:text-neutral-800 dark:text-neutral-300" />
      </button>
    </div>
  );
};

export default MonthSelector;
