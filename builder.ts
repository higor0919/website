import { Builder } from '@builder.io/react';

// Registre sua chave pública do Builder.io
// Você precisará criar uma conta no Builder.io e obter uma chave pública
export const BUILDER_PUBLIC_API_KEY = 'c1ce4fb9cc0c4727a065bfdf657db534';

// Inicialize o SDK do Builder com sua chave pública
Builder.init(BUILDER_PUBLIC_API_KEY);

// Exporte o objeto Builder para uso em outros arquivos
export { Builder };
