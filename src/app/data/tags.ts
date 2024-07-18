// import { m } from "framer-motion";

// // tags.ts
// export const tags = [
//     'Sincronización',
//     'Alta legal',
//     'Credenciales',
//     'Carpeta Tributaria',
//     'Financiamiento Directo',
//     'Pronto Pago',
//     'Confirming',
//     'Operación',
//     'Simulación',
//     'Condiciones comerciales',
//     'Oferta',
//     'Aprobación',
//     'Rechazo',
//   ];
  
import { FilterType } from '../../types/types';

export const filterTags: Record<FilterType, string[]> = {
  Empresa: ['Sincronización', 'Alta legal', 'Credenciales', 'Carpeta tributaria'],
  Productos: ['Financiamiento Directo', 'Pronto Pago', 'Confirming', 'Operación', 'Simulación', 'Condiciones comerciales', 'Aprobación', 'Rechazo' ],
  Facturas: ['Sincronización', 'Oferta', 'Operación', 'Simulación'],
};
