"use client";

import { BuilderComponent, builder } from '@builder.io/react';
import { useEffect, useState } from 'react';
import { BUILDER_PUBLIC_API_KEY } from '../lib/builder';
import MainLayout from './components/layout/MainLayout';
import EditableDashboardStats from './components/dashboard/EditableDashboardStats';
import EditableShipmentStatus from './components/dashboard/EditableShipmentStatus';
import DocumentList from './components/dashboard/DocumentList';
import FinancialTracking from './components/dashboard/FinancialTracking';
import InspectionTracking from './components/dashboard/InspectionTracking';
import EditableClientSupplierInfo from './components/dashboard/EditableClientSupplierInfo';
import ContractManagement from './components/dashboard/ContractManagement';
import UpcomingShipments from './components/dashboard/UpcomingShipments';

export default function Home() {
  // Dados de exemplo para status de envio
  const shipmentData = {
    shipmentName: 'Chicken Feet Shipment',
    route: 'Brazil to China via Japan',
    status: 'In Transit',
    containers: [
      {
        id: 'MSCU-7863245',
        weight: '27 MT',
        departure: 'April 15, 2024',
        arrival: 'May 20, 2024',
        temperature: '0°-18°C',
        paymentStatus: '30% Paid'
      },
      {
        id: 'MSCU-7863246',
        weight: '27 MT',
        departure: 'April 15, 2024',
        arrival: 'May 20, 2024',
        temperature: '0°-18°C',
        paymentStatus: '30% Paid'
      },
      {
        id: 'MSCU-7863247',
        weight: '27 MT',
        departure: 'April 15, 2024',
        arrival: 'May 20, 2024',
        temperature: '0°-18°C',
        paymentStatus: '30% Paid'
      }
    ]
  };
  
  // Dados de exemplo para rastreamento financeiro
  const financialData = {
    contractValue: '$299,700 USD',
    advancePayment: '$89,910 USD',
    advanceDate: 'April 10, 2024',
    balancePayment: '$209,790 USD',
    balanceCondition: 'Due upon BL receipt',
    transactions: [
      {
        transaction: 'Advance Payment',
        date: 'April 10, 2024',
        amount: '$89,910 USD',
        status: 'Completed',
        method: 'TT (Telegraphic Transfer)'
      },
      {
        transaction: 'Supplier Payment (30%)',
        date: 'April 12, 2024',
        amount: '$85,414.50 USD',
        status: 'Completed',
        method: 'TT (Telegraphic Transfer)'
      },
      {
        transaction: 'Commission (30%)',
        date: 'April 12, 2024',
        amount: '$4,495.50 USD',
        status: 'Completed',
        method: 'Internal Transfer'
      },
      {
        transaction: 'Balance Payment',
        date: 'Pending',
        amount: '$209,790 USD',
        status: 'Pending',
        method: 'TT (Telegraphic Transfer)'
      }
    ]
  };
  
  // Dados de exemplo para rastreamento de inspeção
  const inspectionData = {
    inspectionLocation: 'Santos Port, Brazil',
    inspections: [
      {
        type: 'Quality Inspection',
        date: 'April 8, 2024',
        inspector: 'SGS Brazil',
        location: 'Santos Port',
        status: 'Passed'
      },
      {
        type: 'Temperature Check',
        date: 'April 8, 2024',
        inspector: 'SGS Brazil',
        location: 'Santos Port',
        status: 'Passed'
      },
      {
        type: 'Packaging Inspection',
        date: 'April 8, 2024',
        inspector: 'SGS Brazil',
        location: 'Santos Port',
        status: 'Passed'
      },
      {
        type: 'New Alliance LLC Inspection',
        date: 'April 10, 2024',
        inspector: 'New Alliance Team',
        location: 'Santos Port',
        status: 'Passed'
      }
    ]
  };
  
  // Dados de exemplo para informações de cliente e fornecedor
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
  
  // Dados de exemplo para gerenciamento de contratos
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
  
  // Dados de exemplo para próximos envios
  const upcomingShipmentsData = {
    monthlyVolume: '10 containers per month (270 MT)',
    scheduledShipments: [
      {
        period: 'June 2024',
        volume: '10 containers (270 MT)',
        estimatedValue: '$999,000 USD',
        status: 'Planning'
      },
      {
        period: 'July 2024',
        volume: '10 containers (270 MT)',
        estimatedValue: '$999,000 USD',
        status: 'Planning'
      },
      {
        period: 'August 2024',
        volume: '10 containers (270 MT)',
        estimatedValue: '$999,000 USD',
        status: 'Not Started'
      }
    ]
  };

  // Verificar se estamos em modo de edição
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    // Verificar se estamos em modo de edição do Builder.io
    const searchParams = new URLSearchParams(window.location.search);
    const isBuilderPreview = searchParams.get('builder.preview') === 'true';
    setIsEditMode(isBuilderPreview);
  }, []);

  return (
    <MainLayout activePage="dashboard">
      <div className="mb-6">
        {isEditMode && (
          <div className="bg-blue-100 p-4 rounded-lg mb-4">
            <p className="text-blue-800 font-medium">Modo de edição ativo. Clique nos componentes para editar.</p>
          </div>
        )}
      </div>
      
      <EditableDashboardStats initialData={[
        {
          title: 'Active Shipments',
          value: '3',
          subtitle: '3 new containers',
          iconBgColor: 'bg-blue-100',
          iconColor: 'text-blue-500'
        },
        {
          title: 'Pending Payments',
          value: '$299,700',
          subtitle: '70% after BL',
          iconBgColor: 'bg-green-100',
          iconColor: 'text-green-500'
        },
        {
          title: 'Total Volume',
          value: '81 MT',
          subtitle: '3 containers (27 MT each)',
          iconBgColor: 'bg-purple-100',
          iconColor: 'text-purple-500'
        },
        {
          title: 'Commission Earnings',
          value: '$14,985',
          subtitle: '5% commission rate',
          iconBgColor: 'bg-yellow-100',
          iconColor: 'text-yellow-500'
        }
      ]} />
      <EditableShipmentStatus initialData={shipmentData} />
      <DocumentList />
      <FinancialTracking {...financialData} />
      <InspectionTracking {...inspectionData} />
      <EditableClientSupplierInfo initialData={clientSupplierData} />
      <ContractManagement {...contractData} />
      <UpcomingShipments {...upcomingShipmentsData} />
    </MainLayout>
  );
}
