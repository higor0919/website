import React from 'react';
import MainLayout from './components/layout/MainLayout';
import DashboardStats from './components/dashboard/DashboardStats';
import ShipmentStatus from './components/dashboard/ShipmentStatus';
import DocumentList from './components/dashboard/DocumentList';
import FinancialTracking from './components/dashboard/FinancialTracking';
import InspectionTracking from './components/dashboard/InspectionTracking';
import ClientSupplierInfo from './components/dashboard/ClientSupplierInfo';
import ContractManagement from './components/dashboard/ContractManagement';
import UpcomingShipments from './components/dashboard/UpcomingShipments';

export default function Home() {
  // Sample data for shipment status
  const shipmentData = {
    shipmentName: 'Trial Shipment - 3 Containers',
    route: 'Santos Port, Brazil to Shanghai, China',
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

  // Sample data for financial tracking
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

  // Sample data for inspection tracking
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

  // Sample data for upcoming shipments
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

  return (
    <MainLayout activePage="dashboard">
      <DashboardStats />
      <ShipmentStatus {...shipmentData} />
      <DocumentList />
      <FinancialTracking {...financialData} />
      <InspectionTracking {...inspectionData} />
      <ClientSupplierInfo {...clientSupplierData} />
      <ContractManagement {...contractData} />
      <UpcomingShipments {...upcomingShipmentsData} />
    </MainLayout>
  );
}
