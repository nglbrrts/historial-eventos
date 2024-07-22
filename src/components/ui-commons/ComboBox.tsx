'use client'

import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions, Label } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'

type Company = {
  id: number;
  name: string;
  rut: string;
};

type ComboBoxProps = {
  companies: Company[];
  label: string;
};

export default function ComboBox({ companies, label }: ComboBoxProps) {
  const [query, setQuery] = useState('');
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);

  const filteredCompanies =
    query === ''
      ? companies
      : companies.filter((company) => {
          return company.name.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <Combobox
      as="div"
      value={selectedCompany}
      onChange={(company: Company) => {
        setQuery('');
        setSelectedCompany(company);
      }}
      className='h-14 w-[500px] max-w-[90%] mx-auto'
    >
      <div className="relative mt-2">
        <ComboboxInput
          className="w-full pr-8 pl-5 rounded-xl z-0 focus:shadow focus:outline-none border border-neutral-200"
          onChange={(event) => setQuery(event.target.value)}
          onBlur={() => setQuery('')}
          displayValue={(company: Company) => company?.name || ''}
          placeholder={label}
        />
        <ComboboxButton className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
          <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </ComboboxButton>

        {filteredCompanies.length > 0 && (
          <ComboboxOptions className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {filteredCompanies.map((company) => (
              <ComboboxOption
                key={company.id}
                value={company}
                className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
              >
                <span className="block truncate group-data-[selected]:font-semibold">{company.name}</span>
                <span className="block truncate text-sm text-gray-500">{company.rut}</span>

                <span className="absolute inset-y-0 right-0 hidden items-center pr-4 text-indigo-600 group-data-[selected]:flex group-data-[focus]:text-white">
                  <CheckIcon className="h-5 w-5" aria-hidden="true" />
                </span>
              </ComboboxOption>
            ))}
          </ComboboxOptions>
        )}
      </div>
    </Combobox>
  )
}
