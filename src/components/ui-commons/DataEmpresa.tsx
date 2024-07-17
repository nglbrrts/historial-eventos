// import { PaperClipIcon } from '@heroicons/react/20/solid'
import React from 'react';

const DataEmpresa: React.FC = () => {
  return (
    <div className='rounded-3xl p-3 border border-slate-100 dark:border-gray-800 bg-white dark:bg-gray-900'>
      <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-gray-900 dark:text-white pt-4 px-4">Data de la Empresa</h3>
        {/* <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Listado de eventos</p> */}
      </div>
      <div className="mt-6 border-t border-gray-100 dark:border-gray-800">
        <dl className="divide-y divide-gray-100 dark:divide-gray-800">
          <div className="bg-gray-50 dark:bg-gray-800/50 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
            <dt className="text-sm font-medium leading-6 text-gray-900 dark:text-white">Razón Social</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 dark:text-gray-400 sm:col-span-2 sm:mt-0">ESTUDIO DE DISENO GALGA LIMITADA</dd>
          </div>
          <div className="bg-white dark:bg-gray-900 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
            <dt className="text-sm font-medium leading-6 text-gray-900 dark:text-white"> Fecha creación en Guou Finance</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 dark:text-gray-400 sm:col-span-2 sm:mt-0">10 junio 2024</dd>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800/50 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
            <dt className="text-sm font-medium leading-6 text-gray-900 dark:text-white">Credenciales empresa</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 dark:text-gray-400 sm:col-span-2 sm:mt-0">
              <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
                Sincronizadas
              </span>
              <span className='text-gray-400 font-sm ml-2'>Últ. 10 junio 2024</span></dd>
          </div>
          <div className="bg-gray-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
            <dt className="text-sm font-medium leading-6 text-gray-900 dark:text-white">Credenciales Rep. Legal</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 dark:text-gray-400 sm:col-span-2 sm:mt-0">
              <span className="inline-flex items-center rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800">
                No cargado
              </span></dd>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800/50 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
            <dt className="text-sm font-medium leading-6 text-gray-900 dark:text-white">Certificado Digital (Rep. Legal) </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 dark:text-gray-400 sm:col-span-2 sm:mt-0">
              <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
                Sincronizadas
              </span>
              <span className='text-gray-400 font-sm ml-2'>Últ. 10 junio 2024</span></dd>
          </div>
          {/* <div className="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
            <dt className="text-sm font-medium leading-6 text-gray-900 dark:text-white">About</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 dark:text-gray-400 sm:col-span-2 sm:mt-0">
              Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur
              qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud
              pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
            </dd>
          </div> */}
          {/* <div className="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
            <dt className="text-sm font-medium leading-6 text-gray-900 dark:text-white">Attachments</dt>
            <dd className="mt-2 text-sm text-gray-900 dark:text-white sm:col-span-2 sm:mt-0">
              <ul role="list" className="divide-y divide-gray-100 rounded-md border border-gray-200">
                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                  <div className="flex w-0 flex-1 items-center">
                    <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium">resume_back_end_developer.pdf</span>
                      <span className="flex-shrink-0 text-gray-400">2.4mb</span>
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                      Download
                    </a>
                  </div>
                </li>
                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                  <div className="flex w-0 flex-1 items-center">
                    <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium">coverletter_back_end_developer.pdf</span>
                      <span className="flex-shrink-0 text-gray-400">4.5mb</span>
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                      Download
                    </a>
                  </div>
                </li>
              </ul>
            </dd>
          </div> */}
        </dl>
      </div >
    </div >
  )
}

export default DataEmpresa;
