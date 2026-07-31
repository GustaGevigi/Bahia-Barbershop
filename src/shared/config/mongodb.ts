import mongoose from 'mongoose';

export const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    console.log('Conexão com MongoDB estabelecida.');
  } catch (error) {
    console.error('Erro ao tentar se conectar com MongoDB: ', error);
    process.exit(1);
  }
};
