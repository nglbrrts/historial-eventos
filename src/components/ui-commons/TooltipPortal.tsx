import React from 'react';
import ReactDOM from 'react-dom';

type TooltipPortalProps = {
  children: React.ReactNode;
};

const TooltipPortal: React.FC<TooltipPortalProps> = ({ children }) => {
  const tooltipRoot = document.getElementById('tooltip-root');
  return tooltipRoot ? ReactDOM.createPortal(children, tooltipRoot) : null;
};

export default TooltipPortal;
