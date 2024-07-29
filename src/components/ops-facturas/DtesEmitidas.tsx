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
    { folio: '12315', fecha: '03/04/24', company: 'ESTUDIO DE DISEÑO GALGA LIMITADA', rut: '76.860.236-4', monto: '$14.327.976', iva: '$2.722.315 IVA' },
    { folio: '346', fecha: '25/04/24', company: 'FISCOFÁCIL LTDA', rut: '71.901.649-3', monto: '$20.639.357', iva: '$3.921.478 IVA' },
    { folio: '2346', fecha: '25/04/24', company: 'DINÁMICASMARTDESK EIRL', rut: '76.149.954-1', monto: '$114.919.563', iva: '$21.834.717 IVA' },
    { folio: '468', fecha: '25/04/24', company: 'PIONEROSINPAPEL S.A', rut: '72.304.984-7', monto: '$71.582.336', iva: '$13.600.644 IVA' },
    { folio: '9945', fecha: '25/04/24', company: 'ÓRBITAMINERAL EIRL', rut: '78.419.495-0', monto: '$13.276.163', iva: '$2.522.471 IVA' },
    { folio: '12315', fecha: '03/04/24', company: 'ESTUDIO DE DISEÑO GALGA LIMITADA', rut: '76.860.236-4', monto: '$14.327.976', iva: '$2.722.315 IVA' },
    { folio: '346', fecha: '25/04/24', company: 'FISCOFÁCIL LTDA', rut: '71.901.649-3', monto: '$20.639.357', iva: '$3.921.478 IVA' },
    { folio: '2346', fecha: '25/04/24', company: 'DINÁMICASMARTDESK EIRL', rut: '76.149.954-1', monto: '$114.919.563', iva: '$21.834.717 IVA' },
    { folio: '468', fecha: '25/04/24', company: 'PIONEROSINPAPEL S.A', rut: '72.304.984-7', monto: '$71.582.336', iva: '$13.600.644 IVA' },
    { folio: '9945', fecha: '25/04/24', company: 'ÓRBITAMINERAL EIRL', rut: '78.419.495-0', monto: '$13.276.163', iva: '$2.522.471 IVA' },
]

const DtesEmitidas: React.FC<DtesEmitidasProps> = (props) => {
    return (
        <>
            <div className='flex flex-col md:flex-row  gap-2 justify-between p-2 rounded-2xl bg-white dark:bg-neutral-800'>
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
            <div className="min-w-full flex flex-col gap-1 font-['Inter']">
                <div className=' flex flex-row gap-0 text-sm font-semibold text-neutral-900 dark:text-white'>
                    <div className='w-[140px] py-4 px-4'>Documento</div>
                    <div className='flex-grow py-4 px-4'>Receptor</div>
                    <div className='w-[160px] py-4 px-4 text-right'>Monto total</div>
                    <div className='w-[150px] py-4 px-4 text-center'>Estado en SII</div>
                    <div className='w-14 py-4 pl-4 pr-3 text-sm text-neutral-900 dark:text-white font-medium'></div>
                </div>
                {documentos.map((documento) => (
                    <div className='bg-white hover:bg-gray-100/80 rounded-2xl border border-neutral-200 flex flex-row gap-0 cursor-pointer'>
                        <div className='w-[140px] py-4 pl-4 pr-3 text-sm  text-neutral-500 dark:text-neutral-300'>Folio N°{documento.folio}<br />{documento.fecha}</div>
                        <div className='flex-grow py-4 pl-4 pr-3 text-sm text-neutral-900 dark:text-white font-medium'>{documento.company}<br /><span className='text-neutral-500 dark:text-neutral-400 font-normal'>{documento.rut}</span></div>
                        <div className='w-[160px] py-4 pl-4 pr-3 text-sm text-neutral-900 dark:text-white font-medium text-right'>{documento.monto}<br /><span className='text-neutral-500 dark:text-neutral-400 font-normal'>{documento.iva}</span></div>
                        <div className='w-[150px] py-4 pl-4 pr-3 flex flex-col justify-center items-center align-middle'><Badge state='aprobada' /></div>
                        <div className='w-14 py-4 pl-4 pr-3 flex flex-col justify-center align-middle'><ChevronRightIcon width={20} /></div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default DtesEmitidas;
