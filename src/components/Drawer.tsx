import React from 'react';
import CompanyData from './CompanyData';

type DrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose }) => {
  return (
    <div className={`fixed inset-0 z-[9999] transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="bg-white w-[360px] h-full shadow-xl">
        <button onClick={onClose} className="p-4 text-gray-600 hover:text-gray-900">Cerrar</button>
        <CompanyData />
      </div>
    </div>
  );
};

export default Drawer;
