import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '3306', 10),
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'bbshop',
  database: process.env.DB_NAME || 'bbshop',
  logging: console.log,
  define: {
    timestamps: true,
    underscored: false,
  },
});

export default sequelize;
