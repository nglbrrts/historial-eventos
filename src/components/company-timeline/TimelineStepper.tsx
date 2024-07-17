// components/TimelineStepper.tsx
import React from 'react';
import Tooltip from '../ui-commons/Tooltip';

type TimelineStepperProps = {
  stages: {
    message: string;
    color: string;
  }[];
};

const TimelineStepper: React.FC<TimelineStepperProps> = ({ stages }) => {
  return (
    <div className="w-[88px] h-2.5 justify-start items-center inline-flex">
      {stages.map((stage, index) => (
        <React.Fragment key={index}>
          <Tooltip message={stage.message}>
            <div className={`w-2.5 h-2.5 ${stage.color} rounded-full`} />
          </Tooltip>
          {index < stages.length - 1 && (
            <div className="grow shrink basis-0 h-px bg-neutral-300 dark:bg-neutral-800" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default TimelineStepper;
