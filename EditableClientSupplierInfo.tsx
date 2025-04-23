"use client";

import { BuilderComponent, builder, Builder } from '@builder.io/react';
import { useEffect, useState } from 'react';
import { BUILDER_PUBLIC_API_KEY } from '../../../lib/builder';

// Componente para tornar o ClientSupplierInfo editável
export default function EditableClientSupplierInfo({ initialData }) {
  const [builderContent, setBuilderContent] = useState(null);
  const model = 'client-supplier-info';

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
            <h3 className="text-lg font-semibold mb-4">Informações de Cliente e Fornecedor</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-md font-medium mb-3">Cliente</h4>
                <div className="space-y-2">
                  <div>
                    <span className="text-gray-600 text-sm">Nome:</span>
                    <p>{props.client.name}</p>
                  </div>
                  <div>
                    <span className="text-gray-600 text-sm">Localização:</span>
                    <p>{props.client.location}</p>
                  </div>
                  <div>
                    <span className="text-gray-600 text-sm">Contato:</span>
                    <p>{props.client.contactPerson}</p>
                  </div>
                  <div>
                    <span className="text-gray-600 text-sm">Email:</span>
                    <p>{props.client.contactEmail}</p>
                  </div>
                  <div>
                    <span className="text-gray-600 text-sm">Telefone:</span>
                    <p>{props.client.contactPhone}</p>
                  </div>
                  <div>
                    <span className="text-gray-600 text-sm">Termos de Pagamento:</span>
                    <p>{props.client.paymentTerms}</p>
                  </div>
                  <div>
                    <span className="text-gray-600 text-sm">Status do Contrato:</span>
                    <p>{props.client.contractStatus}</p>
                  </div>
                  <div>
                    <span className="text-gray-600 text-sm">Detalhes do Contrato:</span>
                    <p>{props.client.contractDetails}</p>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-md font-medium mb-3">Fornecedor</h4>
                <div className="space-y-2">
                  <div>
                    <span className="text-gray-600 text-sm">Nome:</span>
                    <p>{props.supplier.name}</p>
                  </div>
                  <div>
                    <span className="text-gray-600 text-sm">Localização:</span>
                    <p>{props.supplier.location}</p>
                  </div>
                  <div>
                    <span className="text-gray-600 text-sm">Contato:</span>
                    <p>{props.supplier.contactPerson}</p>
                  </div>
                  <div>
                    <span className="text-gray-600 text-sm">Email:</span>
                    <p>{props.supplier.contactEmail}</p>
                  </div>
                  <div>
                    <span className="text-gray-600 text-sm">Telefone:</span>
                    <p>{props.supplier.contactPhone}</p>
                  </div>
                  <div>
                    <span className="text-gray-600 text-sm">Termos de Envio:</span>
                    <p>{props.supplier.shippingTerms}</p>
                  </div>
                  <div>
                    <span className="text-gray-600 text-sm">Licença de Exportação:</span>
                    <p>{props.supplier.exportLicense}</p>
                  </div>
                  <div>
                    <span className="text-gray-600 text-sm">Data de Expiração:</span>
                    <p>{props.supplier.expiryDate}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      },
      {
        name: 'Client and Supplier Info',
        inputs: [
          {
            name: 'client',
            type: 'object',
            defaultValue: initialData?.client || {
              name: 'Chinese Buyer Co., Ltd.',
              location: 'Shanghai, China',
              contactPerson: 'Mr. Zhang Wei',
              contactEmail: 'zhang.wei@chinesebuyer.com',
              contactPhone: '+86 131 2345 6789',
              paymentTerms: '30% Advance, 70% after BL',
              contractStatus: 'Active',
              contractDetails: 'Trial 3 containers, then 10 monthly'
            },
            subFields: [
              {
                name: 'name',
                type: 'string',
              },
              {
                name: 'location',
                type: 'string',
              },
              {
                name: 'contactPerson',
                type: 'string',
              },
              {
                name: 'contactEmail',
                type: 'string',
              },
              {
                name: 'contactPhone',
                type: 'string',
              },
              {
                name: 'paymentTerms',
                type: 'string',
              },
              {
                name: 'contractStatus',
                type: 'string',
              },
              {
                name: 'contractDetails',
                type: 'string',
              },
            ],
          },
          {
            name: 'supplier',
            type: 'object',
            defaultValue: initialData?.supplier || {
              name: 'Brazilian Protein Supplier S.A.',
              location: 'São Paulo, Brazil',
              contactPerson: 'Sr. Carlos Silva',
              contactEmail: 'carlos.silva@brazilprotein.com',
              contactPhone: '+55 11 9876 5432',
              shippingTerms: 'CIF Shanghai',
              exportLicense: 'Valid',
              expiryDate: 'December 31, 2024'
            },
            subFields: [
              {
                name: 'name',
                type: 'string',
              },
              {
                name: 'location',
                type: 'string',
              },
              {
                name: 'contactPerson',
                type: 'string',
              },
              {
                name: 'contactEmail',
                type: 'string',
              },
              {
                name: 'contactPhone',
                type: 'string',
              },
              {
                name: 'shippingTerms',
                type: 'string',
              },
              {
                name: 'exportLicense',
                type: 'string',
              },
              {
                name: 'expiryDate',
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
        <div className="card mb-8">
          <h3 className="text-lg font-semibold mb-4">Informações de Cliente e Fornecedor</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-md font-medium mb-3">Cliente</h4>
              <div className="space-y-2">
                <div>
                  <span className="text-gray-600 text-sm">Nome:</span>
                  <p>{initialData?.client.name}</p>
                </div>
                <div>
                  <span className="text-gray-600 text-sm">Localização:</span>
                  <p>{initialData?.client.location}</p>
                </div>
                <div>
                  <span className="text-gray-600 text-sm">Contato:</span>
                  <p>{initialData?.client.contactPerson}</p>
                </div>
                <div>
                  <span className="text-gray-600 text-sm">Email:</span>
                  <p>{initialData?.client.contactEmail}</p>
                </div>
                <div>
                  <span className="text-gray-600 text-sm">Telefone:</span>
                  <p>{initialData?.client.contactPhone}</p>
                </div>
                <div>
                  <span className="text-gray-600 text-sm">Termos de Pagamento:</span>
                  <p>{initialData?.client.paymentTerms}</p>
                </div>
                <div>
                  <span className="text-gray-600 text-sm">Status do Contrato:</span>
                  <p>{initialData?.client.contractStatus}</p>
                </div>
                <div>
                  <span className="text-gray-600 text-sm">Detalhes do Contrato:</span>
                  <p>{initialData?.client.contractDetails}</p>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-md font-medium mb-3">Fornecedor</h4>
              <div className="space-y-2">
                <div>
                  <span className="text-gray-600 text-sm">Nome:</span>
                  <p>{initialData?.supplier.name}</p>
                </div>
                <div>
                  <span className="text-gray-600 text-sm">Localização:</span>
                  <p>{initialData?.supplier.location}</p>
                </div>
                <div>
                  <span className="text-gray-600 text-sm">Contato:</span>
                  <p>{initialData?.supplier.contactPerson}</p>
                </div>
                <div>
                  <span className="text-gray-600 text-sm">Email:</span>
                  <p>{initialData?.supplier.contactEmail}</p>
                </div>
                <div>
                  <span className="text-gray-600 text-sm">Telefone:</span>
                  <p>{initialData?.supplier.contactPhone}</p>
                </div>
                <div>
                  <span className="text-gray-600 text-sm">Termos de Envio:</span>
                  <p>{initialData?.supplier.shippingTerms}</p>
                </div>
                <div>
                  <span className="text-gray-600 text-sm">Licença de Exportação:</span>
                  <p>{initialData?.supplier.exportLicense}</p>
                </div>
                <div>
                  <span className="text-gray-600 text-sm">Data de Expiração:</span>
                  <p>{initialData?.supplier.expiryDate}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
