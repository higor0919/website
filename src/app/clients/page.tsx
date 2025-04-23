import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import ClientSupplierInfo from '../components/dashboard/ClientSupplierInfo';

export default function ClientsPage() {
  // Sample data for client and supplier information
  const clientSupplierData = {
    client: {
      name: 'Chinese Buyer Co., Ltd.',
      location: 'Shanghai, China',
      contactPerson: 'Mr. Zhang Wei',
      contactEmail: 'zhang.wei@chinesebuyer.com',
      contactPhone: '+86 131 2345 6789',
      paymentTerms: '30% Advance, 70% after BL',
      contractStatus: 'Active',
      contractDetails: 'Trial 3 containers, then 10 monthly'
    },
    supplier: {
      name: 'Brazilian Protein Supplier S.A.',
      location: 'São Paulo, Brazil',
      contactPerson: 'Sr. Carlos Silva',
      contactEmail: 'carlos.silva@brazilprotein.com',
      contactPhone: '+55 11 9876 5432',
      shippingTerms: 'CIF Shanghai',
      exportLicense: 'Valid',
      expiryDate: 'December 31, 2024'
    }
  };

  return (
    <MainLayout activePage="clients & suppliers">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Clients & Suppliers</h1>
        <p className="text-gray-600">Manage client and supplier information</p>
      </div>
      
      <ClientSupplierInfo {...clientSupplierData} />
    </MainLayout>
  );
}
