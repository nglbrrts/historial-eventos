import React, { ReactNode } from 'react';
import { PlusCircleIcon, ArrowPathIcon, CurrencyDollarIcon, DocumentIcon, DocumentTextIcon, Cog8ToothIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

type TimelineItemProps = {
    origin: string;
    time: string;
    title: ReactNode;
    children?: ReactNode;
    type: 'add' | 'sync' | 'terms' | 'simulation' | 'operation' | 'backoffice' | 'transferred';
    buttonUrl?: string;
    buttonLabel?: string;
    tags?: string[];
};

const iconMap = {
    add: <PlusCircleIcon width={18} className='text-teal-500' />,
    sync: <ArrowPathIcon width={18} className='text-indigo-500' />,
    terms: <CurrencyDollarIcon width={18} className='text-teal-500' />,
    simulation: <DocumentIcon width={18} className='text-indigo-500' />,
    operation: <DocumentTextIcon width={18} className='text-indigo-500' />,
    backoffice: <Cog8ToothIcon width={18} className='text-neutral-500' />,
    transferred: <PaperAirplaneIcon width={18} className='text-indigo-500' />,
};

const TimelineItem: React.FC<TimelineItemProps> = ({ origin, time, title, children, type, buttonUrl, buttonLabel, tags = [] }) => {
    return (
        <div className="flex space-x-3 inter">
            <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
                <div className="relative z-10 size-7 flex justify-center items-center">
                    <div className="size-2 rounded-full bg-gray-400 dark:bg-neutral-600"></div>
                </div>
            </div>
            <div className="w-full h-fit p-3 bg-white dark:bg-neutral-800 rounded-lg flex-col justify-start items-start gap-3 inline-flex mb-5 border border-neutral-200 dark:border-neutral-700">
                <div className="self-stretch justify-between items-center inline-flex text-gray-600 dark:text-gray-400 text-sm font-normal">
                    <div>{origin}</div>
                    <div>{time}</div>
                </div>
                <div className="self-stretch justify-start items-center gap-1 inline-flex">
                    {iconMap[type]}
                    <div className="grow shrink basis-0">
                        <span className="text-neutral-900 dark:text-white text-base font-normal">{title}</span>
                    </div>
                    {buttonUrl && buttonLabel && (
                        <Link href={buttonUrl}>
                            <div className="w-fit h-6 px-1 py-0.5 bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-900/50 dark:hover:bg-indigo-900 transition-all rounded justify-start items-center gap-1 inline-flex">
                                <p className="text-indigo-600 dark:text-indigo-400 text-sm font-normal leading-none">{buttonLabel}</p>
                            </div>
                        </Link>
                    )}
                </div>
                {children && (
                    <div className='w-full flex flex-col gap-1'>
                        {children}
                    </div>
                )}
               <div className='self-stretch flex flex-wrap gap-2 mt-2 opacity-40 hover:opacity-100 transition-all'>
                    {tags.map((tag, index) => (
                        <span key={index} className="bg-neutral-100 hover:bg-neutral-200/80 dark:bg-neutral-700 dark:hover:bg-neutral-600 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-600 px-2 py-1 rounded-lg text-xs font-normal leading-tight transition-all cursor-pointer">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
            
        </div>
    );
};

export default TimelineItem;
