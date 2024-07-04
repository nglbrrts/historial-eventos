import CompanyData from '@/components/CompanyData';
import EventTimeline from '@/components/EventTimeline';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Inicio</title>
        <meta name="description" content="Loki" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet" />
      </Head>
      <section className='flex flex-row gap-0 h-full'>
        <div className='bg-neutral-100 h-full flex-grow-0 min-w-84'>
          <CompanyData />
        </div>
        <div className='bg-[#F8FAFC] h-full flex-grow p-6'>
          <EventTimeline />
        </div>
        <div className='bg-neutral-100 h-full w-[360px] flex-grow-0 p-6'>der</div>
      </section>
    </div>
  );
}
