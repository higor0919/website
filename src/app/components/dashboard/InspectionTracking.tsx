import React from 'react';
import { ClipboardIcon } from '@heroicons/react/24/outline';

interface InspectionTrackingProps {
  inspectionLocation: string;
  inspections: {
    type: string;
    date: string;
    inspector: string;
    location: string;
    status: string;
  }[];
}

const InspectionTracking: React.FC<InspectionTrackingProps> = ({
  inspectionLocation,
  inspections
}) => {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Inspection Tracking</h2>
      
      <div className="card mb-6">
        <div className="flex items-start">
          <div className="bg-purple-100 p-3 rounded-lg mr-4">
            <ClipboardIcon className="h-6 w-6 text-purple-500" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">SGS Inspection</h3>
            <p className="text-gray-600">{inspectionLocation}</p>
          </div>
          <div className="ml-auto">
            <span className="status-badge status-completed">
              Completed
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
                  Inspection Type
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Inspector
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Location
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Report
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {inspections.map((inspection, index) => (
                <tr key={index}>
                  <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                    {inspection.type}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                    {inspection.date}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                    {inspection.inspector}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                    {inspection.location}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm">
                    <span className="status-badge status-passed">
                      {inspection.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-blue-500">
                    <button className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd"></path>
                      </svg>
                      Download
                    </button>
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

export default InspectionTracking;
