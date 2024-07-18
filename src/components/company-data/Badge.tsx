import React from 'react';

export type BadgeProps = {
  state: 'habilitado' | 'deshabilitado' | 'sincronizado' | 'no_sincronizado';
};

const stateStyles = {
  habilitado: {
    bgColor: 'bg-teal-100 dark:bg-teal-900',
    textColor: 'text-teal-600 dark:text-teal-300',
  },
  deshabilitado: {
    bgColor: 'bg-neutral-100 dark:bg-neutral-700',
    textColor: 'text-gray-500 dark:text-neutral-400',
  },
  sincronizado: {
    bgColor: 'bg-teal-100 dark:bg-teal-900',
    textColor: 'text-teal-600 dark:text-teal-300',
  },
  no_sincronizado: {
    bgColor: 'bg-neutral-100 dark:bg-neutral-700',
    textColor: 'text-gray-500 dark:text-neutral-400',
  },
};

const Badge: React.FC<BadgeProps> = ({ state }) => {
  const style = stateStyles[state];

  if (!style) {
    console.error(`Estado no válido: ${state}`);
    return null;
  }

  const { bgColor, textColor } = style;

  return (
    <span className={`inline-flex items-center rounded-full ${bgColor} px-2 py-1 text-xs font-medium ${textColor} capitalize`}>
      {state}
    </span>
  );
};

export default Badge;
