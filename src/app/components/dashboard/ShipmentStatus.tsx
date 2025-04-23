import React from 'react';
import { TruckIcon } from '@heroicons/react/24/outline';

interface ShipmentStatusProps {
  shipmentName: string;
  route: string;
  status: string;
  containers: {
    id: string;
    weight: string;
    departure: string;
    arrival: string;
    temperature: string;
    paymentStatus: string;
  }[];
}

const ShipmentStatus: React.FC<ShipmentStatusProps> = ({ 
  shipmentName, 
  route, 
  status, 
  containers 
}) => {
  return (
    <div className="card mb-8">
      <div className="flex items-start mb-4">
        <div className="bg-blue-500 p-3 rounded-lg mr-4">
          <TruckIcon className="h-6 w-6 text-white" />
        </div>
        <div>
          <h3 className="text-lg font-semibold">{shipmentName}</h3>
          <p className="text-gray-600">{route}</p>
        </div>
        <div className="ml-auto">
          <span className={`status-badge status-${status.toLowerCase().replace(' ', '-')}`}>
            {status}
          </span>
        </div>
      </div>
      
      <div className="flex justify-between mb-4">
        <div className="text-sm text-gray-600">Departed Brazil</div>
        <div className="text-sm text-gray-600">Current Location</div>
        <div className="text-sm text-gray-600">Arriving China</div>
      </div>
      
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
        <div className="bg-blue-500 h-2.5 rounded-full w-1/2"></div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Container ID
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Weight
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Departure
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Estimated Arrival
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Temperature
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Payment Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {containers.map((container) => (
              <tr key={container.id}>
                <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                  {container.id}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  {container.weight}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  {container.departure}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  {container.arrival}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  {container.temperature}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm">
                  <span className="status-badge status-completed">
                    {container.paymentStatus}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShipmentStatus;
