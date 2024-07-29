import React from 'react';
import { ArrowUpOnSquareIcon, ArrowDownOnSquareIcon, CurrencyDollarIcon } from '@heroicons/react/20/solid';
import Badge from '../company-data/Badge';
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from 'next/link';
import SearchBar from '../../components/SearchBar';
import MonthSelector from './MonthSelector';

type DtesEmitidasProps = {
};

const documentos = [
    { folio: '12315', fecha: '03/04/24', company: 'ESTUDIO DE DISEÑO GALGA LIMITADA', rut: '76.860.236-4', monto: '$14.327.976', iva: '$2.722.315 IVA' },
    { folio: '346', fecha: '25/04/24', company: 'FISCOFÁCIL LTDA', rut: '71.901.649-3', monto: '$20.639.357', iva: '$3.921.478 IVA' },
    { folio: '2346', fecha: '25/04/24', company: 'DINÁMICASMARTDESK EIRL', rut: '76.149.954-1', monto: '$114.919.563', iva: '$21.834.717 IVA' },
    { folio: '468', fecha: '25/04/24', company: 'PIONEROSINPAPEL S.A', rut: '72.304.984-7', monto: '$71.582.336', iva: '$13.600.644 IVA' },
    { folio: '9945', fecha: '25/04/24', company: 'ÓRBITAMINERAL EIRL', rut: '78.419.495-0', monto: '$13.276.163', iva: '$2.522.471 IVA' },
]

const DtesEmitidas: React.FC<DtesEmitidasProps> = (props) => {
    return (
        <>
            <div className="inline-block min-w-full py-2 align-middle border border-neutral-200 dark:border-neutral-700 rounded-xl bg-white dark:bg-neutral-800">
                <div className='flex flex-col md:flex-row  gap-2 justify-between p-2 border-b border-neutral-200 dark:border-neutral-700'>
                    <div className='flex flex-col md:flex-row gap-3 align-middle justify-center'>
                        <SearchBar
                            placeholder="Buscar por folio, razón social o RUT"
                            defaultValue=""
                            hoverWidthClass="hover:w-72"
                            fixedWidthClass="w-72"
                        />
                        <MonthSelector />
                    </div>
                    <nav aria-label="Tabs" className="flex space-x-4 justify-center p-3">
                        <Link href="#" className='bg-indigo-100 dark:bg-indigo-900/90 flex flex-row align-middle justify-center gap-2 text-indigo-700 dark:text-indigo-400 rounded-md px-2 py-1 text-sm font-medium cursor-pointer'>
                            Emitidas <ArrowUpOnSquareIcon width={18} />
                        </Link>
                        <Link href="#" className='text-neutral-500 hover:text-neutral-700 flex flex-row align-middle justify-center gap-2 dark:hover:text-neutral-400 rounded-md px-2 py-1 text-sm font-medium cursor-pointer'>
                            Recibidas <ArrowDownOnSquareIcon width={18} />
                        </Link>
                        <Link href="#" className='text-neutral-500 hover:text-neutral-700 flex flex-row align-middle justify-center gap-2 dark:hover:text-neutral-400 rounded-md px-2 py-1 text-sm font-medium cursor-pointer'>
                            Ofertas <CurrencyDollarIcon width={18} />
                        </Link>
                    </nav>

                </div>
                <table className="min-w-full divide-y divide-gray-300 dark:divide-neutral-700 bg-white dark:bg-neutral-800">
                    <thead>
                        <tr>
                            <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-neutral-900 dark:text-white sm:pl-3">
                                Documento
                            </th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-neutral-900 dark:text-white">
                                Receptor
                            </th>
                            <th scope="col" className="px-3 py-3.5 text-right text-sm font-semibold text-neutral-900 dark:text-white">
                                Monto total
                            </th>
                            <th scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-neutral-900 dark:text-white">
                                Estado en SII
                            </th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-neutral-900 dark:text-white">

                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-neutral-800 font-['Inter']">
                        {documentos.map((documento) => (
                            <tr className="even:bg-gray-50 dark:even:bg-neutral-900/40 hover:bg-gray-200/40 dark:hover:bg-neutral-700/20 cursor-pointer transition-all">
                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm  text-neutral-500 dark:text-neutral-300 sm:pl-3">Folio N°{documento.folio}<br />{documento.fecha}</td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm"><span className='text-neutral-900 dark:text-white font-medium'>{documento.company}</span><br /><span className='text-neutral-500 dark:text-neutral-400'>{documento.rut}</span></td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-neutral-500 dark:text-neutral-300 text-right"><span className='text-neutral-900 dark:text-white font-medium'>{documento.monto}</span><br /><span className='text-neutral-500 dark:text-neutral-400'>{documento.iva}</span></td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-neutral-500 dark:text-neutral-300 text-center"><Badge state='aprobada' /></td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-neutral-500 dark:text-neutral-300"> <ChevronRightIcon width={20} /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </>
    );
};

export default DtesEmitidas;
