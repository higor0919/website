import React from 'react';
import { CalendarIcon } from '@heroicons/react/24/outline';

interface UpcomingShipmentsProps {
  monthlyVolume: string;
  scheduledShipments: {
    period: string;
    volume: string;
    estimatedValue: string;
    status: string;
  }[];
}

const UpcomingShipments: React.FC<UpcomingShipmentsProps> = ({
  monthlyVolume,
  scheduledShipments
}) => {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Upcoming Shipments (Annual Contract)</h2>
      
      <div className="card mb-6">
        <div className="flex items-start">
          <div className="bg-amber-100 p-3 rounded-lg mr-4">
            <CalendarIcon className="h-6 w-6 text-amber-500" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Scheduled Monthly Shipments</h3>
            <p className="text-gray-600">{monthlyVolume}</p>
          </div>
        </div>
      </div>

      <div className="card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Shipment Period
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Volume
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Estimated Value
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {scheduledShipments.map((shipment, index) => (
                <tr key={index}>
                  <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                    {shipment.period}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                    {shipment.volume}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                    {shipment.estimatedValue}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm">
                    <span className={`status-badge ${
                      shipment.status === 'Planning' 
                        ? 'status-planning' 
                        : shipment.status === 'Not Started' 
                          ? 'status-not-started' 
                          : 'status-in-progress'
                    }`}>
                      {shipment.status}
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

export default UpcomingShipments;
