import React, { ReactNode } from 'react';
import { PlusCircleIcon, ArrowPathIcon, CurrencyDollarIcon, DocumentIcon, DocumentTextIcon, Cog8ToothIcon } from '@heroicons/react/24/outline';

type TimelineItemProps = {
    origin: string;
    time: string;
    title: ReactNode;
    children: ReactNode;
    type: 'add' | 'sync' | 'terms' | 'simulation' | 'operation' | 'backoffice';
};

const iconMap = {
    add: <PlusCircleIcon width={18} className='text-emerald-500' />,
    sync: <ArrowPathIcon width={18} className='text-indigo-500' />,
    terms: <CurrencyDollarIcon width={18} className='text-emerald-500' />,
    simulation: <DocumentIcon width={18} className='text-indigo-500' />,
    operation: <DocumentTextIcon width={18} className='text-indigo-500' />,
    backoffice: <Cog8ToothIcon width={18} className='text-neutral-500' />,
};

const TimelineItem: React.FC<TimelineItemProps> = ({ origin, time, title, children, type }) => {
    return (
        <div className="flex space-x-3">
            <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
                <div className="relative z-10 size-7 flex justify-center items-center">
                    <div className="size-2 rounded-full bg-gray-400 dark:bg-neutral-600"></div>
                </div>
            </div>
            <div className="w-full h-fit p-3 bg-white rounded-lg flex-col justify-start items-start gap-3 inline-flex mb-5">
                <div className="self-stretch justify-between items-center inline-flex">
                    <div className="text-gray-500 text-sm font-normal font-['Inter']">{origin}</div>
                    <div className="text-gray-500 text-sm font-normal font-['Inter']">{time}</div>
                </div>
                <div className="self-stretch justify-start items-center gap-1 inline-flex">
                    {iconMap[type]}
                    <div className="grow shrink basis-0">
                        <span className="text-black text-base font-normal font-['Inter']">{title}</span>
                    </div>
                </div>
                <div className='w-full flex flex-col gap-1'>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default TimelineItem;
