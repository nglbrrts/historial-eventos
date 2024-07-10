import React, { ReactNode, useState, useRef, useEffect } from 'react';
import TooltipPortal from './TooltipPortal';

type TooltipProps = {
  message: string;
  children: ReactNode;
};

const Tooltip: React.FC<TooltipProps> = ({ message, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
  const tooltipRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  useEffect(() => {
    if (isVisible && triggerRef.current && tooltipRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      setTooltipPosition({
        top: rect.top + window.scrollY - tooltipRef.current.offsetHeight - 8,
        left: rect.left + window.scrollX + (rect.width / 2) - (tooltipRef.current.offsetWidth / 2),
      });
    }
  }, [isVisible]);

  return (
    <div className="relative flex" ref={triggerRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {children}
      {isVisible && (
        <TooltipPortal>
          <div ref={tooltipRef} style={{ position: 'absolute', top: tooltipPosition.top, left: tooltipPosition.left }} className="z-50 p-2 bg-neutral-900 text-white text-xs rounded">
            {message}
          </div>
        </TooltipPortal>
      )}
    </div>
  );
};

export default Tooltip;
