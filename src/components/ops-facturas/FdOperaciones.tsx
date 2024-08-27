import React from 'react';
import { ArrowUpOnSquareIcon, ArrowDownOnSquareIcon, CurrencyDollarIcon } from '@heroicons/react/20/solid';
import Badge from '../company-data/Badge';
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from 'next/link';
import SearchBar from '../SearchBar';
import MonthSelector from './MonthSelector';

type FdOperacionesProps = {
};

const operaciones = [
    { operacion: '12315', fecha: '03/04/24', facturas: '1', monto: '$14.327.976' },
    { operacion: '346', fecha: '25/04/24', facturas: '13', monto: '$20.639.357' },
    { operacion: '2346', fecha: '25/04/24', facturas: '62', monto: '$114.919.563' },
    { operacion: '468', fecha: '25/04/24', facturas: '134', monto: '$71.582.336' },
    { operacion: '9945', fecha: '25/04/24', facturas: '73', monto: '$13.276.163' },
]

const FdOperaciones: React.FC<FdOperacionesProps> = (props) => {
    return (
        <div className="inline-block min-w-full py-2 align-middle border border-neutral-300 dark:border-neutral-700 rounded-xl bg-white dark:bg-neutral-800">
            <div className='flex flex-row gap-2 justify-between p-2 border-b border-neutral-300 dark:border-neutral-700'>
                <div className='flex flex-row gap-3 align-middle justify-start'>
                    <SearchBar
                        placeholder="Buscar por N° de Operación, Facturas, Estado, etc."
                        defaultValue=""
                        hoverWidthClass="hover:w-96"
                        fixedWidthClass="w-96"
                    />
                    <MonthSelector />
                </div>
                <nav aria-label="Tabs" className="flex space-x-4 p-3">
                    <Link href="#" className='bg-indigo-100 dark:bg-indigo-900/90 flex flex-row align-middle justify-center gap-2 text-indigo-700 dark:text-indigo-400 rounded-md px-2 py-1 text-sm font-medium cursor-pointer'>
                        Operaciones <ArrowUpOnSquareIcon width={18} />
                    </Link>
                    <Link href="#" className='text-neutral-500 hover:text-neutral-700 flex flex-row align-middle justify-center gap-2 dark:hover:text-neutral-400 rounded-md px-2 py-1 text-sm font-medium cursor-pointer'>
                        Simulaciones <ArrowDownOnSquareIcon width={18} />
                    </Link>
                </nav>
            </div>

            <table className="min-w-full divide-y divide-gray-300 dark:divide-neutral-700 bg-white dark:bg-neutral-800">
                <thead>
                    <tr>
                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-neutral-900 dark:text-white sm:pl-3">
                            N° operación
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-neutral-900 dark:text-white">
                            Fecha solicitud
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-neutral-900 dark:text-white">
                            N° facturas
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-right text-sm font-semibold text-neutral-900 dark:text-white">
                            Monto total
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-neutral-900 dark:text-white">
                            Estado
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-neutral-900 dark:text-white">
                            
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white dark:bg-neutral-800 inter">
                    {operaciones.map((operacion) => (
                        <tr className="even:bg-gray-50 dark:even:bg-neutral-900/40 hover:bg-gray-200/40 dark:hover:bg-neutral-700/20 cursor-pointer transition-all">
                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm  text-neutral-500 dark:text-neutral-300 sm:pl-3">{operacion.operacion}<br /></td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm"><span className='text-neutral-900 dark:text-white font-medium'>{operacion.fecha}</span></td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-neutral-500 dark:text-neutral-300"><span className='text-neutral-900 dark:text-white font-medium'>{operacion.facturas}</span></td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-right text-neutral-900 dark:text-white font-medium">{operacion.monto}</td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-neutral-500 dark:text-neutral-300 text-center"> <Badge state='abonada' /></td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-neutral-500 dark:text-neutral-300 text-center"> <ChevronRightIcon width={20} /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default FdOperaciones;
