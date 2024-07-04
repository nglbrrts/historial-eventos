import React from 'react';

type BadgeProps = {
  state: 'habilitado' | 'deshabilitado';
};

const stateStyles = {
  habilitado: {
    bgColor: 'bg-teal-100',
    textColor: 'text-emerald-500',
  },
  deshabilitado: {
    bgColor: 'bg-gray-100',
    textColor: 'text-gray-500',
  },

};

const Badge: React.FC<BadgeProps> = ({ state }) => {
  const { bgColor, textColor } = stateStyles[state];

  return (
    <span className={`inline-flex items-center rounded-full ${bgColor} px-2 py-1 text-xs font-medium ${textColor} capitalize`}>
      {state}
    </span>
  );
};

export default Badge;
