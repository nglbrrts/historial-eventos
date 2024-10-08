import React, { useState } from 'react';
import TabPills from '../ui-commons/TabPills';
import DtesEmitidas from './DtesEmitidas';
import DtesRecibidas from './DtesRecibidas';
import DtesOfertas from './DtesOfertas';
import FdOperaciones from './FdOperaciones';
import FdSimulaciones from './FdSimulaciones';

const initialTabs = [
    { name: 'Documentos Tributarios', href: '#', current: true },
    { name: 'Financiamiento directo', href: '#', current: false },
    { name: 'Pronto Pago', href: '#', current: false },
    { name: 'Confirming', href: '#', current: false },
];

const OpsFacturas: React.FC = () => {
    const [tabs, setTabs] = useState(initialTabs);

    const handleTabClick = (clickedTab: { name: string; }) => {
        const updatedTabs = tabs.map((tab) =>
            tab.name === clickedTab.name ? { ...tab, current: true } : { ...tab, current: false }
        );
        setTabs(updatedTabs);
    };

    return (
        <div className='h-full w-full mx-auto flex-grow z-30 flex flex-col gap-6'>
            <h1 className='text-xl text-center text-neutral-900 dark:text-white'>Operaciones y facturas</h1>
            <TabPills tabs={tabs} onTabClick={handleTabClick} />
            <DtesEmitidas /> 
            {/* <DtesRecibidas />
            <DtesOfertas />
            <FdOperaciones />
            <FdSimulaciones /> */}
        </div>
    );
};

export default OpsFacturas;
