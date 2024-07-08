"use client"
import CompanyData from '@/components/CompanyData';
import EventTimeline from '@/components/EventTimeline';
import Head from 'next/head';
import DteTimeline from '@/components/DteTimeline';
import { useState } from 'react';

export default function Home() {
  const [isActive, setIsActive] = useState(false);

  const handleLinkClick = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <Head>
        <title>Inicio</title>
        <meta name="description" content="Loki" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet" />
      </Head>
      <section className='flex flex-row gap-0 h-full'>
        <div className='h-full flex-grow-0 min-w-84 hidden md:flex overflow-scroll z-50'>
          <CompanyData />
        </div>
        <div className='h-full flex-grow p-6 overflow-scroll z-30'>
          <EventTimeline onLinkClick={handleLinkClick} />
        </div>
        <div className={`h-full ease-in-out duration-500 flex-grow-0 overflow-scroll ${isActive ? 'w-[360px]' : 'w-0'}`}>
          <DteTimeline />
        </div>
      </section>
    </>
  );
}
