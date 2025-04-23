# Guia do Usuário: Como Editar o Conteúdo do TradeTrack Pro

Este guia explica como editar o conteúdo do seu site TradeTrack Pro diretamente no navegador, sem precisar mexer no código. Utilizamos o Builder.io, uma plataforma de edição visual que permite modificar facilmente as informações exibidas no site.

## Índice
1. [Configuração Inicial](#configuração-inicial)
2. [Acessando o Modo de Edição](#acessando-o-modo-de-edição)
3. [Editando Componentes](#editando-componentes)
4. [Salvando Alterações](#salvando-alterações)
5. [Publicando Alterações](#publicando-alterações)
6. [Dicas e Boas Práticas](#dicas-e-boas-práticas)

## Configuração Inicial

Antes de começar a editar o conteúdo, você precisa configurar sua conta no Builder.io:

1. Acesse [builder.io](https://builder.io) e crie uma conta gratuita
2. Após criar a conta, vá para "Account Settings" > "API Keys"
3. Copie sua chave pública (Public API Key)
4. Substitua a chave no arquivo `/src/lib/builder.ts` do seu projeto, onde está escrito `YOUR_API_KEY`
5. Implante novamente o site com a chave atualizada

## Acessando o Modo de Edição

Para começar a editar o conteúdo do site:

1. Acesse seu site normalmente
2. Adicione `?builder.preview=true` ao final da URL
   - Exemplo: `https://seusite.com/?builder.preview=true`
3. Você verá uma mensagem azul no topo da página indicando "Modo de edição ativo"
4. Ao passar o mouse sobre as áreas editáveis, elas serão destacadas com uma borda tracejada azul

## Editando Componentes

O TradeTrack Pro possui três componentes principais que podem ser editados:

### 1. Estatísticas do Dashboard

Este componente exibe os números e estatísticas principais no topo da página.

Para editar:
1. Passe o mouse sobre o componente de estatísticas (os quatro cards no topo)
2. Clique quando aparecer a mensagem "Clique para editar"
3. No painel do Builder.io que aparece:
   - Edite os valores em "stats"
   - Para cada estatística, você pode modificar:
     - "title": O título da estatística
     - "value": O valor principal exibido
     - "subtitle": O texto explicativo abaixo do valor
     - "iconBgColor": A cor de fundo do ícone
     - "iconColor": A cor do ícone

### 2. Status de Envio

Este componente exibe informações sobre os envios atuais.

Para editar:
1. Passe o mouse sobre o componente de status de envio (tabela com informações de contêineres)
2. Clique quando aparecer a mensagem "Clique para editar"
3. No painel do Builder.io que aparece:
   - Edite "shipmentName" para alterar o nome do envio
   - Edite "route" para alterar a rota
   - Edite "status" para alterar o status atual
   - Em "containers", você pode:
     - Adicionar novos contêineres clicando em "Add Item"
     - Remover contêineres clicando no ícone de lixeira
     - Editar detalhes de cada contêiner (ID, peso, datas, etc.)

### 3. Informações de Cliente e Fornecedor

Este componente exibe informações sobre o cliente e o fornecedor.

Para editar:
1. Passe o mouse sobre o componente de informações de cliente e fornecedor
2. Clique quando aparecer a mensagem "Clique para editar"
3. No painel do Builder.io que aparece:
   - Em "client", você pode editar todas as informações do cliente
   - Em "supplier", você pode editar todas as informações do fornecedor
   - Cada campo pode ser modificado individualmente

## Salvando Alterações

Após fazer as edições desejadas:

1. Clique no botão "Save" no canto superior direito do painel do Builder.io
2. Dê um nome à sua versão (ex: "Atualização de abril 2025")
3. Adicione uma descrição opcional das alterações feitas
4. Clique em "Save" para confirmar

## Publicando Alterações

Depois de salvar, você precisa publicar as alterações para que elas apareçam para todos os usuários:

1. No painel do Builder.io, clique no botão "Publish"
2. Selecione quando a publicação deve ocorrer:
   - "Publish now": Publica imediatamente
   - "Schedule": Agenda para uma data e hora específicas
3. Clique em "Publish" para confirmar
4. Suas alterações agora estão visíveis para todos os usuários do site

## Dicas e Boas Práticas

- **Faça um backup**: Antes de fazer grandes alterações, salve uma versão com um nome claro
- **Teste em diferentes dispositivos**: Verifique como as alterações aparecem em celulares e tablets
- **Mantenha a consistência**: Use o mesmo estilo de escrita e formatação em todo o site
- **Evite textos muito longos**: Mantenha as informações concisas e diretas
- **Use imagens de qualidade**: Se adicionar imagens, certifique-se de que são nítidas e profissionais

## Suporte

Se você encontrar problemas ou tiver dúvidas sobre como editar o conteúdo:

1. Consulte a [documentação oficial do Builder.io](https://www.builder.io/c/docs/getting-started)
2. Entre em contato com o administrador do sistema
3. Verifique se está usando a versão mais recente do navegador

---

Este guia foi criado para ajudar você a gerenciar o conteúdo do TradeTrack Pro sem precisar de conhecimentos técnicos. Com o Builder.io, você tem controle total sobre as informações exibidas no site, permitindo atualizações rápidas e fáceis sempre que necessário.
