const statuses: Record<string, string> = {
    'Sincronizado': 'text-green-700 bg-green-50 ring-green-600/20',
    'No sincronizado': 'text-yellow-800 bg-yellow-50 ring-yellow-600/20',
  };
  
  const companies = [
    {
      id: 1,
      name: 'ESTUDIO DE DISENO GALGA LIMITADA',
      href: '/estudio-de-diseno-galga-limitada',
      status: 'Sincronizado',
      createdBy: 'Juan Perez',
      companyRut: '76.801.026-9',
    },
    {
      id: 2,
      name: 'ESTUDIO DE DISENO GALGA LIMITADA',
      href: '/estudio-de-diseno-galga-limitada',
      status: 'Sincronizado',
      createdBy: 'Juan Perez',
      companyRut: '76.801.026-9',
    },
    {
      id: 3,
      name: 'ESTUDIO DE DISENO GALGA LIMITADA',
      href: '/estudio-de-diseno-galga-limitada',
      status: 'No sincronizado',
      createdBy: 'Juan Perez',
      companyRut: '76.801.026-9',
    },
  ];
  
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
  }
  
  export default function LatestCompanies() {
    return (
      <ul className="divide-y divide-gray-100">
        {companies.map((company) => (
          <li key={company.id} className="flex items-center justify-between gap-x-6 py-5">
            <div className="min-w-0">
              <div className="flex items-start gap-x-3">
                <p className="text-sm font-semibold leading-6 text-gray-900">{company.name}</p>
                <p
                  className={classNames(
                    statuses[company.status],
                    'mt-0.5 whitespace-nowrap rounded-md px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset',
                  )}
                >
                  {company.status}
                </p>
              </div>
              <div className="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500">
                <p className="whitespace-nowrap">
                  RUT <span>{company.companyRut}</span>
                </p>
                <svg viewBox="0 0 2 2" className="h-0.5 w-0.5 fill-current">
                  <circle r={1} cx={1} cy={1} />
                </svg>
                <p className="truncate">Creado por {company.createdBy}</p>
              </div>
            </div>
            <div className="flex flex-none items-center gap-x-4">
              <a
                href={company.href}
                className="hidden rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:block"
              >
                Ver empresa<span className="sr-only">, {company.name}</span>
              </a>
            </div>
          </li>
        ))}
      </ul>
    );
  }
  