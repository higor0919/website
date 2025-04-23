import React from 'react';
import Link from 'next/link';
import { 
  HomeIcon, 
  TruckIcon, 
  DocumentTextIcon, 
  CurrencyDollarIcon, 
  UserGroupIcon, 
  DocumentDuplicateIcon, 
  ClipboardIcon, 
  Cog6ToothIcon 
} from '@heroicons/react/24/outline';

interface SidebarProps {
  activePage: string;
}

const Sidebar: React.FC<SidebarProps> = ({ activePage }) => {
  const menuItems = [
    { name: 'Dashboard', href: '/', icon: HomeIcon },
    { name: 'Shipments', href: '/shipments', icon: TruckIcon },
    { name: 'Documents', href: '/documents', icon: DocumentTextIcon },
    { name: 'Finances', href: '/finances', icon: CurrencyDollarIcon },
    { name: 'Clients & Suppliers', href: '/clients', icon: UserGroupIcon },
    { name: 'Contracts', href: '/contracts', icon: DocumentDuplicateIcon },
    { name: 'Inspections', href: '/inspections', icon: ClipboardIcon },
    { name: 'Settings', href: '/settings', icon: Cog6ToothIcon },
  ];

  return (
    <div className="w-64 bg-white h-screen shadow-md">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-blue-600">TradeTrack Pro</h1>
        <p className="text-sm text-gray-500">Export Management System</p>
      </div>
      <nav className="mt-6">
        <ul>
          {menuItems.map((item) => (
            <li key={item.name} className="px-2 py-1">
              <Link href={item.href}>
                <div className={activePage === item.name.toLowerCase() ? 'sidebar-item-active' : 'sidebar-item'}>
                  <item.icon className="sidebar-icon" />
                  {item.name}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
