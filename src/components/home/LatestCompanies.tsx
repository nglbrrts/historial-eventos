import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Badge, { BadgeProps } from '@/components/company-data/Badge'; 



const companies = [
  {
    id: 1,
    name: 'ESTUDIO DE DISENO GALGA LIMITADA',
    href: '/estudio-de-diseno-galga-limitada',
    status: 'sincronizado',
    date: '27 jul 24 12:00:23',
    companyRut: '76.801.026-9',
  },
  {
    id: 2,
    name: 'EXCELEFECTIVO LTDA',
    href: '/estudio-de-diseno-galga-limitada',
    status: 'sincronizado',
    date: '24 jul 24 10:35:22',
    companyRut: '75.418.111-1',
  },
  {
    id: 3,
    name: 'AUDITMINDS S.A',
    href: '/estudio-de-diseno-galga-limitada',
    status: 'no_sincronizado',
    date: '25 jul 24 16:23:73',
    companyRut: '76.419.592-1',
  },
  {
    id: 4,
    name: 'CONSULTORESCONTROL FINANCIERO SRL',
    href: '/estudio-de-diseno-galga-limitada',
    status: 'no_sincronizado',
    date: '26 jul 24 10:22:12',
    companyRut: '73.095.602-8',
  },
  {
    id: 5,
    name: 'OPTIMIZAOFICINA SPA',
    href: '/estudio-de-diseno-galga-limitada',
    status: 'no_sincronizado',
    date: '26 jul 24 12:00:23',
    companyRut: '74.549.073-7',
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function LatestCompanies() {
  return (
    <ul className="divide-y divide-neutral-100 dark:divide-neutral-700">
      {companies.map((company) => (
        <li key={company.id} className="flex items-center justify-between gap-x-6 py-5">
          <div className="min-w-0">
            <div className="flex items-start gap-x-3">
              <p className="text-sm font-semibold leading-6 text-neutral-900 dark:text-white">
                {company.name} &nbsp;
                <Badge state={company.status as BadgeProps['state']} />
              </p>
            </div>
            <div className="mt-1 flex items-center gap-x-2 text-xs leading-5 text-neutral-600 dark:text-neutral-400">
              <p className="whitespace-nowrap">
                RUT <span>{company.companyRut}</span>
              </p>
              <svg viewBox="0 0 2 2" className="h-0.5 w-0.5 fill-current">
                <circle r={1} cx={1} cy={1} />
              </svg>
              <p className="truncate">Creado el {company.date}</p>
            </div>
          </div>
          <div className="flex flex-none items-center gap-x-4">
            <Link href={company.href}>
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
