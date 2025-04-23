import React from 'react';
import { BuildingOfficeIcon, UserIcon } from '@heroicons/react/24/outline';

interface ClientSupplierInfoProps {
  client: {
    name: string;
    location: string;
    contactPerson: string;
    contactEmail: string;
    contactPhone: string;
    paymentTerms: string;
    contractStatus: string;
    contractDetails: string;
  };
  supplier: {
    name: string;
    location: string;
    contactPerson: string;
    contactEmail: string;
    contactPhone: string;
    shippingTerms: string;
    exportLicense: string;
    expiryDate: string;
  };
}

const ClientSupplierInfo: React.FC<ClientSupplierInfoProps> = ({ client, supplier }) => {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Client & Supplier Information</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Client Information */}
        <div className="card">
          <div className="flex items-center mb-4">
            <div className="bg-blue-100 p-3 rounded-full mr-3">
              <BuildingOfficeIcon className="h-6 w-6 text-blue-500" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">{client.name}</h3>
              <p className="text-gray-600">{client.location}</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-4">
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">Contact Person</span>
              <span className="font-medium">{client.contactPerson}</span>
            </div>
            
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">Contact Email</span>
              <span className="font-medium">{client.contactEmail}</span>
            </div>
            
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">Contact Phone</span>
              <span className="font-medium">{client.contactPhone}</span>
            </div>
            
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">Payment Terms</span>
              <span className="font-medium">{client.paymentTerms}</span>
            </div>
            
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">Contract Status</span>
              <div className="mt-1">
                <span className="status-badge status-completed">
                  {client.contractStatus}
                </span>
              </div>
            </div>
            
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">Contract Details</span>
              <span className="font-medium">{client.contractDetails}</span>
            </div>
          </div>
        </div>
        
        {/* Supplier Information */}
        <div className="card">
          <div className="flex items-center mb-4">
            <div className="bg-green-100 p-3 rounded-full mr-3">
              <UserIcon className="h-6 w-6 text-green-500" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">{supplier.name}</h3>
              <p className="text-gray-600">{supplier.location}</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-4">
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">Contact Person</span>
              <span className="font-medium">{supplier.contactPerson}</span>
            </div>
            
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">Contact Email</span>
              <span className="font-medium">{supplier.contactEmail}</span>
            </div>
            
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">Contact Phone</span>
              <span className="font-medium">{supplier.contactPhone}</span>
            </div>
            
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">Shipping Terms</span>
              <span className="font-medium">{supplier.shippingTerms}</span>
            </div>
            
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">Export License</span>
              <div className="mt-1">
                <span className="status-badge status-completed">
                  Valid
                </span>
              </div>
            </div>
            
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">Expires</span>
              <span className="font-medium">{supplier.expiryDate}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientSupplierInfo;
