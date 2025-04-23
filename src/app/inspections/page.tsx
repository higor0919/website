import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import InspectionTracking from '../components/dashboard/InspectionTracking';

export default function InspectionsPage() {
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

  return (
    <MainLayout activePage="inspections">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Inspections</h1>
        <p className="text-gray-600">Track quality inspections and certifications</p>
      </div>
      
      <InspectionTracking {...inspectionData} />
    </MainLayout>
  );
}
