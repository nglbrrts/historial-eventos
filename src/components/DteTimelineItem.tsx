import React, { ReactNode } from 'react';
import { CheckCircleIcon, PaperAirplaneIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';

type DteTimelineItemProps = {
    time: string;
    title: ReactNode;
    children?: ReactNode;
    type: 'created' | 'approved' | 'funded' | 'transferred' | 'unfunded';
};

const iconMap = {
    approved: <CheckCircleIcon width={18} className='text-teal-500' />,
    created: <PaperAirplaneIcon width={18} className='text-indigo-500' />,
    funded: <CurrencyDollarIcon width={18} className='text-teal-500' />,
    transferred: <PaperAirplaneIcon width={18} className='text-indigo-500' />,
    unfunded: <CurrencyDollarIcon width={18} className='text-neutral-500' />,

};

const DteTimelineItem: React.FC<DteTimelineItemProps> = ({ time, title, children, type }) => {
    return (
        <div className="flex space-x-3">
            <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
                <div className="relative z-10 size-7 flex justify-center items-center">
                    <div className="size-2 rounded-full bg-gray-400 dark:bg-neutral-600"></div>
                </div>
            </div>
            <div className="w-full h-fit p-3 bg-white dark:bg-neutral-800 rounded-lg flex-col justify-start items-start gap-2 inline-flex mb-5 border border-neutral-200 dark:border-neutral-700">
                <div className="self-stretch justify-start items-center gap-1 inline-flex">
                    {iconMap[type]}
                    <div className="grow shrink basis-0">
                        <span className="text-neutral-900 dark:text-white !leading-tight text-base font-normal font-['Inter']">{title}</span>
                    </div>
                    <div className="text-gray-600 dark:text-gray-400 text-sm font-normal font-['Inter']">{time}</div>
                </div>
                {children && (
                    <div className='w-full flex flex-col gap-1'>
                        {children}
                    </div>
                )}
            </div>
        </div>
    );
};

export default DteTimelineItem;
