
import React from 'react';
import SearchBar from '../../SearchBar';
import FilterButton from './FilterButton';


type FilterOptionsProps = {
};

const FilterOptions: React.FC<FilterOptionsProps> = (props) => {
    return (
        <>
            <div className="w-full sticky top-1 z-[9999] h-16 p-3 bg-white dark:bg-neutral-800 rounded-xl justify-between items-center inline-flex mb-6 shadow-xl shadow-neutral-900/10 dark:shadow-neutral-950">
                <div className="justify-start items-center gap-3 flex">
                    <SearchBar />
                    <FilterButton label="Empresa" />
                    <FilterButton label="Productos" />
                    <FilterButton label="Facturas" />
                </div>
                <div className="px-4 py-1.5 bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-200/80 dark:hover:bg-neutral-600/80 transition-all cursor-pointer rounded-lg justify-start items-center gap-2.5 flex">
                    <div className="text-neutral-900 dark:text-white text-sm font-medium font-['DM Sans'] leading-normal tracking-tight">Hoy</div>
                </div>
            </div>
            <div>
                {/* Acá irían un subconjunto de tags según lo seleccionado */}
            </div>
        </>
    );
};

export default FilterOptions;
