import React from 'react';
import TimelineItem from './timelineItem';

const EventTimeline: React.FC = () => {
    return (
        <div className='max-w-[670px] mx-auto'>
            <TimelineItem origin="Juan Pérez" time="12:00" type="add" title={<>Creó la empresa <b>ESTUDIO DE DISEÑO GALGA LIMITADA</b></>}>
                <></>
            </TimelineItem>
            <TimelineItem origin="Juan Pérez" time="12:00" type="add" title={<>Creó la empresa <b>ESTUDIO DE DISEÑO GALGA LIMITADA</b></>}>
                <></>
            </TimelineItem>
            <div className="w-[120px] h-[43px] py-3 justify-center items-center gap-2 inline-flex">
                <div className="text-gray-600 dark:text-gray-400 text-base font-normal font-['Inter']">8 Octubre 2024</div>
            </div>
        </div>
    )
}

export default EventTimeline;