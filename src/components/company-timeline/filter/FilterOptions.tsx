// components/FilterOptions.tsx
import React, { useState, useEffect } from 'react';
import SearchBar from '../../SearchBar';
import FilterButton from './FilterButton';
import { filterTags } from '../../../app/data/tags';
import { FilterType } from '../../../types/types';

const FilterOptions: React.FC = () => {
  const [activeFilters, setActiveFilters] = useState<FilterType[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleFilterClick = (label: FilterType) => {
    setActiveFilters((prevFilters) => {
      const isActive = prevFilters.includes(label);
      if (label === 'Sólo Facturas') {
        // Si "Sólo Facturas" está activado, desactiva los otros filtros
        return isActive ? [] : ['Sólo Facturas'];
      } else {
        // Si "Sólo Facturas" está activo y se activa otro filtro, desactiva "Sólo Facturas"
        if (isActive) {
          return prevFilters.filter((filter) => filter !== label);
        } else {
          return prevFilters.includes('Sólo Facturas') ? [label] : [...prevFilters, label];
        }
      }
    });
  };

  useEffect(() => {
    const newSelectedTags = new Set<string>();
    activeFilters.forEach(filter => {
      filterTags[filter].forEach(tag => newSelectedTags.add(tag));
    });
    setSelectedTags(Array.from(newSelectedTags));
  }, [activeFilters]);

  return (
    <div className="w-full sticky top-0 z-[9999] h-fit p-3 bg-white dark:bg-neutral-800 rounded-xl mb-6 shadow-xl shadow-neutral-900/10 dark:shadow-neutral-950">
      <div className='w-full justify-between items-center inline-flex '>
        <div className="justify-start items-center gap-3 flex">
          <SearchBar />
          <FilterButton label="Empresa" isActive={activeFilters.includes('Empresa')} onClick={handleFilterClick} />
          <FilterButton label="Productos" isActive={activeFilters.includes('Productos')} onClick={handleFilterClick} />
          <FilterButton label="Sólo Facturas" isActive={activeFilters.includes('Sólo Facturas')} onClick={handleFilterClick} />
        </div>
        <div className="px-4 py-1.5 bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-200/80 dark:hover:bg-neutral-600/80 transition-all cursor-pointer rounded-lg justify-start items-center gap-2.5 flex">
          <div className="text-neutral-900 dark:text-white text-sm font-medium font-['DM Sans'] leading-normal tracking-tight">Hoy</div>
        </div>
      </div>
      <div className="flex flex-wrap gap-x-2 h-fit">
        {selectedTags.map((tag, index) => (
          <span key={index} className="mt-2 bg-neutral-100 hover:bg-neutral-200/80 dark:bg-neutral-700 dark:hover:bg-neutral-600 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-600 px-2 py-1 rounded-lg text-xs font-normal font-['Inter'] leading-tight transition-all cursor-pointer">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default FilterOptions;
