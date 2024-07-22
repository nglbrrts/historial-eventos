
const tabs = [
    { name: 'Financiamiento Directo', href: '#', current: true },
    { name: 'Pronto Pago', href: '#', current: false },
    { name: 'Confirming', href: '#', current: false },
  ]
  
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }
  
  export default function TabPills() {
    return (
      <div className="w-fit mx-auto">
        <div className="sm:hidden">
          <label htmlFor="tabs" className="sr-only">
            Selecciona una pestaña
          </label>
          {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
          <select
            id="tabs"
            name="tabs"
            defaultValue={tabs.find((tab) => tab.current).name}
            className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
          >
            {tabs.map((tab) => (
              <option key={tab.name}>{tab.name}</option>
            ))}
          </select>
        </div>
        <div className="hidden sm:block">
          <nav aria-label="Tabs" className="flex space-x-4">
            {tabs.map((tab) => (
              <a
                key={tab.name}
                href={tab.href}
                aria-current={tab.current ? 'page' : undefined}
                className={classNames(
                  tab.current ? 'bg-indigo-100 text-indigo-700' : 'text-gray-500 hover:text-gray-700',
                  'rounded-md px-3 py-2 text-sm font-medium',
                )}
              >
                {tab.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    )
  }
  