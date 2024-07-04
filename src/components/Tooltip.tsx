import React, { ReactNode } from 'react';

type TooltipProps = {
    message: string;
    children: ReactNode;
};

export default function Tooltip({ message, children }: TooltipProps) {
    return (
        <div className="group relative flex">
            <span className="absolute bottom-10 -left-12 text-center min-w-32 scale-0 transition-all rounded  bg-gray-800 p-1 text-xs text-white group-hover:scale-100">
                {message}
            </span>
            {children}
        </div>
    );
}
