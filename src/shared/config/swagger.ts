import swaggerJSDoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Bahia Barbershop',
      version: '1.0.0',
      description: 'Sistema de Agendamento e Administração de Barbearia',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    tags: [
      {
        name: 'Admin',
        description: 'Permissão de gerenciamento de administradores',
      },
      {
        name: 'Auth',
        description: 'Autenticação e Recuperação de Senha',
      },
    ],
  },
  apis: ['./src/routes/*.ts'],
};

const specs = swaggerJSDoc(options);

export default specs;
