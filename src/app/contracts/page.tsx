import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import ContractManagement from '../components/dashboard/ContractManagement';

export default function ContractsPage() {
  // Sample data for contract management
  const contractData = {
    contractName: 'Chicken Feet Export Contract',
    contractRoute: 'Brazil to China via Japan',
    contractStatus: 'Active',
    contracts: [
      {
        type: 'Trial Shipment',
        startDate: 'April 1, 2024',
        endDate: 'May 31, 2024',
        volume: '3 containers (81 MT)',
        price: '$3,700 USD/MT',
        status: 'In Progress'
      },
      {
        type: 'Annual Contract',
        startDate: 'June 1, 2024',
        endDate: 'May 31, 2025',
        volume: '10 containers monthly (270 MT/month)',
        price: '$3,700 USD/MT',
        status: 'Pending'
      }
    ]
  };

  return (
    <MainLayout activePage="contracts">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Contracts</h1>
        <p className="text-gray-600">Manage export contracts and agreements</p>
      </div>
      
      <ContractManagement {...contractData} />
    </MainLayout>
  );
}
