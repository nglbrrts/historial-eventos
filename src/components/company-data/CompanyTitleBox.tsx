import React from 'react';
import { ChevronLeftIcon,  } from '@heroicons/react/24/outline';

const CompanyTitleBox: React.FC = () => {
    return (
        <div className="self-stretch h-fit flex-col justify-start items-start gap-3 flex">
            <div className="self-stretch p-2 bg-neutral-100 dark:bg-neutral-700 rounded-xl justify-start items-center gap-3 inline-flex text-left">
                <button type="button" className="text-neutral-900 dark:text-white transition-all duration-150 bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-700 dark:hover:bg-neutral-600 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-1 text-center inline-flex items-center  dark:focus:ring-blue-800" >
                    <ChevronLeftIcon width={20} />
                </button>
                <div className="grow shrink basis-0"><span className="text-neutral-800 dark:text-white text-sm font-bold font-['Inter'] leading-tight">ESTUDIO DE DISENO GALGA LIMITADA<br /></span><span className="text-neutral-600 dark:text-neutral-400 text-sm font-normal font-['Inter'] leading-tight">76.801.025-6</span></div>
            </div>
        </div>
    )
}

export default CompanyTitleBox;