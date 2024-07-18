// components/FilterButton.tsx
import React, { useState } from 'react';

type FilterButtonProps = {
    label: string;
};

const FilterButton: React.FC<FilterButtonProps> = ({ label }) => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
    };

    return (
        <div
            onClick={handleClick}
            className={`px-3 py-2 transition-all hover:bg-indigo-50 rounded-xl flex-col justify-start items-center inline-flex cursor-pointer ${
                isActive ? 'bg-indigo-600 text-white hover:bg-indigo-700' : ' text-gray-800'
            }`}
        >
            <div className="text-[13px] font-normal font-['Roboto'] leading-[18.59px] tracking-tight">
                {label}
            </div>
        </div>
    );
};

export default FilterButton;
