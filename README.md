# Tripleten web_project_around_express

## Nome do Projeto:

Around the U.S. API

## Descrição do Projeto:

Este projeto é uma API backend desenvolvida com Express.js que fornece endpoints para gerenciar dados de usuários e cards. A aplicação serve como backend para uma aplicação web, permitindo recuperar informações de usuários e cards através de rotas REST.

## Funcionalidades:

### Rota de Usuários:

- Listar todos os usuários
- Buscar usuários específicos por ID
- Criar um novo usuário
- Atualizar nome e descrição do usuário autenticado
- Atualizar avatar do usuário autenticado

### Rota de Cards:

- Listar todos os cards
- Criar um novo card
- Excluir um card por ID
- Curtir um card
- Remover curtida de um card

### Tratamento de Erros:

- Resposta para erros de validação de dados
- Resposta para ID inválido ou recurso não encontrado
- Resposta para erros de servidor
- Resposta para rotas inexistentes

## Técnicas e Tecnologias Utilizadas:

### Tecnologias

- Node.js
- Express
- MongoDB e Mongoose

### Técnicas

- Roteamento modular
- Tratamento de erros
- Middleware do Express
- Manipulação de parâmetros de URL
- Configuração de porta dinâmica

## Como Executar o Projeto

1. Clone o repositório
2. Instale as dependências com `npm install`
3. Inicie o servidor com `npm start`
4. A API estará disponível em `http://localhost:3000`

## Endpoints da API:

### Usuários:

- GET /users - Retorna todos os usuários
- GET /users/:userId - Retorna um usuário pelo ID
- POST /users - Cria um novo usuário
- PATCH /users/me - Atualiza nome e sobre do usuário autenticado
- PATCH /users/me/avatar - Atualiza o avatar do usuário autenticado

### Cards:

- GET /cards - Retorna todos os cards
- POST /cards - Cria um novo card
- DELETE /cards/:cardId - Exclui um card por ID
- PUT /cards/:cardId/likes - Adiciona uma curtida ao card
- DELETE /cards/:cardId/likes - Remove a curtida do card

## Próximos Passos

- Implementar tratamento de erros mais robustos
- Adicionar validação de dados
- Integrar com banco de dados
- Adicionar mais rotas e funcionalidades
