import React from 'react';
import { DocumentTextIcon } from '@heroicons/react/24/outline';

interface ContractManagementProps {
  contractName: string;
  contractRoute: string;
  contractStatus: string;
  contracts: {
    type: string;
    startDate: string;
    endDate: string;
    volume: string;
    price: string;
    status: string;
  }[];
}

const ContractManagement: React.FC<ContractManagementProps> = ({
  contractName,
  contractRoute,
  contractStatus,
  contracts
}) => {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Contract Management</h2>
      
      <div className="card mb-6">
        <div className="flex items-start">
          <div className="bg-indigo-100 p-3 rounded-lg mr-4">
            <DocumentTextIcon className="h-6 w-6 text-indigo-500" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">{contractName}</h3>
            <p className="text-gray-600">{contractRoute}</p>
          </div>
          <div className="ml-auto">
            <span className="status-badge status-completed">
              {contractStatus}
            </span>
          </div>
        </div>
      </div>

      <div className="card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contract Type
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Start Date
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  End Date
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Volume
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {contracts.map((contract, index) => (
                <tr key={index}>
                  <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                    {contract.type}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                    {contract.startDate}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                    {contract.endDate}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                    {contract.volume}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                    {contract.price}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm">
                    <span className={`status-badge ${
                      contract.status === 'In Progress' 
                        ? 'status-in-progress' 
                        : contract.status === 'Pending' 
                          ? 'status-pending' 
                          : 'status-completed'
                    }`}>
                      {contract.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ContractManagement;
