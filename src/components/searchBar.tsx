import React from 'react';

const SearchBar: React.FC = () => {
    return (
        <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3.5">
                <svg className="flex-shrink-0 size-4 text-gray-400 dark:text-white/60" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                </svg>
            </div>
            <input className="py-3 hover:ps-10 pe-4 block w-12 h-12 hover:w-64 transition-all duration-300 ease-in-out border-gray-200 rounded-full text-sm focus:border-indigo-500 focus:ring-indigo-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 placeholder-transparent  hover:placeholder-neutral-600 dark:hover:placeholder-neutral-400" type="text" placeholder="Buscar empresas" value="" data-hs-combo-box-input="" />
        </div>
    )
}

export default SearchBar;