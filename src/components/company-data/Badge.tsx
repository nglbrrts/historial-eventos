import React from 'react';

export type BadgeProps = {
  state: 'habilitado'| 'aprobada' | 'deshabilitado' | 'sincronizado' | 'no_sincronizado'| 'financiamiento_directo'| 'abonada';
};

const stateStyles = {
  habilitado: {
    bgColor: 'bg-teal-100 dark:bg-teal-900',
    textColor: 'text-teal-600 dark:text-teal-300',
  },
  aprobada: {
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
  financiamiento_directo: {
    bgColor: 'bg-indigo-100 dark:bg-indigo-700',
    textColor: 'text-indigo-500 dark:text-indigo-400',
  },
  abonada: {
    bgColor: 'bg-teal-100 dark:bg-teal-900',
    textColor: 'text-teal-600 dark:text-teal-300',
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
    <span className={`inline-flex items-center justify-center rounded-full ${bgColor} px-2 py-1 text-xs font-medium ${textColor} capitalize max-w-fit`}>
      {state}
    </span>
  );
};

export default Badge;
