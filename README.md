# Tripleten web_project_around_express

## Nome do Projeto:

Around the U.S. API

## Descrição do Projeto:

Este projeto é uma API backend desenvolvida com Express.js que fornece endpoints para gerenciar dados de usuários e cards. A aplicação serve como backend para uma aplicação web, permitindo recuperar informações de usuários e cards através de rotas REST.

## Funcionalidades:

### Rota de Usuários:

- Listar todos os usuários
- Buscar usuários específicos por ID

### Rota de Cards:

- Listar todos os cards

### Tratamento de Rotas Não Encontradas:

- Resposta personalizada para rotas inexistentes

## Técnicas e Tecnologias Utilizadas:

### Tecnologias

- Node.js
- Express
- FS para leitura de arquivos JSON
- Path para manipulação de caminhos de arquivo

### Técnicas

- Roteamento modular
- Tratamento de erros
- Middleware do Express
- Leitura síncrona de arquivos JSON
- Manipulação de parâmetros de URL
- Configuração de porta dinâmica

## Como Executar o Projeto

1. Clone o repositório
2. Instale as dependências com `npm install`
3. Inicie o servidor com `npm start`
4. A API estará disponível em `http://localhost:3000`

## Próximos Passos

- Implementar tratamento de erros mais robustos
- Adicionar validação de dados
- Integrar com banco de dados
- Adicionar mais rotas e funcionalidades
