"use client"
import FailedSims from '@/components/home/FailedSims';
import LatestCompanies from '@/components/home/LatestCompanies';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import ReusableModal from '@/components/ui-commons/ReusableModal';
import { CursorArrowRaysIcon } from '@heroicons/react/24/outline';

export default function Home() {
  // Estado para el modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Función para abrir el modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Función para navegar a una página específica
  const navigateTo = (path: string) => {
    closeModal();
    window.location.href = path;
  };

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
          <img src="./img/Loki.png" alt="" width={150} className='mx-auto' />
          <input type="text" className="h-14 w-[500px] max-w-[90%] pr-8 pl-5 mx-auto rounded-xl z-0 focus:shadow focus:outline-none border border-neutral-200" placeholder="Encuentra empresas por razón social o RUT..." />
          <p className='text-sm text-neutral-800 dark:text-white text-center'>Si necesitas revisar condiciones comerciales <Link href="/condiciones-comerciales" className='text-indigo-500'>haz clic aquí</Link></p>
        </div>
        <div className='flex flex-col md:flex-row gap-6 max-w-7xl mx-auto p-3'>
          <div className='bg-white dark:bg-neutral-800 w-full p-3 rounded-xl flex flex-col gap-3'>
            <h3 className='text-xl font-medium text-neutral-600 dark:text-neutral-400'>Últimas empresas registradas</h3>
            <LatestCompanies onFirstCompanyClick={openModal} />
          </div>
          <div className='bg-white dark:bg-neutral-800 w-full p-3 rounded-xl flex flex-col gap-3'>
            <h3 className='text-xl font-medium text-neutral-600 dark:text-neutral-400'>Simulaciones fallidas</h3>
            <FailedSims />
          </div>
        </div>
      </div>
      <div className='w-full h-full p-4'>
        <div className="h-[107px] justify-start items-start gap-3 inline-flex">
          <div className="w-[167.40px] h-[107px] p-4 bg-white rounded-xl border border-[#eeeeed] flex-col justify-center items-center gap-2 inline-flex">
            <div className="justify-center items-center gap-2 inline-flex">
              <div className="text-[#263238] text-[29px] font-medium font-['DM Sans'] leading-[33px]">12</div>
              <div className="w-6 h-6 relative">
                <img className="w-5 h-[16.67px] left-[2px] top-[3.67px] absolute" src="https://via.placeholder.com/20x17" />
              </div>
            </div>
            <div className="self-stretch text-center text-[#263238] text-sm font-normal font-['Open Sans'] leading-[19px]">Proveedores</div>
          </div>
          <div className="h-[107px] p-4 bg-white rounded-xl border border-[#eeeeed] flex-col justify-center items-center gap-2 inline-flex">
            <div className="text-[#263238] text-2xl font-medium font-['DM Sans'] leading-7">$100.000.000</div>
            <div className="text-[#263238] text-sm font-normal font-['Open Sans'] leading-[19px]">25 Facturas</div>
          </div>
          <div className="w-[294px] h-[107px] p-4 bg-white rounded-xl border border-[#eeeeed] flex-col justify-center items-center gap-2 inline-flex">
            <div className="self-stretch text-[#263238] text-base font-medium font-['DM Sans']">Línea Pronto Pago $100.000.000</div>
            <div className="self-stretch h-[9px] relative">
              <div className="w-[261.60px] h-[9px] left-[0.40px] top-0 absolute bg-[#d9d9d9] rounded-[100px]"></div>
              <div className="w-[119px] h-[9px] left-[33.80px] top-0 absolute bg-[#39c4a5] rounded-[100px]"></div>
              <div className="w-[136px] h-[9px] left-0 top-0 absolute bg-[#553ced] rounded-tl-[100px] rounded-bl-[100px]"></div>
            </div>
            <div className="flex-col justify-start items-start gap-px flex">
              <div className="w-[262px] text-[#546e7a] text-sm font-normal font-['Open Sans'] leading-[19px]">50% utilizado de $500.000.000</div>
              <div className="w-[262px] text-[#546e7a] text-sm font-normal font-['Open Sans'] leading-[19px]">12% a utilizar con esta nómina</div>
            </div>
          </div>
        </div>
      </div>
      <ReusableModal
        open={isModalOpen}
        setOpen={setIsModalOpen}
        title="Navegar a"
        content=""
        icon={CursorArrowRaysIcon}
        buttonText="Cerrar"
        onButtonClick={closeModal}
      >
        <div className="mt-4 overflow-visible flex flex-row gap-4">
          <Link href='/estudio-de-diseno-galga-limitada'>
            <div className='w-full p-2 text-neutral-900 dark:text-white bg-neutral-50 dark:bg-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-600 rounded-lg flex flex-col items-center gap-2 text-base leading-tight font-bold'>
              <img src='./img/timeline.png' width={32} />
              Historial de eventos
            </div>
          </Link>
          <Link href='/operaciones-y-facturas'>
            <div className='w-full p-2 text-neutral-900 dark:text-white bg-neutral-50 dark:bg-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-600 rounded-lg flex flex-col items-center gap-2 text-base leading-tight font-bold'>
              <img src='./img/File-Dollar.png' width={32} />
              Operaciones y Facturas
            </div>
          </Link>
        </div>
      </ReusableModal >
    </>
  );
}
