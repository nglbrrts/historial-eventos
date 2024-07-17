import React from 'react';
import DteTimelineItem from './DteTimelineItem';
import DateDisplay from '../company-timeline/DateDisplay';
import Link from 'next/link';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import Tooltip from '../ui-commons/Tooltip';


const DteTimeline: React.FC = () => {
    return (

        <div className="h-full w-[400px] pb-20 overflow-scroll bg-white dark:bg-neutral-800 flex-col justify-start items-start gap-4 inline-flex">
            <div className=" bg-white dark:bg-neutral-800 p-3 self-stretch text-black dark:text-white text-base font-bold font-['Inter'] sticky top-0 flex flex-row justify-between">
                Detalle factura folio N°21414
                <Tooltip message="Descargar XML">
                    <button type="button" className="text-neutral-600 dark:text-white transition-all duration-150 bg-neutral-100 hover:bg-neutral-200 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-1 text-center inline-flex items-center dark:bg-neutral-600 dark:hover:bg-neutral-700 dark:focus:ring-blue-800" >
                        <ArrowDownTrayIcon width={20} />
                        <span className="sr-only">Descargar XML</span>
                    </button>
                </Tooltip>
            </div>
            <div className="self-stretch h-fit flex-col justify-start items-center gap-2 flex px-3">
                <div className="self-stretch justify-start items-start gap-2 inline-flex">
                    <div className="grow shrink basis-0 self-stretch p-2 bg-neutral-100 dark:bg-neutral-700 rounded-xl flex-col justify-start items-start gap-[9px] inline-flex">
                        <p className="text-neutral-600 dark:text-neutral-400 text-base font-normal font-['Inter']">Emisor</p>
                        <p className="text-neutral-800 dark:text-white text-sm font-bold font-['Inter'] leading-tight">ESTUDIO DE DISENO GALGA LIMITADA<br /></p>
                        <p className="text-neutral-600 dark:text-neutral-400 text-sm font-normal font-['Inter'] leading-tight">76.801.025-6</p>
                    </div>
                    <div className="grow shrink basis-0 self-stretch p-2 bg-neutral-100 dark:bg-neutral-700 rounded-xl flex-col justify-start items-start gap-[9px] inline-flex">
                        <p className="text-neutral-600 dark:text-neutral-400 text-base font-normal font-['Inter']">Receptor</p>
                        <p className="text-neutral-800 dark:text-white text-sm font-bold font-['Inter'] leading-tight">EMPRESA CONSTRUCTORA SPA<br /></p>
                        <p className="text-neutral-600 dark:text-neutral-400 text-sm font-normal font-['Inter'] leading-tight">72.145.567-8</p>
                    </div>
                </div>
                <div className='w-full rounded-xl border border-neutral-200 dark:border-neutral-700'>
                    <table className="w-full">
                        <tbody className="text-neutral-800 dark:text-white text-sm font-normal font-['Inter'] leading-snug">
                            <tr className="">
                                <td className="text-left px-3 py-[6px]">Tipo</td>
                                <td className="text-right px-3 py-[6px]">Afecta (34)</td>
                            </tr>
                            <tr className='bg-neutral-100 dark:bg-neutral-700/50'>
                                <td className="text-left px-3 py-[6px]">Monto</td>
                                <td className="text-right px-3 py-[6px]">$12.000.000</td>
                            </tr>
                            <tr className='font-bold'>
                                <td className="text-left px-3 py-[6px]">IVA</td>
                                <td className="text-right px-3 py-[6px]">$2.280.000</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="self-stretch text-neutral-600 dark:text-neutral-400 text-base font-normal font-['Inter'] px-3 bg-white dark:bg-neutral-800">Eventos</div>
            <div className='w-full pl-3 pr-3 pb-6'>
                <DateDisplay date="9 Octubre 2024" />
                <DteTimelineItem time="12:00" type="unfunded" title="Se deshabilita oferta" >
                </DteTimelineItem>
                <DteTimelineItem time="12:00" type="funded" title="Factura financiada por Guou" >
                </DteTimelineItem>
                <DteTimelineItem time="12:00" type="transferred" title="Cedida por el deudor a:" >
                    <div className="w-full px-2 py-1 bg-neutral-100 dark:bg-neutral-700 rounded text-black dark:text-white text-sm font-bold font-['Inter']">
                        EMPRESA CONSTRUCTORA SPA • 76.345.545-5
                    </div>
                </DteTimelineItem>
                <DteTimelineItem time="12:00" type="funded" title="Ingresa a operación" >
                    <div className="w-full px-2 py-1 bg-neutral-100 dark:bg-neutral-700 rounded text-black dark:text-white text-base font-normal font-['Inter']">
                        <Link href="#" className="text-indigo-600 dark:text-indigo-400 text-sm font-normal font-['Inter']">Financiamiento Directo N°124 🔗</Link>
                    </div>
                </DteTimelineItem>
                <DteTimelineItem time="12:00" type="funded" title="Se modifica oferta" >
                    <div className="w-full px-2 py-1 bg-neutral-100 dark:bg-neutral-700 rounded text-black dark:text-white text-sm font-bold font-['Inter']">
                        Dif. precio 1.2%
                    </div>
                </DteTimelineItem>
                <DateDisplay date="9 Octubre 2024" />

                <DteTimelineItem time="12:00" type="funded" title="Se habilita oferta " >
                    <div className="w-full px-2 py-1 bg-neutral-100 dark:bg-neutral-700 rounded text-black dark:text-white text-sm font-bold font-['Inter']">
                        Dif. precio 1.4%
                    </div>
                </DteTimelineItem>
                <DteTimelineItem time="12:00" type="approved" title="DTE Aprobada en SII" >
                </DteTimelineItem>
                <DteTimelineItem time="12:00" type="created" title="DTE emitida" >
                </DteTimelineItem>
                <DateDisplay date="9 Octubre 2024" />
            </div>

        </div>
    )
}

export default DteTimeline;