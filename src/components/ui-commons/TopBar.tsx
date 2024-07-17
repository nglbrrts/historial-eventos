import React from 'react';
import SearchBar from "@/components/SearchBar";
import ThemeToggle from "./ThemeToggle";
import Link from 'next/link';
import { ArrowRightStartOnRectangleIcon } from '@heroicons/react/24/outline';

const TopBar: React.FC = () => {
    return (
        <header className=">flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-4 dark:bg-neutral-800 border-b border-neutral-100 dark:border-neutral-700">
            <nav className="max-w-full w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
                <div className="flex items-center justify-between gap-5">
                    <div className='flex items-center justify-start flex-row gap-5'>
                        <Link href="/" className="flex-none text-xl font-bold dark:text-white">Loki</Link>
                        <SearchBar />
                    </div>
                    <div className="sm:hidden">
                        <button type="button" className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-white dark:hover:bg-white/10" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
                            <svg className="hs-collapse-open:hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6" /><line x1="3" x2="21" y1="12" y2="12" /><line x1="3" x2="21" y1="18" y2="18" /></svg>
                            <svg className="hs-collapse-open:block hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                        </button>
                    </div>
                </div>
                <div id="navbar-collapse-with-animation" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
                    <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
                        <Link href="/" className="font-normal text-gray-600 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500">Empresas</Link>
                        <Link href="/configuracion" className="font-normal text-gray-600 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500">Configuraciones</Link>
                        <Link href="/eventos" className="font-normal text-gray-600 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500">Eventos</Link>

                        <button
                            type="button"
                            className="inline-flex items-center gap-x-1.5 rounded-xl px-3 py-2 text-sm font-normal text-neutral-900 dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all border border-neutral-200 dark:border-neutral-700"
                        >
                            Cerrar sesión
                            <ArrowRightStartOnRectangleIcon className="-mr-0.5 h-5 w-5" aria-hidden="true" />
                        </button>
                        <ThemeToggle />
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default TopBar;