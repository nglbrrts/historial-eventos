import React from 'react';
import { ChevronLeftIcon, UserIcon, BanknotesIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Tooltip from '../ui-commons/Tooltip';

const CompanyTitleBox: React.FC = () => {
    return (
        <div className="p-2 flex flex-row justify-start items-start gap-3 text-left bg-neutral-100 dark:bg-neutral-700 rounded-xl">
            <Link href="/" className='h-full text-neutral-900 dark:text-white transition-all bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-700 dark:hover:bg-neutral-600 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-1 text-center inline-flex items-center  dark:focus:ring-blue-800'>
                <ChevronLeftIcon width={20} />
            </Link>
            <div className='flex flex-col gap-1 w-full'>
                <div className="grow shrink basis-0 text-neutral-800 dark:text-white text-sm font-bold inter leading-tight">ESTUDIO DE DISENO GALGA LIMITADA</div>
                <div className='flex flex-row justify-between align-middle gap-2'>
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm font-normal leading-tight inter h-fit pt-1">76.801.025-6</p>
                    <div className='flex flex-row gap-2 text-neutral-900 dark:text-white'>
                        <Tooltip message='Usuarios'>
                            <UserIcon width={28} className='border border-neutral-200 dark:border-neutral-600 p-1 rounded-lg hover:bg-neutral-900/10 cursor-pointer' />
                        </Tooltip>
                        <Tooltip message='Cuentas bancarias'>
                            <BanknotesIcon width={28} className='border border-neutral-200 dark:border-neutral-600 p-1 rounded-lg hover:bg-neutral-900/10 cursor-pointer' />
                        </Tooltip>
                        <Tooltip message='Representantes legales'>
                            <ShieldCheckIcon width={28} className='border border-neutral-200 dark:border-neutral-600 p-1 rounded-lg hover:bg-neutral-900/10 cursor-pointer' />
                        </Tooltip>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default CompanyTitleBox;