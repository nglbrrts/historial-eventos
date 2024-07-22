"use client"

import TabPills from '@/components/ui-commons/TabPills';
import Head from 'next/head';
import ComboBox from '@/components/ui-commons/ComboBox';
import ComTerms from '@/components/condiciones-comerciales/ComTerms';
import { useState } from 'react';

const initialTabs = [
  { name: 'Financiamiento Directo', href: '#', current: true },
  { name: 'Pronto Pago', href: '#', current: false },
  { name: 'Confirming', href: '#', current: false },
];

const companies = [
  { id: 1, name: 'ESTUDIO DE DISEÑO GALGA LIMITADA', rut: '76.801.636-7' },
  { id: 2, name: 'PERICO DE LOS PALOTES SA.', rut: '98.265.322-1' },
];

export default function CondicionesComerciales() {
  const [tabs, setTabs] = useState(initialTabs);

  const handleTabClick = (clickedTab: { name: string; }) => {
    const updatedTabs = tabs.map((tab) =>
      tab.name === clickedTab.name ? { ...tab, current: true } : { ...tab, current: false }
    );
    setTabs(updatedTabs);
  };

  return (
    <>
      <Head> 
        <title>Condiciones comerciales</title>
        <meta name="description" content="Loki" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet" />
      </Head>
      <div className='overflow-scroll h-full'>
        <div className='flex flex-col gap-0 h-fit w-full justify-center align-middle p-6 gap-y-6'>
          <h3 className='text-center text-neutral-900 dark:text-white text-xl'>Buscar condiciones comerciales de una empresa</h3>
          <ComboBox companies={companies} label="Encuentra empresas por razón social o RUT..." />
          <TabPills tabs={tabs} onTabClick={handleTabClick} />
          <ComTerms />
        </div>
      </div>
    </>
  );
}
