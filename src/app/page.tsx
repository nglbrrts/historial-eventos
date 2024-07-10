"use client"
import EventTimeline from '@/components/EventTimeline';
import Head from 'next/head';
import DteTimeline from '@/components/DteTimeline';
import { useState } from 'react';
import Drawer from '@/components/Drawer';
import CompanyTitleBox from '@/components/CompanyTitleBox';
import CompanyDataContent from '@/components/CompanyDataContent';


export default function Home() {
  //open DTE timeline
  const [isActive, setIsActive] = useState(false);
  //open company Drawer
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  //open DTE timeline
  const handleLinkClick = () => {
    setIsActive(!isActive);
  };

  //open company drawer
  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <Head>
        <title>Inicio</title>
        <meta name="description" content="Loki" />
  
          <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet" />
      </Head>
      <section className='flex flex-row gap-0 h-full'>
        <div className='w-[360px] h-full flex-grow-0 min-w-84 hidden md:flex flex-col overflow-y-scroll z-50 p-3 bg-white dark:bg-neutral-800 gap-4'>
          <CompanyTitleBox />
          <CompanyDataContent />
        </div>
        <div className='h-full flex-grow p-6 overflow-y-scroll z-30 flex flex-col gap-3'>
          <button onClick={toggleDrawer} className="md:hidden">
            <div className="w-full text-left p-4 bg-white dark:bg-neutral-800 rounded-xl justify-start items-center gap-3 border border-neutral-200 dark:border-neutral-700 ">
              <p className="text-neutral-800 dark:text-white text-sm font-bold font-['Inter'] leading-tight">ESTUDIO DE DISENO GALGA LIMITADA<br /> </p>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm font-normal font-['Inter'] leading-tight">76.801.025-6</p>
            </div>
          </button>
          <Drawer isOpen={isDrawerOpen} onClose={toggleDrawer} />
          <EventTimeline onLinkClick={handleLinkClick} />
        </div>
        <div className={`h-full ease-in-out duration-500  flex-grow-0 overflow-y-scroll ${isActive ? 'w-[400px]' : 'w-0'}`}>
          <DteTimeline />
        </div>
      </section>
    </>
  );
}
