'use client'

import { ReactNode, Dispatch, SetStateAction } from 'react';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';

interface ReusableModalProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  title: string;
  content: string;
  icon: React.ElementType;
  buttonText: string;
  onButtonClick: () => void;
  children?: ReactNode;
}

const ReusableModal: React.FC<ReusableModalProps> = ({ open, setOpen, title, content, icon: Icon, buttonText, onButtonClick, children }) => {
  return (
    <Dialog open={open} onClose={() => setOpen(false)} className="relative z-[99999]">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-neutral-900 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-visible rounded-3xl bg-white dark:bg-neutral-800 px-4 pb-4 pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-sm sm:p-6 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div>
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900">
                <Icon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
              </div>
              <div className="mt-3 text-center sm:mt-5">
                <DialogTitle as="h3" className="text-base font-semibold leading-6 text-gray-900 dark:text-white">
                  {title}
                </DialogTitle>
                <div className="mt-2">
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {content}
                  </p>
                  {children}
                </div>
              </div>
            </div>
            <div className="mt-5 sm:mt-6">
              <button
                type="button"
                onClick={onButtonClick}
                className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {buttonText}
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default ReusableModal;
