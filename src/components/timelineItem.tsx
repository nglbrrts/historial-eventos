import React from 'react';

const TimelineItem: React.FC = () => {
    return (
        <div className="flex space-x-3">
            <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
                <div className="relative z-10 size-7 flex justify-center items-center">
                    <div className="size-2 rounded-full bg-gray-400 dark:bg-neutral-600"></div>
                </div>
            </div>
            <div className="bg-slate-100 dark:bg-gray-800/50 rounded-lg flex space-x-2 text-gray-900 dark:text-white text-sm font-regular p-2 mb-4 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-500 font-light">10/06/24 12:00:00</span>
                <span>&#8226;</span>
                <span className="font-medium">Titulo del evento </span>
            </div>
        </div>
    )
}

export default TimelineItem;