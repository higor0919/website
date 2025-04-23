"use client";

import { BuilderComponent, builder, Builder } from '@builder.io/react';
import { useEffect, useState } from 'react';
import { BUILDER_PUBLIC_API_KEY } from '../../../lib/builder';

// Componente para tornar o DashboardStats editável
export default function EditableDashboardStats({ initialData }) {
  const [builderContent, setBuilderContent] = useState(null);
  const model = 'dashboard-stats';

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {props.stats.map((stat, index) => (
              <div key={index} className="card">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-gray-500 text-sm">{stat.title}</h3>
                    <p className="text-2xl font-bold mt-1">{stat.value}</p>
                    <p className="text-sm text-gray-600 mt-1">{stat.subtitle}</p>
                  </div>
                  <div className={`${stat.iconBgColor} p-3 rounded-full`}>
                    <svg className={`h-6 w-6 ${stat.iconColor}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      },
      {
        name: 'Dashboard Stats',
        inputs: [
          {
            name: 'stats',
            type: 'list',
            defaultValue: initialData || [
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
            ],
            subFields: [
              {
                name: 'title',
                type: 'string',
              },
              {
                name: 'value',
                type: 'string',
              },
              {
                name: 'subtitle',
                type: 'string',
              },
              {
                name: 'iconBgColor',
                type: 'string',
                enum: ['bg-blue-100', 'bg-green-100', 'bg-purple-100', 'bg-yellow-100', 'bg-red-100', 'bg-indigo-100'],
              },
              {
                name: 'iconColor',
                type: 'string',
                enum: ['text-blue-500', 'text-green-500', 'text-purple-500', 'text-yellow-500', 'text-red-500', 'text-indigo-500'],
              }
            ],
          },
        ],
      }
    );
  }, [initialData]);

  // Renderizar o componente do Builder.io ou o componente padrão
  return (
    <>
      {builderContent ? (
        <BuilderComponent model={model} content={builderContent} />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-gray-500 text-sm">Active Shipments</h3>
                <p className="text-2xl font-bold mt-1">3</p>
                <p className="text-sm text-gray-600 mt-1">3 new containers</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <svg className="h-6 w-6 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-gray-500 text-sm">Pending Payments</h3>
                <p className="text-2xl font-bold mt-1">$299,700</p>
                <p className="text-sm text-gray-600 mt-1">70% after BL</p>
              </div>
              <div className="bg-green-100 p-3 rounded-full">
                <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-gray-500 text-sm">Total Volume</h3>
                <p className="text-2xl font-bold mt-1">81 MT</p>
                <p className="text-sm text-gray-600 mt-1">3 containers (27 MT each)</p>
              </div>
              <div className="bg-purple-100 p-3 rounded-full">
                <svg className="h-6 w-6 text-purple-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-gray-500 text-sm">Commission Earnings</h3>
                <p className="text-2xl font-bold mt-1">$14,985</p>
                <p className="text-sm text-gray-600 mt-1">5% commission rate</p>
              </div>
              <div className="bg-yellow-100 p-3 rounded-full">
                <svg className="h-6 w-6 text-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
