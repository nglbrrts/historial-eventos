"use client"
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
      <div className='flex flex-col gap-0 h-full w-full justify-center align-middle p-6 gap-y-4'>
        <div className="w-[388px] h-[50px] p-2 bg-white rounded-xl mx-auto border border-neutral-200 justify-center items-center gap-3 inline-flex">
          <svg className="flex-shrink-0 size-4 text-gray-400 dark:text-white/60" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </svg>
          <div className="grow shrink basis-0 text-neutral-800 dark:text-white text-sm font-semibold leading-tight">Encuentra empresas por razón social o RUT...</div>
        </div>
        <div className='bg-white w-full max-w-5xl mx-auto p-3 rounded-xl'>
        <LatestCompanies />
        </div>
      </div>
    </>
  );
}
