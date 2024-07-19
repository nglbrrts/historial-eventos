import { FilterType } from '../../types/types';

export const filterTags: Record<FilterType, string[]> = {
  Empresa: ['Sincronización', 'Alta legal', 'Credenciales', 'Carpeta tributaria'],
  Productos: ['Financiamiento Directo', 'Pronto Pago', 'Confirming', 'Operación', 'Simulación', 'Condiciones comerciales', 'Aprobación', 'Rechazo' ],
  'Sólo Facturas': ['Sincronización', 'Oferta', 'Operación', 'Simulación'],
};
