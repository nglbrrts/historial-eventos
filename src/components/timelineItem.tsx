import React from 'react';

const TimelineItem: React.FC = () => {
    return (
        <div className="flex space-x-3">
            <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
                <div className="relative z-10 size-7 flex justify-center items-center">
                    <div className="size-2 rounded-full bg-gray-400 dark:bg-neutral-600"></div>
                </div>
            </div>
            <div className="w-full h-fit p-3 bg-white rounded-lg flex-col justify-start items-start gap-3 inline-flex mb-4">
                <div className="self-stretch justify-between items-center inline-flex">
                    <div className="text-gray-500 text-sm font-normal font-['Inter']">Juan perez</div>
                    <div className="text-gray-500 text-sm font-normal font-['Inter']">12:00:00</div>
                </div>
                <div className="self-stretch justify-between items-center inline-flex">
                    <div className="justify-start items-center gap-1 flex">
                        <div className="w-[18px] h-[18px] relative">
                            <img alt="none" className="w-[15px] h-[12.50px] left-[1.50px] top-[2.75px] absolute" src="https://via.placeholder.com/15x12" />
                        </div>
                        <div><span className="text-black text-base font-bold font-['Inter']">Sincronizó</span><span className="text-black text-base font-normal font-['Inter']"> información desde el SII:</span></div>
                    </div>
                    <div className="w-36 px-1 py-0.5 bg-violet-50 rounded justify-start items-center gap-1 flex">
                        <div className="text-indigo-600 text-sm font-normal font-['Open Sans'] leading-none">Volver a extraer data</div>
                    </div>
                </div>
                <div className="self-stretch h-[89px] flex-col justify-start items-start gap-1 flex">
                    <div className="self-stretch px-2 py-1 bg-neutral-100 rounded justify-center items-center gap-2 inline-flex">
                        <div className="grow shrink basis-0 h-[19px]"><span className="text-black text-base font-normal font-['Inter']">Se obtuvieron </span><span className="text-indigo-600 text-base font-normal font-['Inter']">1.029 facturas</span><span className="text-black text-base font-normal font-['Inter']"> 🔗</span></div>
                    </div>
                    <div className="self-stretch px-2 py-1 bg-neutral-100 rounded justify-center items-center gap-2 inline-flex">
                        <div className="grow shrink basis-0 h-[19px]"><span className="text-black text-base font-normal font-['Inter']">Se obtuvieron </span><span className="text-indigo-600 text-base font-normal font-['Inter']">285 cesiones</span><span className="text-black text-base font-normal font-['Inter']"> 🔗</span></div>
                    </div>
                    <div className="self-stretch px-2 py-1 bg-neutral-100 rounded justify-center items-center gap-2 inline-flex">
                        <div className="grow shrink basis-0 h-[19px]"><span className="text-black text-base font-normal font-['Inter']">Se actualizaron los </span><span className="text-indigo-600 text-base font-normal font-['Inter']">documentos de TGR</span><span className="text-black text-base font-normal font-['Inter']"> 🔗</span></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TimelineItem;