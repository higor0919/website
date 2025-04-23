"use client";

import { BuilderComponent, builder } from '@builder.io/react';
import { useEffect, useState } from 'react';
import { BUILDER_PUBLIC_API_KEY } from '../../../lib/builder';

// Componente que renderiza o conteúdo editável do Builder.io
export default function BuilderEditable({ model, content, children }) {
  const [builderContent, setBuilderContent] = useState(content);

  // Busca o conteúdo do Builder.io quando o componente é montado
  useEffect(() => {
    async function fetchContent() {
      const content = await builder
        .get(model)
        .promise();
      
      setBuilderContent(content);
    }
    
    // Só busca o conteúdo se não foi fornecido como prop
    if (!content) {
      fetchContent();
    }
  }, [model, content]);

  // Renderiza o conteúdo do Builder.io se existir, caso contrário renderiza o conteúdo padrão (children)
  return (
    <>
      {builderContent ? (
        <BuilderComponent 
          model={model} 
          content={builderContent} 
        />
      ) : children}
    </>
  );
}
