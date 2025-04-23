# Guia de Teste da Funcionalidade de Edição com Builder.io

Para testar a funcionalidade de edição de conteúdo implementada com Builder.io no site TradeTrack Pro, siga os passos abaixo:

## Pré-requisitos
1. Criar uma conta no Builder.io
2. Obter uma chave de API pública
3. Substituir a chave de API no arquivo `/src/lib/builder.ts`

## Passos para Teste

### 1. Configuração Inicial
- Substituir `YOUR_API_KEY` no arquivo `/src/lib/builder.ts` pela chave de API real do Builder.io
- Iniciar o servidor de desenvolvimento com `npm run dev`
- Acessar o site localmente em `http://localhost:3000`

### 2. Testar Modo de Edição
- Acessar o site com o parâmetro de edição: `http://localhost:3000/?builder.preview=true`
- Verificar se a mensagem "Modo de edição ativo" aparece no topo da página
- Clicar nos componentes editáveis para abrir o editor do Builder.io

### 3. Testar Edição de Estatísticas do Dashboard
- Clicar no componente de estatísticas do dashboard
- Modificar os valores, títulos e subtítulos
- Salvar as alterações
- Verificar se as mudanças são aplicadas corretamente

### 4. Testar Edição de Status de Envio
- Clicar no componente de status de envio
- Modificar o nome do envio, rota e status
- Editar informações dos contêineres
- Salvar as alterações
- Verificar se as mudanças são aplicadas corretamente

### 5. Testar Edição de Informações de Cliente e Fornecedor
- Clicar no componente de informações de cliente e fornecedor
- Modificar os dados do cliente e do fornecedor
- Salvar as alterações
- Verificar se as mudanças são aplicadas corretamente

### 6. Verificar Persistência das Alterações
- Recarregar a página sem o parâmetro de edição
- Verificar se as alterações feitas foram salvas e são exibidas corretamente
- Acessar novamente com o parâmetro de edição e verificar se é possível continuar editando

## Resultados Esperados
- Todos os componentes editáveis devem permitir modificações através da interface do Builder.io
- As alterações devem ser salvas corretamente no Builder.io
- As alterações devem ser exibidas corretamente quando o site é acessado normalmente
- O processo de edição deve ser intuitivo e não exigir conhecimentos de programação
