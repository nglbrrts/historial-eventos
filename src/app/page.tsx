import CompanyData from '@/components/CompanyData';
import EventTimeline from '@/components/EventTimeline';
import Head from 'next/head';
import DteTimeline from '@/components/DteTimeline';

export default function Home() {
  return (
    <>
      <Head>
        <title>Inicio</title>
        <meta name="description" content="Loki" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet" />
      </Head>
      <section className='flex flex-row gap-0 h-full'>
        <div className='h-full flex-grow-0 min-w-84 hidden md:flex overflow-scroll'>
          <CompanyData />
        </div>
        <div className='h-full flex-grow p-6 overflow-scroll'>
          <EventTimeline />
        </div>
        <div className='h-full w-[360px] flex-grow-0 overflow-scroll'>
          <DteTimeline />
        </div>
      </section>
    </>
  );
}