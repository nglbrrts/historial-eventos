import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const statuses: Record<string, string> = {
  'Sincronizado': 'text-green-700 bg-green-50 ring-green-600/20',
  'No sincronizado': 'text-yellow-800 bg-yellow-50 ring-yellow-600/20',
};

const simulations = [
  {
    id: 1,
    companyName: 'NAUTICALNEXA LTDA',
    date: '10 junio 2024',
    href: '',
    companyRut: '73.760.763-6',
    product: 'Simulación de Pronto Pago N°352',
  },
  {
    id: 2,
    companyName: 'SERVICIOSPORTUARIOSPRIME EIRL',
    date: '10 junio 2024',
    href: '',
    companyRut: '72.316.048-3',
    product: 'Simulación de Financiamiento Directo N°312',
  },
  {
    id: 3,
    companyName: 'HORIZONTEHARBOR EIRL',
    date: '10 junio 2024',
    href: '',
    companyRut: '70.240.902-5',
    product: 'Simulación de Pronto Pago N°694',
  },
  {
    id: 4,
    companyName: 'GRUPOGENIUS DE GEMAS EIRL',
    date: '10 junio 2024',
    href: '',
    companyRut: '77.226.249-6',
    product: 'Simulación de Financiamiento Directo N°12',
  },
  {
    id: 5,
    companyName: 'EXPLORADORESDEROCAS S.A',
    date: '10 junio 2024',
    href: '',
    companyRut: '73.968.344-1',
    product: 'Simulación de Financiamiento Directo N°142',
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function FailedSims() {
  return (
    <ul className="divide-y divide-neutral-100 dark:divide-neutral-700">
      {simulations.map((simulation) => (
        <li key={simulation.id} className="flex items-center justify-between gap-x-6 py-5">
          <div className="min-w-0">
            <div className="flex items-center gap-x-2 text-sm font-semibold leading-6 text-neutral-900 dark:text-white">
              <p className="whitespace-nowrap">{simulation.companyName}</p>
              <svg viewBox="0 0 2 2" className="h-0.5 w-0.5 fill-current">
                <circle r={1} cx={1} cy={1} />
              </svg>
              <p>{simulation.date}</p>
            </div>
            <div className="mt-1 flex items-center gap-x-2 text-xs leading-5 text-neutral-600 dark:text-neutral-400">
              <p className="whitespace-nowrap">
                <span>{simulation.product}</span>
              </p>
              <svg viewBox="0 0 2 2" className="h-0.5 w-0.5 fill-current">
                <circle r={1} cx={1} cy={1} />
              </svg>
              <p className="truncate">RUT {simulation.companyRut}</p>
            </div>
          </div>
          <div className="flex flex-none items-center gap-x-4">
          <Link href={simulation.href}>
              <button type="button" className="text-neutral-500 dark:text-neutral-400 white transition-all duration-150 bg-white hover:bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2 text-center inline-flex items-center  dark:focus:ring-blue-800" >
                <ChevronRightIcon width={20} />
              </button>
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
}
