import React from 'react';
import TimelineItem from './timelineItem';

const EventTimeline: React.FC = () => {
    return (
        <div className='max-w-[670px] mx-auto'>
            <TimelineItem />
            <TimelineItem />
            <TimelineItem />
            <TimelineItem />
        </div>
    )
}

export default EventTimeline;