import React from 'react';
import TimelineItem from './timelineItem';
import DateDisplay from './DateDisplay';
import Link from 'next/link';


const EventTimeline: React.FC = () => {
    return (
        <div className='max-w-[670px] mx-auto'>
            <TimelineItem origin="Juan Pérez" time="12:00" type="sync" title={<><b>Sincronizó</b> información desde el SII:</>}>
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
            <TimelineItem origin="Juan Pérez" time="12:00" type="add" title={<>Subió a la plataforma el <b>certificado digital</b> de un representante legal de la empresa.</>}>
                <></>
            </TimelineItem>
            <TimelineItem origin="Juan Pérez" time="12:00" type="add" title={<>Ingresó las credenciales del <b>representante legal</b> de la empresa</>}>
                <></>
            </TimelineItem>
            <TimelineItem origin="Juan Pérez" time="12:00" type="add" title={<>Ingresó las <b>credenciales</b> de la empresa</>}>
                <></>
            </TimelineItem>
            <DateDisplay date="8 Octubre 2024" />
            <TimelineItem origin="Juan Pérez" time="12:00" type="add" title={<>Creó la empresa <b>ESTUDIO DE DISEÑO GALGA LIMITADA</b></>}>
                <></>
            </TimelineItem>
            <DateDisplay date="6 Octubre 2024" />
        </div>
    )
}

export default EventTimeline;