"use client";

import { BuilderComponent, builder, Builder } from '@builder.io/react';
import { useEffect, useState } from 'react';
import { BUILDER_PUBLIC_API_KEY } from '../../../lib/builder';

// Componente para tornar o ShipmentStatus editável
export default function EditableShipmentStatus({ initialData }) {
  const [builderContent, setBuilderContent] = useState(null);
  const model = 'shipment-status';

  useEffect(() => {
    async function fetchContent() {
      const content = await builder
        .get(model)
        .promise();
      
      setBuilderContent(content);
    }
    
    fetchContent();
  }, []);

  // Registrar os dados iniciais como conteúdo padrão
  useEffect(() => {
    // Registrar o modelo no Builder.io
    Builder.registerComponent(
      (props) => {
        return (
          <div className="card mb-8">
            <div className="flex items-start mb-4">
              <div className="bg-blue-500 p-3 rounded-lg mr-4">
                <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold">{props.shipmentName}</h3>
                <p className="text-gray-600">{props.route}</p>
              </div>
              <div className="ml-auto">
                <span className={`status-badge status-${props.status.toLowerCase().replace(' ', '-')}`}>
                  {props.status}
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
                  {props.containers.map((container) => (
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
      },
      {
        name: 'Shipment Status',
        inputs: [
          {
            name: 'shipmentName',
            type: 'string',
            defaultValue: initialData?.shipmentName || 'Chicken Feet Shipment',
          },
          {
            name: 'route',
            type: 'string',
            defaultValue: initialData?.route || 'Brazil to China via Japan',
          },
          {
            name: 'status',
            type: 'string',
            defaultValue: initialData?.status || 'In Transit',
          },
          {
            name: 'containers',
            type: 'list',
            defaultValue: initialData?.containers || [],
            subFields: [
              {
                name: 'id',
                type: 'string',
              },
              {
                name: 'weight',
                type: 'string',
              },
              {
                name: 'departure',
                type: 'string',
              },
              {
                name: 'arrival',
                type: 'string',
              },
              {
                name: 'temperature',
                type: 'string',
              },
              {
                name: 'paymentStatus',
                type: 'string',
              },
            ],
          },
        ],
      }
    );
  }, [initialData]);

  return (
    <>
      {builderContent ? (
        <BuilderComponent model={model} content={builderContent} />
      ) : (
        // Renderizar o componente original com os dados iniciais
        <div className="card mb-8">
          <div className="flex items-start mb-4">
            <div className="bg-blue-500 p-3 rounded-lg mr-4">
              <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold">{initialData?.shipmentName}</h3>
              <p className="text-gray-600">{initialData?.route}</p>
            </div>
            <div className="ml-auto">
              <span className={`status-badge status-${initialData?.status.toLowerCase().replace(' ', '-')}`}>
                {initialData?.status}
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
                {initialData?.containers.map((container) => (
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
      )}
    </>
  );
}
