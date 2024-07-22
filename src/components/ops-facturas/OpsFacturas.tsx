import React, { useState } from 'react';
import TabPills from '../ui-commons/TabPills';
import Dtes from './Dtes';

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
        <div className='h-full flex-grow p-6 overflow-y-scroll z-30 flex flex-col gap-3'>
            <h1 className='text-xl text-center text-neutral-900 dark:text-white'>Operaciones y facturas</h1>
            <TabPills tabs={tabs} onTabClick={handleTabClick} />
            <Dtes />
        </div>
    );
};

export default OpsFacturas;
