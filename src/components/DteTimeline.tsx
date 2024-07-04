import React from 'react';

const DteTimeline: React.FC = () => {
    return (

        <div className="w-[360px] h-full p-3 bg-white dark:bg-neutral-800 flex-col justify-start items-start gap-4 inline-flex">
            <div className="self-stretch text-black dark:text-white text-base font-bold font-['Inter']">Detalle factura folio N°21414</div>
            <div className="self-stretch h-fit flex-col justify-start items-center gap-2 flex">
                <div className="self-stretch justify-start items-start gap-2 inline-flex">
                    <div className="grow shrink basis-0 self-stretch p-2 bg-neutral-100 dark:bg-neutral-700 rounded-xl flex-col justify-start items-start gap-[9px] inline-flex">
                        <div className="text-neutral-600 dark:text-neutral-400 text-base font-normal font-['Inter']">Emisor</div>
                        <div className="self-stretch"><span className="text-neutral-800 dark:text-white text-sm font-bold font-['Inter'] leading-tight">ESTUDIO DE DISENO GALGA LIMITADA<br /></span><span className="text-neutral-600 dark:text-neutral-400 text-sm font-normal font-['Inter'] leading-tight">76.801.025-6</span></div>
                    </div>
                    <div className="grow shrink basis-0 self-stretch p-2 bg-neutral-100 dark:bg-neutral-700 rounded-xl flex-col justify-start items-start gap-[9px] inline-flex">
                        <div className="text-neutral-600 dark:text-neutral-400 text-base font-normal font-['Inter']">Receptor</div>
                        <div className="self-stretch"><span className="text-neutral-800 dark:text-white text-sm font-bold font-['Inter'] leading-tight">EMPRESA CONSTRUCTORA SPA<br /></span><span className="text-neutral-600 dark:text-neutral-400 text-sm font-normal font-['Inter'] leading-tight">79.801.025-6</span></div>
                    </div>
                </div>
                <div className='w-full rounded-xl border border-neutral-200 dark:border-neutral-700'>
                    <table className="w-full">
                        <tbody className="text-neutral-800 dark:text-white text-sm font-normal font-['Inter'] leading-snug">
                            <tr className="">
                                <td className="text-left px-3 py-[6px]">Tipo</td>
                                <td className="text-right px-3 py-[6px]">Afecta (34)</td>
                            </tr>
                            <tr>
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
            <div className="self-stretch text-neutral-600 dark:text-neutral-400 text-base font-normal font-['Inter']">Eventos</div>

        </div>
    )
}

export default DteTimeline;