// components/ThemeToggle.tsx
import { useEffect, useState } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.add(savedTheme);
    } else {
      setTheme('light');
    }
  }, []);

  const toggleTheme = () => {
    if (theme === 'dark') {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setTheme('light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    }
  };

  return (
    <button onClick={toggleTheme} className="text-black dark:text-white hover:bg-neutral-100 border border-neutral-200 dark:border-neutral-700 dark:hover:bg-neutral-700 rounded-full p-1.5 transition-all">
    {theme === 'dark' ? (
      <SunIcon className="w-6 h-6" />
    ) : (
      <MoonIcon className="w-6 h-6" />
    )}
  </button>
  );
};

export default ThemeToggle;
