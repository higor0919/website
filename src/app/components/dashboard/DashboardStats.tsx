import React from 'react';
import { 
  TruckIcon, 
  CurrencyDollarIcon, 
  ScaleIcon, 
  CubeIcon 
} from '@heroicons/react/24/outline';

interface StatCardProps {
  title: string;
  value: string;
  subtitle: string;
  icon: React.ReactNode;
  iconBgColor: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, subtitle, icon, iconBgColor }) => {
  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-gray-500 text-sm">{title}</h3>
          <p className="text-2xl font-bold mt-1">{value}</p>
          <p className="text-sm text-gray-600 mt-1">{subtitle}</p>
        </div>
        <div className={`${iconBgColor} p-3 rounded-full`}>
          {icon}
        </div>
      </div>
    </div>
  );
};

const DashboardStats: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <StatCard 
        title="Active Shipments" 
        value="3" 
        subtitle="3 new containers" 
        icon={<TruckIcon className="h-6 w-6 text-blue-500" />} 
        iconBgColor="bg-blue-100" 
      />
      <StatCard 
        title="Pending Payments" 
        value="$299,700" 
        subtitle="70% after BL" 
        icon={<CurrencyDollarIcon className="h-6 w-6 text-green-500" />} 
        iconBgColor="bg-green-100" 
      />
      <StatCard 
        title="Total Volume" 
        value="81 MT" 
        subtitle="3 containers (27 MT each)" 
        icon={<ScaleIcon className="h-6 w-6 text-purple-500" />} 
        iconBgColor="bg-purple-100" 
      />
      <StatCard 
        title="Commission Earnings" 
        value="$14,985" 
        subtitle="5% commission rate" 
        icon={<CubeIcon className="h-6 w-6 text-yellow-500" />} 
        iconBgColor="bg-yellow-100" 
      />
    </div>
  );
};

export default DashboardStats;
