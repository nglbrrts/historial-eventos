import React from 'react';
import SearchBar from '../../components/SearchBar';
import MonthSelector from './MonthSelector';

type FiltersProps = {
};

const Filters: React.FC<FiltersProps> = (props) => {
  return (
    <div className='flex flex-row gap-2'>
      <SearchBar
        placeholder="Buscar por folio, razón social o RUT"
        defaultValue=""
        hoverWidthClass="hover:w-72"
        fixedWidthClass="w-72"
      />
      <MonthSelector />
    </div>
  );
};

export default Filters;
