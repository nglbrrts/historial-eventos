import React, { useState } from 'react';

type SearchBarProps = {
    placeholder?: string;
    defaultValue?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    hoverWidthClass?: string;
    fixedWidthClass?: string;
};

const SearchBar: React.FC<SearchBarProps> = ({
    placeholder = 'Buscar...',
    defaultValue = '',
    onChange,
    hoverWidthClass = 'hover:w-56',
    fixedWidthClass = 'w-56'
}) => {
    const [isFocused, setIsFocused] = useState(false);
    const [inputValue, setInputValue] = useState(defaultValue);

    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
        if (onChange) {
            onChange(event);
        }
    };

    return (
        <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center -mt-1 pointer-events-none z-20 ps-3.5">
                <svg className="flex-shrink-0 size-4 text-gray-400 dark:text-white/60" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                </svg>
            </div>
            <input
                className={`py-3 ps-10 pe-2 block w-12 h-12 transition-all duration-300 ease-in-out border-gray-200 rounded-full text-sm focus:border-indigo-500 focus:ring-blue-300 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 placeholder-transparent hover:placeholder-neutral-600 dark:hover:placeholder-neutral-400 ${
                    isFocused || inputValue ? fixedWidthClass : hoverWidthClass
                }`}
                type="text"
                placeholder={placeholder}
                value={inputValue}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
                data-hs-combo-box-input=""
            />
        </div>
    );
};

export default SearchBar;
