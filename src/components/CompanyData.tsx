import React from 'react';
import CompanyDataInfo from './CompanyDataInfo';
import Badge from './Badge';
import { ArrowDownTrayIcon, ChevronLeftIcon, ArrowPathIcon } from '@heroicons/react/24/outline';
import Tooltip from './Tooltip';

const CompanyData: React.FC = () => {
    return (
        <div className="w-[360px] h-full p-3 bg-white dark:bg-neutral-800 flex-col justify-start items-start gap-4 inline-flex">
            <div className="self-stretch h-14 flex-col justify-start items-start gap-3 flex">
                <div className="self-stretch p-2 bg-neutral-100 dark:bg-neutral-700 rounded-xl justify-start items-center gap-3 inline-flex">
                    <button type="button" className="text-neutral-900 dark:text-white transition-all duration-150 bg-neutral-100 hover:bg-neutral-200 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-1 text-center inline-flex items-center dark:bg-neutral-600 dark:hover:bg-neutral-700 dark:focus:ring-blue-800" >
                        <ChevronLeftIcon width={20} />
                    </button>
                    <div className="grow shrink basis-0"><span className="text-neutral-800 dark:text-white text-sm font-bold font-['Inter'] leading-tight">ESTUDIO DE DISENO GALGA LIMITADA<br /></span><span className="text-neutral-600 dark:text-neutral-400 text-sm font-normal font-['Inter'] leading-tight">76.801.025-6</span></div>
                </div>
            </div>
            <div className="self-stretch h-px bg-neutral-100 dark:bg-neutral-700" />
            <div className="self-stretch flex-col justify-start items-start gap-3 flex">
                <CompanyDataInfo title="Creación">
                    10/06/2020 12:00
                </CompanyDataInfo>
                <CompanyDataInfo title="Credenciales empresa SII">
                    <Badge state="sincronizado" />
                </CompanyDataInfo>
                <CompanyDataInfo title="Credenciales Rep. Legal">
                    <Badge state="sincronizado" />
                </CompanyDataInfo>
                <CompanyDataInfo title="Certificado Digital">
                    <Badge state="sincronizado" />
                </CompanyDataInfo>
            </div>
            <div className="self-stretch h-px bg-neutral-100 dark:bg-neutral-700" />
            <div className="self-stretch flex-col justify-start items-start gap-3 flex">
                <CompanyDataInfo title="FD proveedores">
                    <Badge state="habilitado" />
                </CompanyDataInfo>
                <CompanyDataInfo title="Convenio Pronto Pago">
                    <Badge state="habilitado" />
                </CompanyDataInfo>
                <CompanyDataInfo title="GP Pay Suppliers">
                    <Badge state="deshabilitado" />
                </CompanyDataInfo>
                <CompanyDataInfo title="GP Pay Finance">
                    <Badge state="deshabilitado" />
                </CompanyDataInfo>
            </div>
            <div className="self-stretch h-px bg-neutral-100 dark:bg-neutral-700" />
            <div className="self-stretch flex-col justify-start items-start gap-3 flex">
                <CompanyDataInfo title="Convenios Vigentes">
                    Hace 18 horas
                </CompanyDataInfo>
                <CompanyDataInfo title="Certificado deuda">
                    Hace 18 horas
                    <Tooltip message="Descargar certificado deuda">
                        <button type="button" className="text-neutral-600 dark:text-white transition-all duration-150 bg-neutral-100 hover:bg-neutral-200 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-1 text-center inline-flex items-center dark:bg-neutral-600 dark:hover:bg-neutral-700 dark:focus:ring-blue-800" >
                            <ArrowDownTrayIcon width={20} />
                            <span className="sr-only">Descargar certificado deuda</span>
                        </button>
                    </Tooltip>
                </CompanyDataInfo>
                <CompanyDataInfo title="Actualizar TGR">
                    Hace 18 horas
                    <Tooltip message="Actualizar TGR">
                        <button type="button" className="text-neutral-600 dark:text-white transition-all duration-150 bg-neutral-100 hover:bg-neutral-200 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-1 text-center inline-flex items-center dark:bg-neutral-600 dark:hover:bg-neutral-700 dark:focus:ring-blue-800" >
                            <ArrowPathIcon width={20} />
                            <span className="sr-only">Actualizar TGR</span>
                        </button>
                    </Tooltip>
                </CompanyDataInfo>
                <div className="self-stretch h-px bg-neutral-100 dark:bg-neutral-700" />
                <CompanyDataInfo title="DTEs">
                    Hace 18 horas
                </CompanyDataInfo>
                <CompanyDataInfo title="Cesiones electronicas">
                    Hace 18 horas
                </CompanyDataInfo>
                <CompanyDataInfo title="Carpeta Tributaria">
                    <Tooltip message="Actualizar carpeta tributaria">
                        <button type="button" className="text-neutral-600 dark:text-white transition-all duration-150 bg-neutral-100 hover:bg-neutral-200 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-1 text-center inline-flex items-center dark:bg-neutral-600 dark:hover:bg-neutral-700 dark:focus:ring-blue-800" >
                            <ArrowPathIcon width={20} />
                            <span className="sr-only">Actualizar carpeta tributaria</span>
                        </button>
                    </Tooltip>
                    <Tooltip message="Descargar carpeta tributaria">
                        <button type="button" className="text-neutral-600 dark:text-white transition-all duration-150 bg-neutral-100 hover:bg-neutral-200 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-1 text-center inline-flex items-center dark:bg-neutral-600 dark:hover:bg-neutral-700 dark:focus:ring-blue-800" >
                            <ArrowDownTrayIcon width={20} />
                            <span className="sr-only">Descargar carpeta tributaria</span>
                        </button>
                    </Tooltip>
                </CompanyDataInfo>
            </div>

        </div>
    )
}

export default CompanyData;