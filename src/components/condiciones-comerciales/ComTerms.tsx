const condiciones = [
    { tramo: '0-30', tasa: '1.67', anticipo: '95' },
    { tramo: '31-60', tasa: '1.67', anticipo: '95' },
    { tramo: '61-90', tasa: '1.67', anticipo: '95' },
    { tramo: '91-120', tasa: '1.67', anticipo: '95' },
    { tramo: '121-150', tasa: '1.67', anticipo: '95' },
    { tramo: '151-180', tasa: '1.67', anticipo: '95' },
    { tramo: '181-300', tasa: '1.67', anticipo: '95' },
    { tramo: '301-365', tasa: '1.67', anticipo: '95' },
    { tramo: '301-365', tasa: '1.67', anticipo: '95' },
    { tramo: '301-365', tasa: '1.67', anticipo: '95' },
    { tramo: '301-365', tasa: '1.67', anticipo: '95' },
    { tramo: '301-365', tasa: '1.67', anticipo: '95' },
    { tramo: '301-365', tasa: '1.67', anticipo: '95' },
  ]
  
  export default function Example() {
    return (
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-base font-semibold leading-6 text-neutral-900 dark:text-white">ESTUDIO DE DISEÑO GALGA LIMITADA</h1>
            <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-400">
              Listado de condiciones comerciales de Financiamiento Directo proveedores
            </p>
          </div>
          <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            <button
              type="button"
              className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Exportar data
            </button>
          </div>
        </div>
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle  border border-neutral-300 dark:border-neutral-700 rounded-xl">
              <table className="min-w-full divide-y divide-gray-300 dark:divide-neutral-700 ">
                <thead>
                  <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-neutral-900 dark:text-white sm:pl-3">
                      Tramo
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-neutral-900 dark:text-white">
                      Tasa
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-neutral-900 dark:text-white">
                      Anticipo
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-neutral-800">
                  {condiciones.map((condicion) => (
                    <tr className="even:bg-gray-50 dark:even:bg-neutral-900">
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-neutral-900 dark:text-white sm:pl-3">{condicion.tramo} Días</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-neutral-500 dark:text-neutral-300">{condicion.tasa}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-neutral-500 dark:text-neutral-300">{condicion.anticipo}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
  