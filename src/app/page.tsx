"use client"
import FailedSims from '@/components/home/FailedSims';
import LatestCompanies from '@/components/home/LatestCompanies';
import Head from 'next/head';

export default function Home() {

  return (
    <>
      <Head>
        <title>Inicio</title>
        <meta name="description" content="Loki" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet" />
      </Head>
      <div className='overflow-scroll h-full'>
        <div className='flex flex-col gap-0 h-fit md:h-1/3 w-full justify-center align-middle p-6 gap-y-4'>
          <input type="text" className="h-14 w-[500px] max-w-[90%] pr-8 pl-5 mx-auto rounded-xl z-0 focus:shadow focus:outline-none border border-neutral-200" placeholder="Encuentra empresas por razón social o RUT..." />
        </div>
        <div className='flex flex-col md:flex-row gap-6 max-w-7xl mx-auto p-3'>
          <div className='bg-white dark:bg-neutral-800 w-full p-3 rounded-xl flex flex-col gap-3'>
            <h3 className='text-xl font-medium text-neutral-600 dark:text-neutral-400'>Últimas empresas registradas</h3>
            <LatestCompanies />
          </div>
          <div className='bg-white dark:bg-neutral-800 w-full p-3 rounded-xl flex flex-col gap-3'>
            <h3 className='text-xl font-medium text-neutral-600 dark:text-neutral-400'>Simulaciones fallidas</h3>
            <FailedSims />
          </div>
        </div>
      </div>
    </>
  );
}
