// Este arquivo contém a configuração para o Builder.io
// Ele será usado para registrar os componentes e modelos

import { Builder } from '@builder.io/react';
import { BUILDER_PUBLIC_API_KEY } from './builder';

// Registrar os modelos que serão usados no Builder.io
export const registerBuilderModels = () => {
  // Modelo para o Dashboard Stats
  Builder.registerModel({
    name: 'dashboard-stats',
    kind: 'component',
    hideFromUI: false,
    defaults: {
      title: 'Estatísticas do Dashboard',
    },
  });

  // Modelo para o Shipment Status
  Builder.registerModel({
    name: 'shipment-status',
    kind: 'component',
    hideFromUI: false,
    defaults: {
      title: 'Status de Envio',
    },
  });

  // Modelo para o Client Supplier Info
  Builder.registerModel({
    name: 'client-supplier-info',
    kind: 'component',
    hideFromUI: false,
    defaults: {
      title: 'Informações de Cliente e Fornecedor',
    },
  });
};

// Inicializar o Builder.io
export const initBuilder = () => {
  Builder.init(BUILDER_PUBLIC_API_KEY);
  registerBuilderModels();
};
