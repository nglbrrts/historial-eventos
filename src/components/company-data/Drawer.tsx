import React from 'react';
import CompanyDataContent from './CompanyDataContent';

type DrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose }) => {
  return (
    <div className={`fixed inset-0 z-[9999] transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className=" w-[360px] h-full shadow-xl p-3 bg-white dark:bg-neutral-800">
        <button onClick={onClose} className="p-4 text-gray-600 hover:text-gray-900">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <CompanyDataContent />
      </div>
    </div>
  );
};

export default Drawer;
