import React from 'react';
import TimelineItem from './TimelineItem';
import DateDisplay from './DateDisplay';
import Link from 'next/link';
import TimelineStepper from './TimelineStepper';
import { FDstage01, FDstage02, FDstage03, FDstage04, FDstage05 } from '../../app/data/fundingstages'
import FilterOptions from './FilterOptions';

type EventTimelineProps = {
    onLinkClick: () => void;
};

const EventTimeline: React.FC<EventTimelineProps> = ({ onLinkClick }) => {
    return (
        <div className='max-w-[670px] mx-auto pb-20 z-50'>
            
            <FilterOptions  />
            <TimelineItem origin="Juan Pérez" time="12:00" type="terms" buttonLabel='Descargar XML' buttonUrl='#'  title="Emitió la factura folio N°21414 a:">
                <div className="w-full px-2 py-1 bg-neutral-100 dark:bg-neutral-700 rounded text-black dark:text-white text-base font-normal font-['Inter']">
                    EMPRESA CONSTRUCTORA SPA • $1.125.737 • <Link onClick={onLinkClick} href="#" className="text-indigo-600 dark:text-indigo-400 text-base font-normal font-['Inter']">Ver factura 🔗</Link>
                </div>
            </TimelineItem>
            <TimelineItem origin="Guou Finance" time="12:00" type="backoffice" tags={['Abono', 'Operación', 'Pronto pago']} title="Abonó la operación de financiamiento Pronto Pago N°352">
                <div className="w-full px-2 py-1 bg-neutral-100 dark:bg-neutral-700 rounded text-black dark:text-white text-base font-normal font-['Inter'] flex flex-row justify-between">
                    <div> 12 facturas • $17.345.667 • <Link href="#" className="text-indigo-600 dark:text-indigo-400 text-base font-normal font-['Inter']">Ver operación N°352 🔗</Link>
                    </div>
                    <div>
                        <TimelineStepper stages={FDstage05} />
                    </div>
                </div>
            </TimelineItem>
            <TimelineItem origin="Juan Pérez" time="12:00" type="transferred" tags={['Cesión', 'Operación', 'Pronto pago']} title="Cedió las facturas de la operación de financiamiento Pronto Pago N°352">
                <div className="w-full px-2 py-1 bg-neutral-100 dark:bg-neutral-700 rounded text-black dark:text-white text-base font-normal font-['Inter'] flex flex-row justify-between">
                    <div> 12 facturas • $17.345.667 • <Link href="#" className="text-indigo-600 dark:text-indigo-400 text-base font-normal font-['Inter']">Ver operación N°352 🔗</Link>
                    </div>
                    <div>
                        <TimelineStepper stages={FDstage04} />
                    </div>
                </div>
            </TimelineItem>
            <TimelineItem origin="Plataforma Gestión Comercial" time="12:00" type="backoffice" tags={['Aprobación', 'Operación', 'Pronto pago']} title="Aprobó la operación de financiamiento Pronto Pago N°352">
                <div className="w-full px-2 py-1 bg-neutral-100 dark:bg-neutral-700 rounded text-black dark:text-white text-base font-normal font-['Inter'] flex flex-row justify-between">
                    <div> 12 facturas • $17.345.667 • <Link href="#" className="text-indigo-600 dark:text-indigo-400 text-base font-normal font-['Inter']">Ver operación N°352 🔗</Link>
                    </div>
                    <div>
                        <TimelineStepper stages={FDstage03} />
                    </div>
                </div>
            </TimelineItem>
            <DateDisplay date="12 Octubre 2024" />
            <TimelineItem origin="Juan Pérez" time="12:00" type="operation" buttonLabel='Descargar XML' buttonUrl='#' tags={['Operación', 'Pronto pago']} title="Cargó los XML de la simulación de financiamiento Pronto Pago N°1251, se crea operación asociada">
                <div className="w-full px-2 py-1 bg-neutral-100 dark:bg-neutral-700 rounded text-black dark:text-white text-base font-normal font-['Inter'] flex flex-row justify-between">
                    <div> 12 facturas • $17.345.667 • <Link href="#" className="text-indigo-600 dark:text-indigo-400 text-base font-normal font-['Inter']">Ver operación N°352 🔗</Link>
                    </div>
                    <div>
                        <TimelineStepper stages={FDstage02} />
                    </div>
                </div>
            </TimelineItem>
            <TimelineItem origin="Juan Pérez" time="12:00" type="simulation" buttonLabel='Reenviar simulación' buttonUrl='#' tags={['Simulación', 'Pronto pago']} title="Creó una simulación de financiamiento Pronto Pago">
                <div className="w-full px-2 py-1 bg-neutral-100 dark:bg-neutral-700 rounded text-black dark:text-white text-base font-normal font-['Inter'] flex flex-row justify-between">
                    <div> 12 facturas • $17.345.667 • <Link href="#" className="text-indigo-600 dark:text-indigo-400 text-base font-normal font-['Inter']">Ver simulación N°1251 🔗</Link>
                    </div>
                    <div>
                        <TimelineStepper stages={FDstage01} />
                    </div>
                </div>
            </TimelineItem>
            <TimelineItem origin="Rolando Peña" time="12:00" type="terms" tags={['Condiciones comerciales', 'Pronto pago']} title="actualizó las condiciones comerciales:">
                <div className="w-full px-2 py-1 bg-neutral-100 dark:bg-neutral-700 rounded text-black dark:text-white text-base font-normal font-['Inter']">
                    Se <b>deshabilita</b> Pronto Pago cerrado
                </div>
            </TimelineItem>
            <TimelineItem origin="Rolando Peña" time="12:00" type="terms" tags={['Condiciones comerciales', 'Pronto pago']} title="actualizó las condiciones comerciales:">
                <div className="w-full px-2 py-1 bg-neutral-100 dark:bg-neutral-700 rounded text-black dark:text-white text-base font-normal font-['Inter']">
                    Se <b>modifica</b> Pronto Pago cerrado <Link href="#" className="text-indigo-600 dark:text-indigo-400 text-base font-normal font-['Inter']">Ver condiciones 🔗</Link>
                </div>
            </TimelineItem>
            <TimelineItem origin="Rolando Peña" time="12:00" type="terms" tags={['Condiciones comerciales', 'Pronto pago']} title="actualizó las condiciones comerciales:">
                <div className="w-full px-2 py-1 bg-neutral-100 dark:bg-neutral-700 rounded text-black dark:text-white text-base font-normal font-['Inter']">
                    Se <b>habilita</b> Pronto Pago cerrado <Link href="#" className="text-indigo-600 dark:text-indigo-400 text-base font-normal font-['Inter']">Ver condiciones 🔗</Link>
                </div>
            </TimelineItem>
            <TimelineItem origin="Juan Pérez" time="12:00" type="sync" buttonLabel='Volver a extraer data' buttonUrl='#' tags={['Sincronización']} title={<><b>Sincronizó</b> información desde el SII:</>}>
                <div className="w-full h-fit flex-col justify-start items-start gap-1 inline-flex">
                    <div className="w-full px-2 py-1 bg-neutral-100 dark:bg-neutral-700 rounded text-black dark:text-white text-base font-normal font-['Inter']">
                        Se obtuvieron <Link href="#" className="text-indigo-600 dark:text-indigo-400 text-base font-normal font-['Inter']">1.029 facturas 🔗</Link>
                    </div>
                    <div className="w-full px-2 py-1 bg-neutral-100 dark:bg-neutral-700 rounded text-black dark:text-white text-base font-normal font-['Inter']">
                        Se obtuvieron <Link href="#" className="text-indigo-600 dark:text-indigo-400 text-base font-normal font-['Inter']">285 cesiones 🔗</Link>
                    </div>
                    <div className="w-full px-2 py-1 bg-neutral-100 dark:bg-neutral-700 rounded text-black dark:text-white text-base font-normal font-['Inter']">
                        Se actualizaron los  <Link href="#" className="text-indigo-600 dark:text-indigo-400 text-base font-normal font-['Inter']">documentos de TGR 🔗</Link>
                    </div>
                </div>
            </TimelineItem>
            <DateDisplay date="9 Octubre 2024" />
            <TimelineItem origin="Juan Pérez" time="12:00" type="add" tags={['Sincronización']} title={<>Subió a la plataforma el <b>certificado digital</b> de un representante legal de la empresa.</>}>
            </TimelineItem>
            <TimelineItem origin="Juan Pérez" time="12:00" type="add" tags={['Sincronización']} title={<>Ingresó las credenciales del <b>representante legal</b> de la empresa</>}>
            </TimelineItem>
            <TimelineItem origin="Juan Pérez" time="12:00" type="add" tags={['Sincronización']} title={<>Ingresó las <b>credenciales</b> de la empresa</>}>
            </TimelineItem>
            <DateDisplay date="8 Octubre 2024" />
            <TimelineItem origin="Juan Pérez" time="12:00" type="add" title={<>Creó la empresa <b>ESTUDIO DE DISEÑO GALGA LIMITADA</b></>}>
            </TimelineItem>
            <DateDisplay date="6 Octubre 2024" />
        </div>
    );
}

export default EventTimeline;
