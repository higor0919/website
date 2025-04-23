import React from 'react';
import { BellIcon, UserCircleIcon } from '@heroicons/react/24/outline';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm h-16 flex items-center justify-between px-6">
      <div>
        <h2 className="text-xl font-semibold text-gray-800">Welcome to TradeTrack Pro</h2>
        <p className="text-sm text-gray-500">Your chicken feet export management system</p>
      </div>
      <div className="flex items-center space-x-4">
        <button className="relative p-2 text-gray-600 hover:text-gray-900">
          <BellIcon className="h-6 w-6" />
          <span className="absolute top-1 right-1 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">3</span>
        </button>
        <div className="flex items-center">
          <UserCircleIcon className="h-8 w-8 text-gray-600" />
          <span className="ml-2 text-gray-800">Admin User</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
