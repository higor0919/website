import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import ShipmentStatus from '../components/dashboard/ShipmentStatus';
import UpcomingShipments from '../components/dashboard/UpcomingShipments';

export default function ShipmentsPage() {
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
    <MainLayout activePage="shipments">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Shipments</h1>
        <p className="text-gray-600">Manage and track your chicken feet shipments</p>
      </div>
      
      <ShipmentStatus {...shipmentData} />
      <UpcomingShipments {...upcomingShipmentsData} />
    </MainLayout>
  );
}
