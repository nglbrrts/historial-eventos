
import React from 'react';

type FilterOptionsProps = {
};

const FilterOptions: React.FC<FilterOptionsProps> = (props) => {
    return (
        <div className="w-full justify-start items-center gap-3 inline-flex pb-10">
            <div className="text-gray-500 text-sm font-normal font-['Inter']">Filtrar eventos</div>
            <div className="px-3 py-[7px] bg-indigo-600 rounded-[100px] flex-col justify-start items-center inline-flex">
                <div className="text-white text-[13px] font-normal font-['Roboto'] leading-[18.59px] tracking-tight">Empresa</div>
            </div>
            <div className="px-3 py-[7px] bg-indigo-600 rounded-[100px] flex-col justify-start items-center inline-flex">
                <div className="text-white text-[13px] font-normal font-['Roboto'] leading-[18.59px] tracking-tight">Productos</div>
            </div>
            <div className="px-3 py-[7px] rounded-[100px] flex-col justify-start items-center inline-flex">
                <div className="text-black/opacity-90 text-[13px] font-normal font-['Roboto'] leading-[18.59px] tracking-tight">Facturas</div>
            </div>
        </div>
    );
};

export default FilterOptions;
