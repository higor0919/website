"use client";

import { Builder } from '@builder.io/react';
import { useEffect } from 'react';

// Componente para inicializar o Builder.io e registrar os componentes
export default function BuilderInitializer() {
  useEffect(() => {
    // Verificar se estamos em modo de edição
    const searchParams = new URLSearchParams(window.location.search);
    const isBuilderPreview = searchParams.get('builder.preview') === 'true';
    
    if (isBuilderPreview) {
      // Adicionar estilos para destacar áreas editáveis
      const style = document.createElement('style');
      style.innerHTML = `
        [data-builder-component]:hover {
          outline: 2px dashed #2563eb;
          position: relative;
        }
        [data-builder-component]::before {
          content: "Clique para editar";
          position: absolute;
          top: -25px;
          left: 0;
          background: #2563eb;
          color: white;
          padding: 2px 8px;
          font-size: 12px;
          border-radius: 4px;
          opacity: 0;
          transition: opacity 0.2s;
        }
        [data-builder-component]:hover::before {
          opacity: 1;
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  return null;
}
