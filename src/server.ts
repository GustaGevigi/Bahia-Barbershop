import dotenv from 'dotenv';
dotenv.config();

import app from './app';
import sequelize from './shared/config/sequelize';
//import { setupAssociations } from '';
import { connectMongoDB } from './shared/config/mongodb';

const startServer = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();

    console.log('Conectado ao banco:', sequelize.getDatabaseName());
    console.log('Host do banco:', sequelize.config.host);
    console.log('Dialeto sendo usado:', sequelize.getDialect());

    console.log('Connection with MySQL established.');

    await connectMongoDB();

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server listening on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Failed to establish connection with MySQL', error);
  }
};

startServer();
