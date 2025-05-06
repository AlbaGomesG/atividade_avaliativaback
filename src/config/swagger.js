const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API dos Filmes e Diretores',
      version: '1.0.0',
      description: 'Documentação da API para gerenciar filmes e seus diretores.',
    },
  },
  apis: ['./src/routes/*.js'], 
};

const swaggerSpec = swaggerJsdoc(options);

const setupSwagger = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

module.exports = setupSwagger;
