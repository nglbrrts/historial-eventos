'use client'

import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions, Label } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'

// Definir el tipo para las opciones
interface TimeOption {
  id: number;
  name: string;
}

const timeOptions: TimeOption[] = [
  { id: 1, name: 'Último mes' },
  { id: 2, name: 'Últimos 3 meses' },
  { id: 3, name: 'Últimos 6 meses' },
  { id: 4, name: 'Últimos 12 meses' },
]

export default function TimePeriodCombobox() {
  const [query, setQuery] = useState('')
  const [selectedOption, setSelectedOption] = useState<TimeOption | null>(null)

  const filteredOptions =
    query === ''
      ? timeOptions
      : timeOptions.filter((option) => {
          return option.name.toLowerCase().includes(query.toLowerCase())
        })

  return (
    <Combobox
      as="div"
      value={selectedOption}
      onChange={(option: TimeOption) => {
        setQuery('')
        setSelectedOption(option)
      }}
    >
      <Label className="block text-sm font-medium leading-6 text-neutral-900 dark:text-white">Seleccionar periodo</Label>
      <div className="relative mt-2">
        <ComboboxInput
          className="w-full rounded-md border-0 bg-white dark:bg-neutral-700 py-1.5 pl-3 pr-10 text-neutral-900 dark:text-white shadow-sm ring-1 ring-inset ring-neutral-300 dark:ring-neutral-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          onChange={(event) => setQuery(event.target.value)}
          onBlur={() => setQuery('')}
          displayValue={(option: TimeOption) => option?.name}
        />
        <ComboboxButton className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
          <ChevronUpDownIcon className="h-5 w-5 text-neutral-400" aria-hidden="true" />
        </ComboboxButton>

        {filteredOptions.length > 0 && (
          <ComboboxOptions className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-neutral-800 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {filteredOptions.map((option) => (
              <ComboboxOption
                key={option.id}
                value={option}
                className="group relative cursor-default select-none py-2 pl-3 pr-9 text-neutral-900 dark:text-white data-[focus]:bg-indigo-600 data-[focus]:text-white"
              >
                <span className="block truncate group-data-[selected]:font-semibold">{option.name}</span>

                <span className="absolute inset-y-0 right-0 hidden items-center pr-4 text-indigo-600 dark:text-indigo-400 group-data-[selected]:flex group-data-[focus]:text-white">
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
